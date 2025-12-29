import { articleService } from '@/lib/articles';
import { getSession } from '@/lib/auth';
import { NextResponse } from 'next/server';

export async function GET() {
    const session = await getSession();
    if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const articles = await articleService.getAllArticles(true);
    return NextResponse.json(articles);
}

export async function POST(request: Request) {
    const session = await getSession();
    if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    try {
        const body = await request.json();
        const article = await articleService.saveArticle(body);
        return NextResponse.json(article);
    } catch (e) {
        return NextResponse.json({ error: 'Failed to save article' }, { status: 500 });
    }
}
