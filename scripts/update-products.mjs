/**
 * Bulk Product Update Script
 * 
 * Usage:
 * 1. Create a `updates.json` file in the same directory as this script (or provide path).
 * 2. `updates.json` should contain an array of objects. Each object MUST have an `id`.
 * 3. Any other fields in the update object will be deeply merged into the existing product.
 * 
 * Example updates.json:
 * [
 *   {
 *     "id": "wns-low-nox-hot-water",
 *     "description": { "zh": "新的中文描述..." }
 *   }
 * ]
 * 
 * Run: node scripts/update-products.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PRODUCTS_PATH = path.join(__dirname, '../src/data/products.json');
const UPDATES_PATH = path.join(__dirname, 'updates.json');

// Helper to deep merge objects
function isObject(item) {
    return (item && typeof item === 'object' && !Array.isArray(item));
}

function mergeDeep(target, source) {
    let output = Object.assign({}, target);
    if (isObject(target) && isObject(source)) {
        Object.keys(source).forEach(key => {
            if (isObject(source[key])) {
                if (!(key in target))
                    Object.assign(output, { [key]: source[key] });
                else
                    output[key] = mergeDeep(target[key], source[key]);
            } else {
                Object.assign(output, { [key]: source[key] });
            }
        });
    }
    return output;
}

async function main() {
    console.log("Looking for updates in:", UPDATES_PATH);

    if (!fs.existsSync(UPDATES_PATH)) {
        console.error("No updates.json found in scripts directory.");
        console.log("Please create scripts/updates.json with your changes.");
        process.exit(1);
    }

    const updates = JSON.parse(fs.readFileSync(UPDATES_PATH, 'utf-8'));
    const currentProducts = JSON.parse(fs.readFileSync(PRODUCTS_PATH, 'utf-8'));

    let updatedCount = 0;

    const newProducts = currentProducts.map(product => {
        const update = updates.find(u => u.id === product.id);
        if (update) {
            console.log(`Updating product: ${product.id}`);
            updatedCount++;
            return mergeDeep(product, update);
        }
        return product;
    });

    // Optional: Add new products if they don't exist?
    // For now, let's stick to updating existing ones to be safe, or append if truly new.
    updates.forEach(update => {
        const existing = currentProducts.find(p => p.id === update.id);
        if (!existing) {
            console.log(`Adding new product: ${update.id}`);
            newProducts.push(update);
            updatedCount++;
        }
    });

    fs.writeFileSync(PRODUCTS_PATH, JSON.stringify(newProducts, null, 2), 'utf-8');
    console.log(`Success! Updated/Added ${updatedCount} products.`);
    console.log(`Wrote to ${PRODUCTS_PATH}`);
}

main().catch(console.error);
