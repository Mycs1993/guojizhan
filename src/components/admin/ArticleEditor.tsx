'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Article } from '@/types/article';

interface ArticleEditorProps {
    initialData?: Article;
}

export default function ArticleEditor({ initialData }: ArticleEditorProps) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [formData, setFormData] = useState<Partial<Article>>(
        initialData || {
            title: '',
            summary: '',
            content: '',
            status: 'draft',
            coverImage: '',
        }
    );
    const router = useRouter();

    const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const data = new FormData();
        data.append('file', file);

        try {
            const res = await fetch('/api/upload', {
                method: 'POST',
                body: data,
            });
            const result = await res.json();
            if (result.url) {
                setFormData((prev) => ({ ...prev, coverImage: result.url }));
            }
        } catch {
            alert('Upload failed');
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const res = await fetch('/api/admin/articles', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                router.push('/admin/dashboard');
                router.refresh();
            } else {
                setError('Failed to save article');
            }
        } catch {
            setError('An error occurred');
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div>
                <label className="block text-sm font-medium text-gray-700">标题</label>
                <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm border p-2"
                    required
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">摘要</label>
                <textarea
                    value={formData.summary}
                    onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
                    rows={3}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm border p-2"
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">封面图片</label>
                <div className="mt-1 flex items-center space-x-4">
                    {formData.coverImage && (
                        <img src={formData.coverImage} alt="Cover" className="h-20 w-20 object-cover rounded" />
                    )}
                    <input type="file" onChange={handleUpload} className="text-sm" />
                    {formData.coverImage && (
                        <button type="button" onClick={() => setFormData({ ...formData, coverImage: '' })} className="text-red-500 text-sm">删除</button>
                    )}
                </div>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">正文 (Markdown)</label>
                <textarea
                    value={formData.content}
                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                    rows={10}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm font-mono border p-2"
                    required
                />
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <div className="flex justify-end space-x-3 pt-4 border-t">
                <button
                    type="button"
                    onClick={() => router.back()}
                    className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                    取消
                </button>
                <button
                    type="button"
                    disabled={loading}
                    onClick={async (e) => {
                        e.preventDefault();
                        setFormData(prev => ({ ...prev, status: 'draft' }));
                        const form = e.currentTarget.closest('form');
                        if (form) {
                            setLoading(true);
                            try {
                                const res = await fetch('/api/admin/articles', {
                                    method: 'POST',
                                    headers: { 'Content-Type': 'application/json' },
                                    body: JSON.stringify({ ...formData, status: 'draft' }),
                                });
                                if (res.ok) {
                                    router.push('/admin/dashboard');
                                    router.refresh();
                                } else {
                                    setError('保存失败');
                                }
                            } catch {
                                setError('发生错误');
                            } finally {
                                setLoading(false);
                            }
                        }
                    }}
                    className="py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
                >
                    保存草稿
                </button>
                <button
                    type="button"
                    disabled={loading}
                    onClick={async (e) => {
                        e.preventDefault();
                        if (!formData.title || !formData.content) {
                            setError('请填写标题和正文');
                            return;
                        }
                        setLoading(true);
                        try {
                            const res = await fetch('/api/admin/articles', {
                                method: 'POST',
                                headers: { 'Content-Type': 'application/json' },
                                body: JSON.stringify({ ...formData, status: 'published' }),
                            });
                            if (res.ok) {
                                router.push('/admin/dashboard');
                                router.refresh();
                            } else {
                                setError('发布失败');
                            }
                        } catch {
                            setError('发生错误');
                        } finally {
                            setLoading(false);
                        }
                    }}
                    className="py-2 px-6 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 disabled:opacity-50"
                >
                    {loading ? '处理中...' : '发布文章'}
                </button>
            </div>
        </form>
    );
}
