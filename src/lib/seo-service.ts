import { promises as fs } from "fs";
import path from "path";
import type {
  SEOConfig,
  Keyword,
  PageSEO,
  KeywordSuggestion,
  CreateKeywordRequest,
  UpdateKeywordRequest,
  UpdatePageSEORequest,
} from "@/types/seo";

const CONFIG_PATH = path.join(process.cwd(), "src/data/seo-config.json");
const BACKUP_DIR = path.join(process.cwd(), "src/data/backups");

// 榛樿閰嶇疆锛堝綋鏂囦欢涓嶅瓨鍦ㄦ椂浣跨敤锛?
const DEFAULT_CONFIG: SEOConfig = {
  global: {
    siteName: "Yudong Boiler",
    defaultTitle: "Professional Boiler Manufacturer",
    defaultDescription: "Leading industrial boiler manufacturer in China.",
    defaultKeywords: ["industrial boiler", "steam boiler"],
    baseUrl: "https://gljyw.top",
  },
  pages: {},
  keywords: [],
  aiSuggestions: [],
};

// 璇诲彇閰嶇疆
export async function getSEOConfig(): Promise<SEOConfig> {
  try {
    const data = await fs.readFile(CONFIG_PATH, "utf-8");
    return JSON.parse(data) as SEOConfig;
  } catch {
    console.warn("SEO config not found, using defaults");
    return DEFAULT_CONFIG;
  }
}

// 淇濆瓨閰嶇疆锛堝甫澶囦唤锛?
export async function saveSEOConfig(config: SEOConfig): Promise<void> {
  // 鍒涘缓澶囦唤
  await createBackup();
  // 淇濆瓨鏂伴厤缃?
  await fs.writeFile(CONFIG_PATH, JSON.stringify(config, null, 2), "utf-8");
}

// 鍒涘缓澶囦唤
async function createBackup(): Promise<void> {
  try {
    await fs.mkdir(BACKUP_DIR, { recursive: true });
    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
    const backupPath = path.join(BACKUP_DIR, `seo-config-${timestamp}.json`);
    const currentData = await fs.readFile(CONFIG_PATH, "utf-8");
    await fs.writeFile(backupPath, currentData, "utf-8");
    // 鍙繚鐣欐渶杩?10 涓浠?
    await cleanOldBackups();
  } catch {
    // 澶囦唤澶辫触涓嶅奖鍝嶄富娴佺▼
  }
}

async function cleanOldBackups(): Promise<void> {
  const files = await fs.readdir(BACKUP_DIR);
  const backups = files.filter((f) => f.startsWith("seo-config-")).sort().reverse();
  for (const file of backups.slice(10)) {
    await fs.unlink(path.join(BACKUP_DIR, file));
  }
}

// ============ 鍏抽敭璇嶆搷浣?============

export async function getKeywords(): Promise<Keyword[]> {
  const config = await getSEOConfig();
  return config.keywords;
}

export async function addKeyword(data: CreateKeywordRequest): Promise<Keyword> {
  const config = await getSEOConfig();
  const newKeyword: Keyword = {
    id: `kw-${Date.now()}`,
    keyword: data.keyword,
    category: data.category || "general",
    status: "active",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  config.keywords.push(newKeyword);
  await saveSEOConfig(config);
  return newKeyword;
}

export async function updateKeyword(id: string, data: UpdateKeywordRequest): Promise<Keyword | null> {
  const config = await getSEOConfig();
  const index = config.keywords.findIndex((k) => k.id === id);
  if (index === -1) return null;
  
  config.keywords[index] = {
    ...config.keywords[index],
    ...data,
    updatedAt: new Date().toISOString(),
  };
  await saveSEOConfig(config);
  return config.keywords[index];
}

export async function deleteKeyword(id: string): Promise<boolean> {
  const config = await getSEOConfig();
  const index = config.keywords.findIndex((k) => k.id === id);
  if (index === -1) return false;
  
  config.keywords.splice(index, 1);
  await saveSEOConfig(config);
  return true;
}

// ============ 椤甸潰 SEO 鎿嶄綔 ============

export async function getPageSEO(slug: string): Promise<PageSEO | null> {
  const config = await getSEOConfig();
  return config.pages[slug] || null;
}

export async function getAllPages(): Promise<PageSEO[]> {
  const config = await getSEOConfig();
  return Object.values(config.pages);
}

export async function updatePageSEO(slug: string, data: UpdatePageSEORequest): Promise<PageSEO> {
  const config = await getSEOConfig();
  config.pages[slug] = {
    slug,
    ...data,
    lastModified: new Date().toISOString(),
  };
  await saveSEOConfig(config);
  return config.pages[slug];
}

// ============ AI 寤鸿鎿嶄綔 ============

export async function getAISuggestions(): Promise<KeywordSuggestion[]> {
  const config = await getSEOConfig();
  return config.aiSuggestions.filter((s) => s.status === "pending");
}

export async function addAISuggestions(suggestions: Omit<KeywordSuggestion, "id" | "status" | "createdAt">[]): Promise<void> {
  const config = await getSEOConfig();
  const newSuggestions = suggestions.map((s) => ({
    ...s,
    id: `sug-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    status: "pending" as const,
    createdAt: new Date().toISOString(),
  }));
  config.aiSuggestions.push(...newSuggestions);
  await saveSEOConfig(config);
}

export async function acceptSuggestion(id: string): Promise<boolean> {
  const config = await getSEOConfig();
  const suggestion = config.aiSuggestions.find((s) => s.id === id);
  if (!suggestion) return false;
  
  suggestion.status = "accepted";
  // 娣诲姞鍒板叧閿瘝鍒楄〃
  config.keywords.push({
    id: `kw-${Date.now()}`,
    keyword: suggestion.keyword,
    category: "ai-suggested",
    status: "active",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });
  await saveSEOConfig(config);
  return true;
}

export async function dismissSuggestion(id: string): Promise<boolean> {
  const config = await getSEOConfig();
  const suggestion = config.aiSuggestions.find((s) => s.id === id);
  if (!suggestion) return false;
  
  suggestion.status = "dismissed";
  await saveSEOConfig(config);
  return true;
}

