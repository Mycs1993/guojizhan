import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin

def get_links(url):
    try:
        response = requests.get(url, timeout=10)
        response.encoding = 'utf-8' # or 'gb2312'
        soup = BeautifulSoup(response.text, 'html.parser')
        links = []
        for a in soup.find_all('a'):
            href = a.get('href')
            if href:
                full_url = urljoin(url, href)
                links.append((a.text.strip(), full_url))
        return links
    except Exception as e:
        print(f"Error fetching {url}: {e}")
        return []

def find_images(url):
    try:
        response = requests.get(url, timeout=10)
        response.encoding = 'utf-8' # or 'gb2312'
        soup = BeautifulSoup(response.text, 'html.parser')
        images = []
        for img in soup.find_all('img'):
            src = img.get('src')
            if src:
                full_url = urljoin(url, src)
                images.append(full_url)
        return images
    except Exception as e:
        print(f"Error fetching images from {url}: {e}")
        return []

base_url = "http://www.yudongguolu.com/"
links = get_links(base_url)

target_pages = []
for text, link in links:
    if "荣誉" in text or "资质" in text or "关于" in text:
        print(f"Found relevant page: {text} -> {link}")
        target_pages.append(link)

# Remove duplicates
target_pages = list(set(target_pages))

for page in target_pages:
    print(f"Scanning {page}...")
    imgs = find_images(page)
    for img in imgs:
        print(f"  Image: {img}")

