export const PRODUCT_LINKS: Record<string, string> = {
    // English Keywords
    'WNS': '/products/wns-oil-gas-steam-boiler',
    'SZS': '/products/szs-gas-steam-boiler',
    'DZL': '/products/dzl-biomass-boiler',
    'SZL': '/products/szl-chain-grate-boiler',
    'LSS': '/products/lss-vertical-steam-boiler',
    'Biomass': '/products/dzl-biomass-boiler',
    'Thermal Oil': '/products/yglw-organic-heat-carrier',
    'Hot Water': '/products/cwns-atmospheric-hot-water-boiler',
    'Electric Boiler': '/products/wdr-horizontal-electric-steam-boiler',
    'Steam Generator': '/products/gas-steam-generator',
    'Oil Boiler': '/products/wns-oil-gas-steam-boiler',
    'Gas Boiler': '/products/wns-oil-gas-steam-boiler',

    // Chinese Keywords
    'WNS系列': '/products/wns-oil-gas-steam-boiler',
    'SZS系列': '/products/szs-gas-steam-boiler',
    '生物质': '/products/dzl-biomass-boiler',
    '导热油': '/products/yglw-organic-heat-carrier',
    '热水锅炉': '/products/cwns-atmospheric-hot-water-boiler',
    '电锅炉': '/products/wdr-horizontal-electric-steam-boiler',
    '蒸汽发生器': '/products/gas-steam-generator',
    '燃油锅炉': '/products/wns-oil-gas-steam-boiler',
    '燃气锅炉': '/products/wns-oil-gas-steam-boiler',
    '链条炉排': '/products/szl-chain-grate-boiler',
    '立式锅炉': '/products/lss-vertical-steam-boiler'
};

// Helper to escape regex special characters
function escapeRegExp(string: string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

export function enhanceContentWithLinks(content: string, locale: string = 'en', dynamicTags: string[] = []): string {
    if (!content) return content;

    let enhanced = content;

    // 1. Merge static product links with dynamic tags
    // Dynamic tags map to /topic/[tag]
    const allLinks: Record<string, string> = { ...PRODUCT_LINKS };

    dynamicTags.forEach(tag => {
        // Tag "Gas Boiler" -> key "Gas Boiler", value "/topic/gas-boiler"
        // Avoid overwriting manual product links if same name exists? 
        // Let's prioritize PRODUCT_LINKS (specific products) over general Topic tags.
        if (!allLinks[tag]) {
            allLinks[tag] = `/topic/${tag}`;
        }
    });

    // 2. Iterate keys. 
    // Optimization: potentially sort keys by length desc to match longer phrases first?
    const sortedKeys = Object.keys(allLinks).sort((a, b) => b.length - a.length);

    sortedKeys.forEach(keyword => {
        // Regex to match keyword:
        // 1. Not inside an existing link
        // 2. Case insensitive

        // Match whole words for English
        const isEnglishKey = /^[a-zA-Z0-9\s-]+$/.test(keyword);
        const escapedKeyword = escapeRegExp(keyword);
        const pattern = isEnglishKey ? `\\b${escapedKeyword}\\b` : escapedKeyword;

        const regex = new RegExp(`(${pattern})`, 'gi');

        // Check if allow linking
        const targetUrl = allLinks[keyword];

        // Simple heuristic to prevent duplicate linking:
        // Check if the URL is already present in the Markdown link format for this keyword
        // e.g. [Keyword](/targetUrl)
        if (!enhanced.includes(`](${targetUrl})`)) {
            let replacedCount = 0;
            enhanced = enhanced.replace(regex, (match, p1, offset, string) => {
                // Limit to 1 replacement per keyword to avoid span
                if (replacedCount > 0) return match;

                // Check context (inside link?)
                const before = string.substring(0, offset);
                const after = string.substring(offset + match.length);

                if (before.lastIndexOf('[') > before.lastIndexOf(']')) return match;
                if (after.indexOf(']') < after.indexOf('[') && after.indexOf(']') > -1) return match; // Inside []

                replacedCount++;
                return `[${match}](${targetUrl})`;
            });
        }
    });

    return enhanced;
}
