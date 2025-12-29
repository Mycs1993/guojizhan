'use client';

export default function DeleteArticleButton({ articleId }: { articleId: string }) {
    const handleDelete = async () => {
        if (!confirm('确定要删除这篇文章吗？此操作不可恢复�?)) return;

        try {
            const res = await fetch(`/api/manage/articles/${articleId}`, { method: 'DELETE' });
            if (res.ok) {
                window.location.reload();
            } else {
                alert('删除失败');
            }
        } catch {
            alert('删除失败');
        }
    };

    return (
        <button
            onClick={handleDelete}
            className="text-red-600 hover:text-red-900"
        >
            删除
        </button>
    );
}
