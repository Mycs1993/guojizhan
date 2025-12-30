import Link from "next/link";
import { requireAdmin } from "@/lib/admin";
import { ArticleForm } from "../_components/ArticleForm";

export default async function AdminNewPage() {
  await requireAdmin();

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-4xl px-6 py-10">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-600">
              Admin
            </p>
            <h1 className="text-2xl font-bold text-slate-900">New Article</h1>
          </div>
          <Link
            href="/admin"
            className="text-sm font-semibold text-slate-500 hover:text-slate-700"
          >
            Back to list
          </Link>
        </div>

        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <ArticleForm submitLabel="Create Article" />
        </div>
      </div>
    </div>
  );
}
