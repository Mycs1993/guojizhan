'use client';
import ArticleEditor from '@/components/admin/ArticleEditor';

export default function NewArticlePage() {
    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow">
                <h1 className="text-2xl font-bold mb-6">新建文章</h1>
                <ArticleEditor />
            </div>
        </div>
    );
}
