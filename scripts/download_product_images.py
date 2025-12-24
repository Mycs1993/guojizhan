#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
下载产品图片到本地并更新 products.ts 中的路径
"""

import os
import re
import sys
from pathlib import Path
from urllib.parse import urlparse
import requests

# 需要下载的图片映射：产品ID -> 图片URL
IMAGE_MAP = {
    "commercial-low-nox-mold-temp": "http://www.yudongguolu.com/upfiles/didan/1.jpg",
    "cwdr-electric-hot-water": "http://www.yudongguolu.com/upfiles/dianjiare/3.jpg",
    "wdr-electric-steam": "http://www.yudongguolu.com/upfiles/dianjiare/1.jpg",
    "commercial-low-nox-condensing-hot-water": "http://www.yudongguolu.com/upfiles/didan/2.jpg",
    "dzh-biomass-chain-grate": "http://www.yudongguolu.com/upfiles/shengwuzhi/2.jpg",
    "yglw-organic-heat-carrier": "http://www.yudongguolu.com/upfiles/shengwuzhi/1.jpg",
}

# 获取脚本所在目录
SCRIPT_DIR = Path(__file__).parent
PROJECT_ROOT = SCRIPT_DIR.parent
PRODUCTS_DIR = PROJECT_ROOT / "public" / "images" / "products"
PRODUCTS_TS = PROJECT_ROOT / "src" / "data" / "products.ts"

# 确保目录存在
PRODUCTS_DIR.mkdir(parents=True, exist_ok=True)


def download_image(url: str, filepath: Path) -> bool:
    """下载图片"""
    try:
        headers = {
            "User-Agent": (
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
                "AppleWebKit/537.36 (KHTML, like Gecko) "
                "Chrome/122.0 Safari/537.36"
            )
        }
        response = requests.get(url, headers=headers, timeout=30, stream=True)
        response.raise_for_status()
        
        with open(filepath, "wb") as f:
            for chunk in response.iter_content(chunk_size=8192):
                f.write(chunk)
        
        return True
    except Exception as e:
        print(f"  ❌ 下载失败: {e}")
        return False


def update_products_ts(results: list):
    """更新 products.ts 文件中的图片路径"""
    if not PRODUCTS_TS.exists():
        print(f"❌ 找不到文件: {PRODUCTS_TS}")
        return
    
    content = PRODUCTS_TS.read_text(encoding="utf-8")
    original_content = content
    
    for result in results:
        if result.get("error"):
            continue
        
        product_id = result["product_id"]
        new_path = result["new_path"]
        
        # 使用正则表达式替换图片路径
        # 匹配 id: "product-id" ... image: "old-url"
        pattern = rf'(id:\s+"{re.escape(product_id)}"[^}}]*?image:\s+")[^"]+(")'
        replacement = rf'\1{new_path}\2'
        content = re.sub(pattern, replacement, content, flags=re.DOTALL)
    
    if content != original_content:
        PRODUCTS_TS.write_text(content, encoding="utf-8")
        print("\n✅ 已更新 products.ts 文件中的图片路径！")
    else:
        print("\n⚠️  products.ts 文件未发生变化")


def main():
    print("开始下载产品图片...\n")
    
    results = []
    
    for product_id, url in IMAGE_MAP.items():
        print(f"正在下载: {product_id}...")
        
        # 从URL获取文件扩展名
        parsed = urlparse(url)
        ext = Path(parsed.path).suffix or ".jpg"
        
        # 生成文件名
        filename = f"{product_id}{ext}"
        filepath = PRODUCTS_DIR / filename
        
        # 如果文件已存在，跳过
        if filepath.exists():
            print(f"  ⏭️  文件已存在，跳过: {filename}")
            results.append({
                "product_id": product_id,
                "old_url": url,
                "new_path": f"/images/products/{filename}",
                "skipped": True,
            })
            continue
        
        # 下载图片
        if download_image(url, filepath):
            print(f"  ✅ 下载成功: {filename}")
            results.append({
                "product_id": product_id,
                "old_url": url,
                "new_path": f"/images/products/{filename}",
            })
        else:
            results.append({
                "product_id": product_id,
                "old_url": url,
                "error": "下载失败",
            })
    
    print("\n下载完成！")
    print("\n路径映射：")
    for r in results:
        if r.get("error"):
            print(f"  {r['product_id']}: ❌ {r['error']}")
        elif r.get("skipped"):
            print(f"  {r['product_id']}: ⏭️  已存在 -> {r['new_path']}")
        else:
            print(f"  {r['product_id']}: {r['old_url']} -> {r['new_path']}")
    
    # 更新 products.ts
    update_products_ts(results)


if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        print("\n\n用户中断")
        sys.exit(1)
    except Exception as e:
        print(f"\n❌ 发生错误: {e}")
        import traceback
        traceback.print_exc()
        sys.exit(1)

