import Link from "next/link";
import { articleService } from "@/lib/articles";
import { requireAdmin } from "@/lib/admin";
import { deleteArticleAction, logoutAction } from "./actions";

function formatDate(value: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toISOString().split("T")[0];
}

export default async function AdminPage({
  searchParams,
}: {
  searchParams: Promise<{ saved?: string; deleted?: string }>;
}) {
  await requireAdmin();
  const articles = await articleService.getAllArticles(true);
  const { saved, deleted } = await searchParams;

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-600">
              Admin
            </p>
            <h1 className="text-2xl font-bold text-slate-900">文章管理</h1>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/admin/new"
              className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
            >
              新建文章
            </Link>
            <form action={logoutAction}>
              <button
                type="submit"
                className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100"
              >
                退出登录
              </button>
            </form>
          </div>
        </div>

        {saved ? (
          <div className="mt-6 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
            文章保存成功！
          </div>
        ) : null}

        {deleted ? (
          <div className="mt-6 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-700">
            文章已删除。
          </div>
        ) : null}

        <div className="mt-6 overflow-hidden rounded-xl border border-slate-200 bg-white">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-100 text-xs uppercase tracking-wider text-slate-500">
              <tr>
                <th className="px-4 py-3">标题</th>
                <th className="px-4 py-3">状态</th>
                <th className="px-4 py-3">发布时间</th>
                <th className="px-4 py-3">操作</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {articles.length === 0 ? (
                <tr>
                  <td className="px-4 py-6 text-slate-500" colSpan={4}>
                    暂无文章，请点击右上角新建。
                  </td>
                </tr>
              ) : (
                articles.map((article) => (
                  <tr key={article.id}>
                    <td className="px-4 py-4">
                      <div className="font-semibold text-slate-900">{article.title}</div>
                      <div className="text-xs text-slate-500">{article.slug}</div>
                    </td>
                    <td className="px-4 py-4">
                      <span
                        className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${article.status === "published"
                            ? "bg-emerald-100 text-emerald-700"
                            : "bg-amber-100 text-amber-700"
                          }`}
                      >
                        {article.status === "published" ? "已发布" : "草稿"}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-slate-600">
                      {formatDate(article.publishedAt)}
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex flex-wrap items-center gap-3">
                        <Link
                          href={`/admin/edit/${article.id}`}
                          className="text-sm font-semibold text-blue-600 hover:text-blue-700"
                        >
                          编辑
                        </Link>
                        <Link
                          href={`/en/news/${article.slug}`}
                          className="text-sm font-semibold text-slate-500 hover:text-slate-700"
                        >
                          预览
                        </Link>
                        <form action={deleteArticleAction}>
                          <input type="hidden" name="id" value={article.id} />
                          <button
                            type="submit"
                            className="text-sm font-semibold text-red-500 hover:text-red-600"
                          >
                            删除
                          </button>
                        </form>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
