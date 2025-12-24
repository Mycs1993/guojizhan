import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin

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
        print(f"Error: {e}")
        return []

base_url = "http://www.yudongguolu.com/"
images = find_images(base_url)

# Also try the "Honor" page if it exists
honor_url = "http://www.yudongguolu.com/about/ryzz.html" # Guessing
honor_images = find_images(honor_url)

all_images = list(set(images + honor_images))
print(f"Found {len(all_images)} images.")
for img in all_images:
    if 'honor' in img.lower() or 'zizhi' in img.lower() or 'cert' in img.lower() or '1.' in img.lower(): # simple keywords
        print(img)

