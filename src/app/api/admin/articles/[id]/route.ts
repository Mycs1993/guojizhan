import { articleService } from '@/lib/articles';
import { getSession } from '@/lib/auth';
import { NextResponse } from 'next/server';

export async function DELETE(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const session = await getSession();
    if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const { id } = await params;
    await articleService.deleteArticle(id);
    return NextResponse.json({ success: true });
}

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const session = await getSession();
    if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const { id } = await params;
    const article = await articleService.getArticleById(id);
    if (!article) return NextResponse.json({ error: 'Not found' }, { status: 404 });
    return NextResponse.json(article);
}
