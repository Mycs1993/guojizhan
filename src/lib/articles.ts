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
}

export const articleService = new ArticleService();
