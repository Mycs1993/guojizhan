const fs = require('fs');
const path = require('path');

const filePath = path.join(process.cwd(), 'src', 'data', 'products.ts');
const content = fs.readFileSync(filePath, 'utf8');

// Identifier for Product 19 (the first one to delete)
const markerStr = 'id: "low-nitrogen-gas-steam-generator"';
const markerIdx = content.indexOf(markerStr);

if (markerIdx !== -1) {
    // Search backwards for the object start '{'
    let objStart = content.lastIndexOf('{', markerIdx);

    // Search backwards from objStart for the preceding comma ','
    // There might be comments or whitespace in between
    let splitPoint = -1;
    for (let i = objStart - 1; i >= 0; i--) {
        if (content[i] === ',') {
            splitPoint = i;
            break;
        }
        // Stop if we hit a closing brace '}', meaning we went too far back into the previous object
        if (content[i] === '}') {
            // This shouldn't happen if syntax is correct and there is a comma
            break;
        }
    }

    if (splitPoint !== -1) {
        // Keep everything up to the split point (excluding the comma)
        const newContent = content.substring(0, splitPoint) + "\n];\n";
        fs.writeFileSync(filePath, newContent, 'utf8');
        console.log("Successfully truncated file before Product 19.");
    } else {
        console.error("Could not find the split point (comma) before Product 19.");
    }
} else {
    console.error("Could not find Product 19 ID marker.");
}
