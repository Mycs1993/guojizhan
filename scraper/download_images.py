import requests
import os
from urllib.parse import urlparse

def download_file(url, folder):
    if not os.path.exists(folder):
        os.makedirs(folder)
    
    parsed = urlparse(url)
    filename = os.path.basename(parsed.path)
    if not filename:
        filename = "image.jpg"
    
    filepath = os.path.join(folder, filename)
    
    try:
        response = requests.get(url, timeout=10)
        if response.status_code == 200:
            with open(filepath, 'wb') as f:
                f.write(response.content)
            print(f"Downloaded {filename}")
            return filepath
        else:
            print(f"Failed to download {url}: {response.status_code}")
    except Exception as e:
        print(f"Error downloading {url}: {e}")
    return None

urls = [
    # Certificates
    "http://www.yudongguolu.com/UpFiles/zs/1.jpg",
    "http://www.yudongguolu.com/UpFiles/zs/13.jpg",
    "http://www.yudongguolu.com/UpFiles/zs/11.jpg",
    "http://www.yudongguolu.com/UpFiles/zs/4.jpg",
    "http://www.yudongguolu.com/UpFiles/zs/7.jpg",
    "http://www.yudongguolu.com/UpFiles/zs/8.jpg",
    "http://www.yudongguolu.com/UpFiles/zs/3.jpg",
    "http://www.yudongguolu.com/UpFiles/zs/2.jpg",
    "http://www.yudongguolu.com/UpFiles/zs/5.jpg",
    "http://www.yudongguolu.com/UpFiles/zs/6.jpg",
    "http://www.yudongguolu.com/UpFiles/zs/12.jpg",
    "http://www.yudongguolu.com/UpFiles/zs/10.jpg",
    # Potential About/Factory images
    "http://www.yudongguolu.com/images/20180720103203605.jpg",
    "http://www.yudongguolu.com/images/20181031102446452.jpg",
    "http://www.yudongguolu.com/images/02.jpg",
    "http://www.yudongguolu.com/images/11.jpg",
    "http://www.yudongguolu.com/images/banner.jpg"
]

for url in urls:
    download_file(url, "web/public/images/downloaded")

