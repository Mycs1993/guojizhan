"""
产品参数爬虫
==============

用途：
    从单个产品详情页中，把「技术参数」表格自动提取出来，保存为 CSV 文件，
    方便你直接复制到 Excel 或者导入到新站里，而不用一个格子一个格子地手抄。

使用示例：
    python product_param_scraper.py "http://www.yudongguolu.com/?SortId=10&Type=page&Id=26"
    python product_param_scraper.py "http://www.yudongguolu.com/?SortId=10&Type=page&Id=26" wns-hot-water.csv

注意：
    - 目前脚本针对的是豫东老站的产品详情页结构（页面里有「技术参数>>」标题和一个参数表格）。
    - 如果后面有个别产品页面结构不一样，可以把 HTML 发给我，我们再微调选择器。
"""

import csv
import sys
from pathlib import Path

import requests
from bs4 import BeautifulSoup


def fetch_html(url: str) -> BeautifulSoup:
  """获取并解析网页 HTML。"""
  session = requests.Session()
  session.headers.update(
    {
      "User-Agent": (
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
        "AppleWebKit/537.36 (KHTML, like Gecko) "
        "Chrome/122.0 Safari/537.36"
      )
    }
  )

  print(f"正在请求：{url}")
  resp = session.get(url, timeout=15)
  resp.raise_for_status()
  resp.encoding = resp.apparent_encoding or "utf-8"
  return BeautifulSoup(resp.text, "html.parser")


def extract_param_table(soup: BeautifulSoup):
  """
  从页面中找到「技术参数」对应的表格，并解析为二维数组。

  返回：
      rows: List[List[str]]，每一行是一个单元格文本列表。
  """
  # 1. 先尝试通过标题“技术参数”定位
  header = None
  for h in soup.find_all(["h2", "h3", "h4"]):
    text = h.get_text(strip=True)
    if "技术参数" in text:
      header = h
      break

  table = None

  if header:
    # 标题下面最近的一个 table
    table = header.find_next("table")

  # 2. 兜底：直接找页面中第一个比较大的参数表
  if table is None:
    table = soup.find("table")

  if table is None:
    raise RuntimeError("页面中没有找到参数表格（<table>）")

  rows = []
  for tr in table.find_all("tr"):
    cells = [td.get_text(strip=True).replace("\xa0", " ") for td in tr.find_all(["td", "th"])]
    if any(cells):
      rows.append(cells)

  if not rows:
    raise RuntimeError("参数表存在，但没有有效内容，请检查页面结构。")

  return rows


def save_as_csv(rows, output_path: Path):
  """把二维数组保存为 CSV。"""
  output_path.parent.mkdir(parents=True, exist_ok=True)
  with output_path.open("w", encoding="utf-8-sig", newline="") as f:
    writer = csv.writer(f)
    for row in rows:
      writer.writerow(row)


def main():
  if len(sys.argv) < 2:
    print("用法：python product_param_scraper.py <产品详情页URL> [输出文件名]")
    print("示例：python product_param_scraper.py "
          "\"http://www.yudongguolu.com/?SortId=10&Type=page&Id=26\" wns-hot-water.csv")
    sys.exit(1)

  url = sys.argv[1]
  if len(sys.argv) >= 3:
    output_name = sys.argv[2]
  else:
    # 根据 Id 简单生成一个文件名
    # 例如：...?Id=26 -> product_26.csv
    output_name = "product_params.csv"

  try:
    soup = fetch_html(url)
    rows = extract_param_table(soup)

    out_path = Path(output_name)
    save_as_csv(rows, out_path)

    print(f"✅ 已提取 {len(rows)} 行参数，保存到：{out_path.resolve()}")
    print("你可以用 Excel 打开这个 CSV 文件，或者复制到新网站的参数表里。")
  except Exception as e:
    print(f"❌ 提取失败：{e}")
    sys.exit(1)


if __name__ == "__main__":
  main()


