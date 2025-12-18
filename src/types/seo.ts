// SEO 管理后台类型定义

export interface Keyword {
  id: string;
  keyword: string;
  category: string;
  status: "active" | "inactive";
  searchVolume?: number;
  difficulty?: number;
  createdAt: string;
  updatedAt: string;
}

export interface PageSEO {
  slug: string;
  title: string;
  description: string;
  keywords: string[];
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  lastModified: string;
}

export interface KeywordSuggestion {
  id: string;
  keyword: string;
  reason: string;
  estimatedVolume: string;
  difficulty: string;
  status: "pending" | "accepted" | "dismissed";
  createdAt: string;
}

export interface SEOConfig {
  global: {
    siteName: string;
    defaultTitle: string;
    defaultDescription: string;
    defaultKeywords: string[];
    baseUrl: string;
  };
  pages: Record<string, PageSEO>;
  keywords: Keyword[];
  aiSuggestions: KeywordSuggestion[];
}

// API 请求/响应类型
export interface CreateKeywordRequest {
  keyword: string;
  category?: string;
}

export interface UpdateKeywordRequest {
  keyword?: string;
  category?: string;
  status?: "active" | "inactive";
}

export interface UpdatePageSEORequest {
  title: string;
  description: string;
  keywords: string[];
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
}

export interface AISuggestRequest {
  context: string;
  currentKeywords: string[];
}

export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  success: boolean;
  token?: string;
  error?: string;
}
