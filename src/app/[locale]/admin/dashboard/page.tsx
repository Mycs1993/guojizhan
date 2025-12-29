import { articleService } from '@/lib/articles';
import Link from 'next/link';
import LogoutButton from '@/components/admin/LogoutButton';

export const dynamic = 'force-dynamic';

export default async function AdminDashboard() {
  const articles = await articleService.getAllArticles(true);

  return (
    <div className="min-h-screen p-8 bg-gray-50 text-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">管理后台</h1>
            <p className="text-gray-500">欢迎回来，管理员</p>
          </div>
          <div className="flex gap-4">
            <Link
              href="/en/admin/articles/new"
              className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition font-semibold shadow-sm"
            >
              + 新建文章
            </Link>
            <LogoutButton />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg border overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">标题</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">状态</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">日期</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">操作</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {articles.map((article) => (
                <tr key={article.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{article.title}</div>
                    <div className="text-xs text-gray-500">{article.slug}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${article.status === 'published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                      {article.status === 'published' ? '已发布' : '草稿'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(article.publishedAt).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <Link href={`/en/admin/articles/${article.id}`} className="text-indigo-600 hover:text-indigo-900">
                      编辑
                    </Link>
                  </td>
                </tr>
              ))}
              {articles.length === 0 && (
                <tr>
                  <td colSpan={4} className="px-6 py-10 text-center text-gray-500">
                    暂无文章
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
