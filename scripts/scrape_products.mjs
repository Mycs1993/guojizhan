import fs from 'fs';
import path from 'path';

const urls = [
    "http://www.yudongguolu.com/?SortId=13&Type=page&Id=45",
    "http://www.yudongguolu.com/?SortId=13&Type=page&Id=44",
    "http://www.yudongguolu.com/?SortId=13&Type=page&Id=43",
    "http://www.yudongguolu.com/?SortId=13&Type=page&Id=42",
    "http://www.yudongguolu.com/?SortId=13&Type=page&Id=41",
    "http://www.yudongguolu.com/?SortId=13&Type=page&Id=40",
    "http://www.yudongguolu.com/?SortId=13&Type=page&Id=39",
    "http://www.yudongguolu.com/?SortId=13&Type=page&Id=38",
    "http://www.yudongguolu.com/?SortId=13&Type=page&Id=37",
    "http://www.yudongguolu.com/?SortId=13&Type=page&Id=36"
];

async function scrapeUrl(url) {
    try {
        const res = await fetch(url);
        const html = await res.text();

        // Extract Title
        const titleMatch = html.match(/<h1>(.*?)<\/h1>/) || html.match(/<title>(.*?)<\/title>/);
        const title = titleMatch ? titleMatch[1].replace(/-太康县豫东锅炉有限公司/, '').trim() : "Unknown Title";

        // Extract Main Image
        // Look for product image, often in a specific div or by class
        // Simple heuristic: look for jpg/png inside a likely container or the first large image
        // This site seems to use relative paths for images like /upload/image/etc.
        const imgMatch = html.match(/<img[^>]+src="([^"]+)"[^>]*>/g);
        let mainImage = "";
        if (imgMatch) {
            for (const imgTag of imgMatch) {
                if (imgTag.includes("upload") && !imgTag.includes("logo")) {
                    const src = imgTag.match(/src="([^"]+)"/)[1];
                    mainImage = src.startsWith("http") ? src : `http://www.yudongguolu.com${src}`;
                    break;
                }
            }
        }

        // Extract Description (Simple text extraction)
        // We'll capture a chunk of text. This is rough but fast.
        const descMatch = html.match(/<div class="pro_des">([\s\S]*?)<\/div>/) || html.match(/<div class="content">([\s\S]*?)<\/div>/);
        let description = "";
        if (descMatch) {
            description = descMatch[1].replace(/<[^>]+>/g, '').trim().substring(0, 300); // First 300 chars
        }

        // Extract Specs (Table)
        // We will just capture the raw HTML of the table for now, or processed simple text
        const tableMatch = html.match(/<table[\s\S]*?<\/table>/);
        const specsRaw = tableMatch ? tableMatch[0] : "";

        // Very basic table parsing to array
        const specs = [];
        if (specsRaw) {
            const rows = specsRaw.match(/<tr[\s\S]*?<\/tr>/g);
            if (rows) {
                rows.forEach(row => {
                    const cols = row.match(/<td[\s\S]*?<\/td>/g);
                    if (cols && cols.length >= 2) {
                        const key = cols[0].replace(/<[^>]+>/g, '').trim();
                        const val = cols[1].replace(/<[^>]+>/g, '').trim();
                        if (key && val) specs.push({ key, val });
                    }
                });
            }
        }

        return {
            url,
            id: url.match(/Id=(\d+)/)[1],
            title,
            mainImage,
            description,
            specs
        };

    } catch (error) {
        console.error(`Error scraping ${url}:`, error);
        return { url, error: error.message };
    }
}

async function main() {
    console.log("Starting scrape...");
    const results = [];
    for (const url of urls) {
        console.log(`Scraping ${url}...`);
        const data = await scrapeUrl(url);
        results.push(data);
    }

    fs.writeFileSync('scraped_products.json', JSON.stringify(results, null, 2));
    console.log("Done. Saved to scraped_products.json");
}

main();
