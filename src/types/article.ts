export interface Article {
    id: string;
    slug: string;
    title: string;
    summary: string;
    content: string; // Markdown
    coverImage?: string;
    author: string;
    publishedAt: string; // ISO string
    updatedAt: string; // ISO string
    status: 'draft' | 'published';
    tags: string[];
}

export interface ArticleSummary {
    id: string;
    slug: string;
    title: string;
    summary: string;
    coverImage?: string;
    publishedAt: string;
    status: 'draft' | 'published';
}
