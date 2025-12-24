import https from "https";
import http from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 需要下载的图片映射：产品ID -> 图片URL
const imageMap = {
  "commercial-low-nox-mold-temp": "http://www.yudongguolu.com/upfiles/didan/1.jpg",
  "cwdr-electric-hot-water": "http://www.yudongguolu.com/upfiles/dianjiare/3.jpg",
  "wdr-electric-steam": "http://www.yudongguolu.com/upfiles/dianjiare/1.jpg",
  "commercial-low-nox-condensing-hot-water": "http://www.yudongguolu.com/upfiles/didan/2.jpg",
  "dzh-biomass-chain-grate": "http://www.yudongguolu.com/upfiles/shengwuzhi/2.jpg",
  "yglw-organic-heat-carrier": "http://www.yudongguolu.com/upfiles/shengwuzhi/1.jpg",
};

const productsDir = path.join(__dirname, "../public/images/products");

// 确保目录存在
if (!fs.existsSync(productsDir)) {
  fs.mkdirSync(productsDir, { recursive: true });
}

function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith("https") ? https : http;
    
    protocol
      .get(url, (response) => {
        // 处理重定向
        if (response.statusCode === 301 || response.statusCode === 302) {
          return downloadImage(response.headers.location, filepath)
            .then(resolve)
            .catch(reject);
        }

        if (response.statusCode !== 200) {
          reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
          return;
        }

        const fileStream = fs.createWriteStream(filepath);
        response.pipe(fileStream);

        fileStream.on("finish", () => {
          fileStream.close();
          console.log(`✅ Downloaded: ${path.basename(filepath)}`);
          resolve();
        });

        fileStream.on("error", (err) => {
          fs.unlink(filepath, () => {}); // 删除不完整的文件
          reject(err);
        });
      })
      .on("error", (err) => {
        reject(err);
      });
  });
}

async function main() {
  console.log("开始下载产品图片...\n");

  const results = [];

  for (const [productId, url] of Object.entries(imageMap)) {
    try {
      // 从URL获取文件扩展名
      const urlPath = new URL(url).pathname;
      const ext = path.extname(urlPath) || ".jpg";
      
      // 生成文件名：产品ID + 扩展名
      const filename = `${productId}${ext}`;
      const filepath = path.join(productsDir, filename);

      console.log(`正在下载: ${productId}...`);
      await downloadImage(url, filepath);
      
      results.push({
        productId,
        oldUrl: url,
        newPath: `/images/products/${filename}`,
      });
    } catch (error) {
      console.error(`❌ 下载失败 ${productId}:`, error.message);
      results.push({
        productId,
        oldUrl: url,
        error: error.message,
      });
    }
  }

  console.log("\n下载完成！");
  console.log("\n需要更新的路径映射：");
  results.forEach((r) => {
    if (r.error) {
      console.log(`  ${r.productId}: ❌ ${r.error}`);
    } else {
      console.log(`  ${r.productId}: ${r.oldUrl} -> ${r.newPath}`);
    }
  });

  // 更新 products.ts 文件
  const productsTsPath = path.join(__dirname, "../src/data/products.ts");
  let content = fs.readFileSync(productsTsPath, "utf-8");

  results.forEach((r) => {
    if (!r.error && r.newPath) {
      // 替换对应的图片路径
      const regex = new RegExp(
        `(id: "${r.productId}"[\\s\\S]*?image: ")[^"]+(")`,
        "g"
      );
      content = content.replace(regex, `$1${r.newPath}$2`);
    }
  });

  fs.writeFileSync(productsTsPath, content, "utf-8");
  console.log("\n✅ 已更新 products.ts 文件中的图片路径！");
}

main().catch(console.error);

