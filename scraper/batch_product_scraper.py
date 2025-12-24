"""
批量产品爬虫 - 自动抓取国内站所有产品并生成 products.ts 代码
================================================================

用途：
    从国内站的产品列表页开始，自动抓取所有产品详情页，提取产品信息，
    并自动生成符合国际站 products.ts 格式的 TypeScript 代码。

使用方法：
    # 抓取某个分类下的所有产品（例如：燃油气锅炉分类）
    python batch_product_scraper.py "http://www.yudongguolu.com/?SortId=10&Type=list"
    
    # 或者指定输出文件名
    python batch_product_scraper.py "http://www.yudongguolu.com/?SortId=10&Type=list" output.ts

输出：
    会生成一个 TypeScript 文件，包含所有产品的完整配置，可以直接复制到 products.ts 里。
"""

import re
import sys
import time
from pathlib import Path
from urllib.parse import urljoin, urlparse, parse_qs

import requests
from bs4 import BeautifulSoup


BASE_URL = "http://www.yudongguolu.com"
session = requests.Session()
session.headers.update({
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
})


def fetch_html(url: str) -> BeautifulSoup:
    """获取并解析网页 HTML"""
    print(f"📥 正在访问: {url}")
    resp = session.get(url, timeout=15)
    resp.raise_for_status()
    resp.encoding = resp.apparent_encoding or "utf-8"
    return BeautifulSoup(resp.text, "html.parser")


def extract_product_links(list_url: str) -> list[str]:
    """从产品列表页提取所有产品详情页链接"""
    soup = fetch_html(list_url)
    links = []
    
    # 查找所有指向产品详情页的链接（通常包含 Type=page&Id=）
    for a in soup.find_all("a", href=True):
        href = a.get("href", "")
        if "Type=page" in href and "Id=" in href:
            full_url = urljoin(BASE_URL, href)
            if full_url not in links:
                links.append(full_url)
    
    print(f"✅ 找到 {len(links)} 个产品链接")
    return links


def clean_text(text: str) -> str:
    """清理文本：去除多余空白、HTML实体等"""
    if not text:
        return ""
    # 替换 HTML 实体
    text = text.replace("&nbsp;", " ").replace("&ldquo;", '"').replace("&rdquo;", '"')
    text = text.replace("&lsquo;", "'").replace("&rsquo;", "'")
    # 去除多余空白
    text = re.sub(r'\s+', ' ', text).strip()
    return text


def extract_product_info(product_url: str) -> dict:
    """从产品详情页提取产品信息"""
    soup = fetch_html(product_url)
    
    # 1. 产品名称（从 h1 或 title）
    name_zh = ""
    h1 = soup.find("h1")
    if h1:
        name_zh = clean_text(h1.get_text())
    if not name_zh:
        title = soup.find("title")
        if title:
            name_zh = clean_text(title.get_text()).replace("-太康县豫东锅炉有限公司", "").strip()
    
    # 2. 产品简介（从产品简介区域）
    intro_zh = ""
    intro_div = soup.find("div", style=lambda x: x and "height:78px" in x)
    if intro_div:
        intro_text = intro_div.get_text()
        if "产品简介：" in intro_text:
            intro_zh = clean_text(intro_text.split("产品简介：", 1)[-1])
    
    # 3. 完整描述（从"产品介绍>>"部分）
    full_desc_zh = ""
    intro_section = soup.find("h2", string=lambda x: x and "产品介绍" in str(x))
    if intro_section:
        next_div = intro_section.find_next("div")
        if next_div:
            full_desc_zh = clean_text(next_div.get_text())
    
    # 4. 性能优势（从"性能优势>>"部分）
    features_zh = []
    advan_section = soup.find("h2", string=lambda x: x and "性能优势" in str(x))
    if advan_section:
        next_div = advan_section.find_next("div")
        if next_div:
            # 提取所有带编号的优势点（例如："（1）..."）
            text = next_div.get_text()
            for match in re.finditer(r'（(\d+)）([^（]+?)(?=（\d+）|$)', text):
                feature = clean_text(match.group(2))
                if feature:
                    features_zh.append(feature)
    
    # 5. 技术参数表
    specs = []
    param_section = soup.find("h2", string=lambda x: x and "技术参数" in str(x))
    if param_section:
        table = param_section.find_next("table")
        if table:
            rows = []
            for tr in table.find_all("tr"):
                cells = [clean_text(td.get_text()) for td in tr.find_all(["td", "th"])]
                if any(cells):
                    rows.append(cells)
            
            # 解析参数表：第一行是型号，后续行是参数
            if len(rows) > 1:
                # 第一行是表头（型号）
                model_row = rows[0]
                # 后续行是参数值
                for row in rows[1:]:
                    if len(row) > 1 and len(row) == len(model_row):
                        # 参数名
                        param_name = row[0]
                        # 为每个型号创建一个 spec（简化版，只提取关键参数）
                        for i, model in enumerate(model_row[1:], 1):
                            if i < len(row):
                                value = row[i]
                                # 这里简化处理，实际可以根据参数名分类
                                if "额定" in param_name and ("功率" in param_name or "热功率" in param_name):
                                    if not specs or len(specs) < len(model_row) - 1:
                                        specs = [{"model": m, "capacity": "", "pressure": "", "efficiency": "", "fuel": ""} 
                                                for m in model_row[1:]]
                                    idx = i - 1
                                    if idx < len(specs):
                                        specs[idx]["capacity"] = value
                                elif "压力" in param_name:
                                    idx = i - 1
                                    if idx < len(specs):
                                        specs[idx]["pressure"] = value
                                elif "效率" in param_name:
                                    idx = i - 1
                                    if idx < len(specs):
                                        specs[idx]["efficiency"] = value
    
    # 6. 图片
    image_url = ""
    img = soup.find("div", class_="cppics")
    if img:
        img_tag = img.find("img")
        if img_tag and img_tag.get("src"):
            image_url = urljoin(BASE_URL, img_tag["src"])
    
    # 7. 从 URL 提取产品 ID
    parsed = urlparse(product_url)
    params = parse_qs(parsed.query)
    product_id = params.get("Id", [""])[0]
    
    # 生成英文名称（简单翻译，你可以后续手动优化）
    name_en = name_zh.replace("WNS", "WNS").replace("低氮", "Low-NOx").replace("冷凝", "Condensing")
    name_en = name_en.replace("燃气", "Gas").replace("热水", "Hot Water").replace("锅炉", "Boiler")
    name_en = name_en.replace("蒸汽", "Steam").replace("卧式", "Horizontal").replace("立式", "Vertical")
    
    return {
        "id": f"product-{product_id}",
        "name_zh": name_zh,
        "name_en": name_en,
        "intro_zh": intro_zh,
        "full_desc_zh": full_desc_zh,
        "features_zh": features_zh,
        "specs": specs if specs else [{"model": "Custom", "capacity": "", "pressure": "", "efficiency": "", "fuel": ""}],
        "image_url": image_url
    }


def generate_ts_code(products: list[dict]) -> str:
    """生成 TypeScript 代码"""
    lines = []
    
    for i, p in enumerate(products):
        # 产品对象开始
        lines.append("  {")
        lines.append(f'    id: "{p["id"]}",')
        lines.append("    name: {")
        lines.append(f'      en: "{p["name_en"]}",')
        lines.append(f'      zh: "{p["name_zh"]}"')
        lines.append("    },")
        lines.append("    description: {")
        lines.append(f'      en: "{p["name_en"]}. High efficiency and reliable operation.",')
        lines.append(f'      zh: "{p["intro_zh"][:100] if p["intro_zh"] else p["name_zh"]}..."')
        lines.append("    },")
        lines.append("    fullDescription: {")
        lines.append(f'      en: "{p["full_desc_zh"][:200] if p["full_desc_zh"] else p["intro_zh"][:200] if p["intro_zh"] else ""}...",')
        lines.append(f'      zh: "{p["full_desc_zh"][:300] if p["full_desc_zh"] else p["intro_zh"][:300] if p["intro_zh"] else ""}"')
        lines.append("    },")
        lines.append(f'    image: "{p["image_url"] or "/images/products/boiler.png"}",')
        lines.append('    icon: "Flame",')
        lines.append("    features: [")
        
        # 性能优势
        for feat in p["features_zh"][:5]:  # 最多5个
            feat_en = feat.replace("（", "(").replace("）", ")")
            lines.append("      {")
            lines.append(f'        en: "{feat_en}",')
            lines.append(f'        zh: "{feat}"')
            lines.append("      },")
        
        lines.append("    ],")
        lines.append("    specs: [")
        
        # 规格参数
        for spec in p["specs"]:
            lines.append("      {")
            lines.append(f'        model: "{spec["model"]}",')
            lines.append(f'        capacity: "{spec["capacity"]}",')
            lines.append(f'        pressure: "{spec["pressure"]}",')
            lines.append(f'        efficiency: "{spec["efficiency"]}",')
            lines.append(f'        fuel: "{spec["fuel"]}"')
            lines.append("      },")
        
        lines.append("    ]")
        lines.append("  },")
        lines.append("")
    
    return "\n".join(lines)


def main():
    if len(sys.argv) < 2:
        print("用法：python batch_product_scraper.py <产品列表页URL> [输出文件名]")
        print("示例：python batch_product_scraper.py \"http://www.yudongguolu.com/?SortId=10&Type=list\"")
        sys.exit(1)
    
    list_url = sys.argv[1]
    output_file = sys.argv[2] if len(sys.argv) > 2 else "products_output.ts"
    
    print("=" * 60)
    print("🚀 开始批量抓取产品...")
    print("=" * 60)
    
    # 1. 获取所有产品链接
    product_links = extract_product_links(list_url)
    
    if not product_links:
        print("❌ 未找到任何产品链接，请检查列表页 URL")
        sys.exit(1)
    
    # 2. 逐个抓取产品信息
    products = []
    for i, link in enumerate(product_links, 1):
        print(f"\n[{i}/{len(product_links)}] 处理产品...")
        try:
            product_info = extract_product_info(link)
            products.append(product_info)
            print(f"  ✅ {product_info['name_zh']}")
            time.sleep(1)  # 避免请求过快
        except Exception as e:
            print(f"  ❌ 抓取失败: {e}")
            continue
    
    # 3. 生成 TypeScript 代码
    print("\n" + "=" * 60)
    print("📝 生成 TypeScript 代码...")
    print("=" * 60)
    
    ts_code = generate_ts_code(products)
    
    # 4. 保存到文件
    output_path = Path(output_file)
    with output_path.open("w", encoding="utf-8") as f:
        f.write("// 自动生成的产品数据，请复制到 products.ts 的 PRODUCT_CATEGORIES 数组中\n")
        f.write("// 注意：英文描述和部分字段可能需要手动优化\n\n")
        f.write(ts_code)
    
    print(f"\n✅ 完成！已抓取 {len(products)} 个产品")
    print(f"📁 输出文件：{output_path.resolve()}")
    print("\n💡 下一步：")
    print("   1. 打开生成的文件，检查并优化英文描述")
    print("   2. 复制代码到 src/data/products.ts 的 PRODUCT_CATEGORIES 数组中")
    print("=" * 60)


if __name__ == "__main__":
    main()

