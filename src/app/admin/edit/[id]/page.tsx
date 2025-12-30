import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleForm } from "../../_components/ArticleForm";
import { deleteArticleAction } from "../../actions";
import { articleService } from "@/lib/articles";
import { requireAdmin } from "@/lib/admin";

export default async function AdminEditPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ saved?: string }>;
}) {
  await requireAdmin();
  const { id } = await params;
  const { saved } = await searchParams;
  const article = await articleService.getArticleById(id);

  if (!article) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-4xl px-6 py-10">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-600">
              Admin
            </p>
            <h1 className="text-2xl font-bold text-slate-900">Edit Article</h1>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/admin"
              className="text-sm font-semibold text-slate-500 hover:text-slate-700"
            >
              Back to list
            </Link>
            <form action={deleteArticleAction}>
              <input type="hidden" name="id" value={article.id} />
              <button
                type="submit"
                className="rounded-lg border border-red-200 px-4 py-2 text-sm font-semibold text-red-500 hover:bg-red-50"
              >
                Delete
              </button>
            </form>
          </div>
        </div>

        {saved ? (
          <div className="mt-6 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
            Changes saved.
          </div>
        ) : null}

        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <ArticleForm article={article} submitLabel="Save Changes" />
        </div>
      </div>
    </div>
  );
}
