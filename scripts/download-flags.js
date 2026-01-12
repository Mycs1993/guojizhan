const fs = require('fs');
const path = require('path');
const https = require('https');

const FLAGS_DIR = path.join(__dirname, '..', 'public', 'images', 'flags');

if (!fs.existsSync(FLAGS_DIR)) {
    fs.mkdirSync(FLAGS_DIR, { recursive: true });
}

const countries = [
    "cn", "us", "ru", "de", "fr", "gb", "it", "es", "ca", "au",
    "jp", "kr", "in", "br", "mx", "za", "sa", "ae", "tr", "id",
    "th", "vn", "my", "pl", "nl", "se", "ch", "kz"
];

countries.forEach(code => {
    const url = `https://flagcdn.com/w80/${code}.png`;
    const filePath = path.join(FLAGS_DIR, `${code}.png`);

    const file = fs.createWriteStream(filePath);
    https.get(url, function (response) {
        response.pipe(file);
        file.on('finish', function () {
            file.close();
            console.log(`Downloaded ${code}.png`);
        });
    }).on('error', function (err) {
        fs.unlink(filePath);
        console.error(`Error downloading ${code}.png: ${err.message}`);
    });
});
