"""
网站图片爬虫工具
用于从指定网页爬取所有图片并下载到本地

使用方法:
    python image_scraper.py <网页URL>
    
示例:
    python image_scraper.py http://www.yudongguolu.com/?SortId=8&Type=list
"""

import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse
import os
import sys
from pathlib import Path
import time

class ImageScraper:
    def __init__(self, output_dir="downloaded_images"):
        """
        初始化图片爬虫
        
        Args:
            output_dir: 图片保存目录
        """
        self.output_dir = output_dir
        self.session = requests.Session()
        self.session.headers.update({
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        })
        
        # 创建输出目录
        Path(self.output_dir).mkdir(parents=True, exist_ok=True)
        
    def get_page_content(self, url):
        """
        获取网页内容
        
        Args:
            url: 网页URL
            
        Returns:
            BeautifulSoup对象
        """
        try:
            print(f"正在访问: {url}")
            response = self.session.get(url, timeout=10)
            response.raise_for_status()
            response.encoding = response.apparent_encoding
            return BeautifulSoup(response.text, 'html.parser')
        except Exception as e:
            print(f"❌ 访问网页失败: {e}")
            return None
    
    def extract_image_urls(self, soup, base_url):
        """
        从网页中提取所有图片URL
        
        Args:
            soup: BeautifulSoup对象
            base_url: 基础URL,用于拼接相对路径
            
        Returns:
            图片URL列表
        """
        image_urls = []
        
        # 查找所有img标签
        for img in soup.find_all('img'):
            img_url = img.get('src') or img.get('data-src') or img.get('data-original')
            if img_url:
                # 转换为绝对URL
                full_url = urljoin(base_url, img_url)
                image_urls.append(full_url)
        
        # 去重
        image_urls = list(set(image_urls))
        print(f"✅ 找到 {len(image_urls)} 张图片")
        return image_urls
    
    def download_image(self, url, filename):
        """
        下载单张图片
        
        Args:
            url: 图片URL
            filename: 保存的文件名
            
        Returns:
            是否下载成功
        """
        try:
            response = self.session.get(url, timeout=10, stream=True)
            response.raise_for_status()
            
            filepath = os.path.join(self.output_dir, filename)
            
            with open(filepath, 'wb') as f:
                for chunk in response.iter_content(chunk_size=8192):
                    f.write(chunk)
            
            file_size = os.path.getsize(filepath) / 1024  # KB
            print(f"  ✅ 下载成功: {filename} ({file_size:.1f} KB)")
            return True
            
        except Exception as e:
            print(f"  ❌ 下载失败: {filename} - {e}")
            return False
    
    def get_filename_from_url(self, url, index):
        """
        从URL生成文件名
        
        Args:
            url: 图片URL
            index: 图片索引
            
        Returns:
            文件名
        """
        # 尝试从URL获取文件名
        parsed = urlparse(url)
        path = parsed.path
        
        if path:
            filename = os.path.basename(path)
            # 如果文件名有效且有扩展名
            if filename and '.' in filename:
                return filename
        
        # 否则使用索引和默认扩展名
        ext = '.jpg'  # 默认扩展名
        if '.png' in url.lower():
            ext = '.png'
        elif '.gif' in url.lower():
            ext = '.gif'
        elif '.webp' in url.lower():
            ext = '.webp'
            
        return f"image_{index:03d}{ext}"
    
    def scrape(self, url):
        """
        爬取指定网页的所有图片
        
        Args:
            url: 网页URL
        """
        print("=" * 60)
        print("🚀 开始爬取图片...")
        print("=" * 60)
        
        # 获取网页内容
        soup = self.get_page_content(url)
        if not soup:
            return
        
        # 提取图片URL
        image_urls = self.extract_image_urls(soup, url)
        
        if not image_urls:
            print("⚠️  未找到任何图片")
            return
        
        # 下载图片
        print(f"\n📥 开始下载图片到: {self.output_dir}")
        print("-" * 60)
        
        success_count = 0
        for i, img_url in enumerate(image_urls, 1):
            filename = self.get_filename_from_url(img_url, i)
            print(f"[{i}/{len(image_urls)}] {img_url}")
            
            if self.download_image(img_url, filename):
                success_count += 1
            
            # 避免请求过快
            time.sleep(0.5)
        
        print("-" * 60)
        print(f"✨ 完成! 成功下载 {success_count}/{len(image_urls)} 张图片")
        print(f"📁 保存位置: {os.path.abspath(self.output_dir)}")
        print("=" * 60)


def main():
    """主函数"""
    if len(sys.argv) < 2:
        print("使用方法: python image_scraper.py <网页URL>")
        print("示例: python image_scraper.py http://www.yudongguolu.com/?SortId=8&Type=list")
        sys.exit(1)
    
    url = sys.argv[1]
    
    # 可选: 自定义输出目录
    output_dir = sys.argv[2] if len(sys.argv) > 2 else "downloaded_images"
    
    # 创建爬虫并执行
    scraper = ImageScraper(output_dir=output_dir)
    scraper.scrape(url)


if __name__ == "__main__":
    main()
