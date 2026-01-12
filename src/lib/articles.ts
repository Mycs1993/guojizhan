import { Article, ArticleSummary } from '@/types/article';
import { getStorage } from './storage';
import { v4 as uuidv4 } from 'uuid';

const INDEX_FILE = 'articles.json';

export class ArticleService {
    private storage = getStorage();

    async getAllArticles(includeDrafts = false): Promise<ArticleSummary[]> {
        const index = await this.storage.get<ArticleSummary[]>(INDEX_FILE);
        if (!index) return [];

        if (includeDrafts) return index;
        return index.filter(a => a.status === 'published');
    }

    async getArticleById(id: string): Promise<Article | null> {
        return this.storage.get<Article>(`details/${id}.json`);
    }

    async getArticleBySlug(slug: string): Promise<Article | null> {
        const articles = await this.getAllArticles(true);
        const summary = articles.find(a => a.slug === slug);
        if (!summary) return null;
        return this.getArticleById(summary.id);
    }

    async getArticlesByTag(tag: string): Promise<ArticleSummary[]> {
        const articles = await this.getAllArticles(false); // Only published
        const normalizedTag = tag.toLowerCase().trim();

        return articles.filter(a => {
            if (!a.tags || a.tags.length === 0) return false;
            return a.tags.some(t => t.toLowerCase() === normalizedTag);
        });
    }

    async getAllTags(): Promise<Array<{ name: string; count: number }>> {
        const articles = await this.getAllArticles(false);
        const tagMap = new Map<string, number>();

        articles.forEach(a => {
            if (a.tags) {
                a.tags.forEach(t => {
                    // Use lowercase for counting but keep original case?
                    // Let's normalize to Capital Case for display if we can, 
                    // or just use the first occurrence's casing.
                    const key = t.trim();
                    if (!key) return;
                    tagMap.set(key, (tagMap.get(key) || 0) + 1);
                });
            }
        });

        // Convert to array and sort by count desc
        return Array.from(tagMap.entries())
            .map(([name, count]) => ({ name, count }))
            .sort((a, b) => b.count - a.count);
    }

    async saveArticle(article: Partial<Article>): Promise<Article> {
        const articles = await this.getAllArticles(true);

        const id = article.id || uuidv4();
        const now = new Date().toISOString();

        const existingIndex = articles.findIndex(a => a.id === id);

        const fullArticle: Article = {
            id,
            slug: article.slug || this.generateSlug(article.title || 'untitled'),
            title: article.title || 'Untitled',
            summary: article.summary || '',
            content: article.content || '',
            coverImage: article.coverImage,
            author: article.author || 'Admin',
            status: article.status || 'draft',
            publishedAt: article.publishedAt || now,
            updatedAt: now,
            tags: article.tags || [],
        };

        // Save full article
        await this.storage.put(`details/${id}.json`, JSON.stringify(fullArticle, null, 2));

        // Update index
        const summary: ArticleSummary = {
            id: fullArticle.id,
            slug: fullArticle.slug,
            title: fullArticle.title,
            summary: fullArticle.summary,
            coverImage: fullArticle.coverImage,
            publishedAt: fullArticle.publishedAt,
            status: fullArticle.status,
            tags: fullArticle.tags, // Optimize: Include tags in index for fast filtering
        };

        if (existingIndex >= 0) {
            articles[existingIndex] = summary;
        } else {
            articles.unshift(summary);
        }

        await this.storage.put(INDEX_FILE, JSON.stringify(articles, null, 2));

        return fullArticle;
    }

    async deleteArticle(id: string): Promise<void> {
        const articles = await this.getAllArticles(true);
        const filtered = articles.filter(a => a.id !== id);

        await this.storage.del(`details/${id}.json`);
        await this.storage.put(INDEX_FILE, JSON.stringify(filtered, null, 2));
    }

    private generateSlug(title: string): string {
        return title
            .toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, '')
            .replace(/[\s_-]+/g, '-')
            .replace(/^-+|-+$/g, '');
    }
    async uploadImage(file: File): Promise<string> {
        const ext = file.name.split('.').pop() || 'jpg';
        const filename = `${Date.now()}-${uuidv4().substring(0, 8)}.${ext}`;
        return this.storage.upload(filename, file);
    }
}

export const articleService = new ArticleService();
