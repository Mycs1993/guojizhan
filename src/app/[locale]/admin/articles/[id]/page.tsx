import ArticleEditor from '@/components/admin/ArticleEditor';
import { articleService } from '@/lib/articles';
import { notFound } from 'next/navigation';

export default async function EditArticlePage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const article = await articleService.getArticleById(id);

    if (!article) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow">
                <h1 className="text-2xl font-bold mb-6">编辑文章</h1>
                <ArticleEditor initialData={article} />
            </div>
        </div>
    );
}
