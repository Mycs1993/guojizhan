#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
使用AI生成制造设施图片
支持多种AI图片生成服务
"""

import os
import sys
import requests
from pathlib import Path
from typing import Optional

# 获取脚本所在目录
SCRIPT_DIR = Path(__file__).parent
PROJECT_ROOT = SCRIPT_DIR.parent
FACILITIES_DIR = PROJECT_ROOT / "public" / "images" / "facilities"

# 确保目录存在
FACILITIES_DIR.mkdir(parents=True, exist_ok=True)

# 需要生成的图片列表
FACILITY_IMAGES = [
    {
        "filename": "production-workshop.jpg",
        "prompt": "Modern industrial boiler production workshop with automated welding equipment, CNC machining centers, and precision assembly stations. Clean, professional, well-lit factory floor. Industrial photography style.",
        "description": "生产车间"
    },
    {
        "filename": "quality-testing-lab.jpg",
        "prompt": "Professional quality testing laboratory with hydraulic pressure testing equipment, ultrasonic testing machines, and material analysis instruments. Modern, clean, scientific environment. Professional photography.",
        "description": "质量检测实验室"
    },
    {
        "filename": "rd-center.jpg",
        "prompt": "State-of-the-art research and development center with CAD/CAM workstations, thermal efficiency testing equipment, and engineering team working. Modern office and lab environment. Professional corporate photography.",
        "description": "研发中心"
    },
    {
        "filename": "material-storage.jpg",
        "prompt": "Organized industrial material storage warehouse with steel materials, organized shelves, quality control tags. Clean, well-organized, professional storage facility. Industrial photography.",
        "description": "材料仓储"
    },
    {
        "filename": "assembly-area.jpg",
        "prompt": "Spacious industrial assembly area for large-scale boiler assembly with overhead cranes, professional assembly tools, and workers. Modern factory floor. Professional industrial photography.",
        "description": "装配区域"
    },
    {
        "filename": "quality-control.jpg",
        "prompt": "Quality control inspection area with multi-stage inspection points, testing equipment, and quality assurance professionals. Clean, professional, modern quality control facility. Corporate photography style.",
        "description": "质量控制"
    }
]


def generate_with_openai_dalle(prompt: str, api_key: str, size: str = "1024x1024") -> Optional[bytes]:
    """使用OpenAI DALL-E生成图片"""
    try:
        import openai
        client = openai.OpenAI(api_key=api_key)
        
        print(f"  正在使用 DALL-E 生成图片...")
        response = client.images.generate(
            model="dall-e-3",
            prompt=prompt,
            size=size,
            quality="standard",
            n=1,
        )
        
        image_url = response.data[0].url
        img_response = requests.get(image_url, timeout=30)
        img_response.raise_for_status()
        return img_response.content
        
    except ImportError:
        print("  ❌ 需要安装 openai 库: pip install openai")
        return None
    except Exception as e:
        print(f"  ❌ DALL-E 生成失败: {e}")
        return None


def generate_with_stability_ai(prompt: str, api_key: str) -> Optional[bytes]:
    """使用Stability AI生成图片"""
    try:
        url = "https://api.stability.ai/v2beta/stable-image/generate/core"
        headers = {
            "Authorization": f"Bearer {api_key}",
            "Accept": "image/*"
        }
        
        data = {
            "prompt": prompt,
            "output_format": "jpeg",
            "aspect_ratio": "16:9"
        }
        
        print(f"  正在使用 Stability AI 生成图片...")
        response = requests.post(url, headers=headers, data=data, timeout=60)
        response.raise_for_status()
        return response.content
        
    except Exception as e:
        print(f"  ❌ Stability AI 生成失败: {e}")
        return None


def download_from_pexels(keyword: str, filename: str) -> bool:
    """从Pexels下载相关图片（免费方案）"""
    try:
        # Pexels 免费图片API（无需API key，但需要设置User-Agent）
        search_url = f"https://www.pexels.com/search/{keyword.replace(',', '%20')}/"
        
        # 使用Pexels的API（需要API key）或者使用占位图片服务
        # 这里使用一个简单的占位图片服务作为备用
        print(f"  正在获取图片...")
        
        # 尝试使用 Picsum Photos (免费占位图片服务)
        import random
        image_id = random.randint(1, 1000)
        url = f"https://picsum.photos/1600/900?random={image_id}"
        
        response = requests.get(url, timeout=30, headers={
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
        })
        response.raise_for_status()
        
        filepath = FACILITIES_DIR / filename
        with open(filepath, "wb") as f:
            f.write(response.content)
        
        print(f"  ✅ 已下载占位图片: {filename}")
        print(f"  ⚠️  这是随机占位图片，建议后续替换为实际工厂照片")
        return True
        
    except Exception as e:
        print(f"  ❌ 下载失败: {e}")
        return False


def main():
    print("=" * 60)
    print("制造设施图片生成工具")
    print("=" * 60)
    print("\n请选择生成方式：")
    print("1. 使用 OpenAI DALL-E (需要API key)")
    print("2. 使用 Stability AI (需要API key)")
    print("3. 下载占位图片 (免费，临时使用)")
    print("4. 手动生成说明")
    
    choice = input("\n请输入选项 (1-4): ").strip()
    
    if choice == "1":
        api_key = os.getenv("OPENAI_API_KEY") or input("请输入 OpenAI API Key: ").strip()
        if not api_key:
            print("❌ 需要提供 OpenAI API Key")
            return
        
        for item in FACILITY_IMAGES:
            print(f"\n正在生成: {item['description']} ({item['filename']})...")
            image_data = generate_with_openai_dalle(item['prompt'], api_key, "1024x1024")
            
            if image_data:
                filepath = FACILITIES_DIR / item['filename']
                with open(filepath, "wb") as f:
                    f.write(image_data)
                print(f"  ✅ 已保存: {filepath}")
            else:
                print(f"  ❌ 生成失败")
    
    elif choice == "2":
        api_key = os.getenv("STABILITY_API_KEY") or input("请输入 Stability AI API Key: ").strip()
        if not api_key:
            print("❌ 需要提供 Stability AI API Key")
            return
        
        for item in FACILITY_IMAGES:
            print(f"\n正在生成: {item['description']} ({item['filename']})...")
            image_data = generate_with_stability_ai(item['prompt'], api_key)
            
            if image_data:
                filepath = FACILITIES_DIR / item['filename']
                with open(filepath, "wb") as f:
                    f.write(image_data)
                print(f"  ✅ 已保存: {filepath}")
            else:
                print(f"  ❌ 生成失败")
    
    elif choice == "3":
        for item in FACILITY_IMAGES:
            print(f"\n正在下载: {item['description']} ({item['filename']})...")
            download_from_pexels("industrial", item['filename'])
    
    elif choice == "4":
        print("\n" + "=" * 60)
        print("手动生成图片说明")
        print("=" * 60)
        print("\n推荐工具：")
        print("1. Midjourney (https://www.midjourney.com/)")
        print("2. DALL-E 3 (https://openai.com/dall-e-3)")
        print("3. Stable Diffusion (https://stablediffusionweb.com/)")
        print("4. Leonardo.ai (https://leonardo.ai/)")
        print("\n提示词（Prompt）：")
        for item in FACILITY_IMAGES:
            print(f"\n{item['description']} ({item['filename']}):")
            print(f"  {item['prompt']}")
        print("\n生成后，请将图片保存到:")
        print(f"  {FACILITIES_DIR}")
        print("\n图片要求：")
        print("  - 格式: JPG 或 PNG")
        print("  - 尺寸: 1600x900 (16:9 比例)")
        print("  - 文件大小: < 2MB")
    
    else:
        print("❌ 无效选项")
        return
    
    print("\n" + "=" * 60)
    print("完成！")
    print("=" * 60)
    print(f"\n图片已保存到: {FACILITIES_DIR}")
    print("\n下一步：")
    print("1. 检查生成的图片")
    print("2. 如果满意，图片会自动在网站上显示")
    print("3. 如果不满意，可以重新运行脚本生成")


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

