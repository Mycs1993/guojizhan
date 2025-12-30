import { Article } from "@/types/article";
import { saveArticleAction } from "../actions";

type ArticleFormProps = {
  article?: Article;
  submitLabel?: string;
};

function toDateTimeLocal(value?: string): string {
  const date = value ? new Date(value) : new Date();
  if (Number.isNaN(date.getTime())) return "";

  const pad = (num: number) => String(num).padStart(2, "0");
  return [
    `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`,
    `${pad(date.getHours())}:${pad(date.getMinutes())}`,
  ].join("T");
}

export function ArticleForm({ article, submitLabel = "Save Article" }: ArticleFormProps) {
  const publishedAt = toDateTimeLocal(article?.publishedAt);

  return (
    <form action={saveArticleAction} className="space-y-6">
      {article?.id ? <input type="hidden" name="id" value={article.id} /> : null}

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="title" className="text-sm font-semibold text-slate-700">
            Title
          </label>
          <input
            id="title"
            name="title"
            type="text"
            required
            defaultValue={article?.title ?? ""}
            className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm focus:border-blue-500 focus:outline-none"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="slug" className="text-sm font-semibold text-slate-700">
            Slug (optional)
          </label>
          <input
            id="slug"
            name="slug"
            type="text"
            defaultValue={article?.slug ?? ""}
            className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm focus:border-blue-500 focus:outline-none"
          />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="space-y-2">
          <label htmlFor="author" className="text-sm font-semibold text-slate-700">
            Author
          </label>
          <input
            id="author"
            name="author"
            type="text"
            defaultValue={article?.author ?? "Admin"}
            className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm focus:border-blue-500 focus:outline-none"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="status" className="text-sm font-semibold text-slate-700">
            Status
          </label>
          <select
            id="status"
            name="status"
            defaultValue={article?.status ?? "draft"}
            className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm focus:border-blue-500 focus:outline-none"
          >
            <option value="draft">Draft</option>
            <option value="published">Published</option>
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="publishedAt" className="text-sm font-semibold text-slate-700">
            Publish Time
          </label>
          <input
            id="publishedAt"
            name="publishedAt"
            type="datetime-local"
            defaultValue={publishedAt}
            className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm focus:border-blue-500 focus:outline-none"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="summary" className="text-sm font-semibold text-slate-700">
          Summary
        </label>
        <textarea
          id="summary"
          name="summary"
          required
          rows={3}
          defaultValue={article?.summary ?? ""}
          className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm focus:border-blue-500 focus:outline-none"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="coverImage" className="text-sm font-semibold text-slate-700">
          Cover Image URL (optional)
        </label>
        <input
          id="coverImage"
          name="coverImage"
          type="text"
          defaultValue={article?.coverImage ?? ""}
          placeholder="/images/news/example.jpg"
          className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm focus:border-blue-500 focus:outline-none"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="tags" className="text-sm font-semibold text-slate-700">
          Tags (comma-separated)
        </label>
        <input
          id="tags"
          name="tags"
          type="text"
          defaultValue={article?.tags?.join(", ") ?? ""}
          className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm focus:border-blue-500 focus:outline-none"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="content" className="text-sm font-semibold text-slate-700">
          Content (Markdown)
        </label>
        <textarea
          id="content"
          name="content"
          required
          rows={16}
          defaultValue={article?.content ?? ""}
          className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm font-mono focus:border-blue-500 focus:outline-none"
        />
      </div>

      <div className="flex items-center justify-end gap-3">
        <button
          type="submit"
          className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700"
        >
          {submitLabel}
        </button>
      </div>
    </form>
  );
}
