"use client";

import { Article } from "@/types/article";
import { saveArticleAction } from "../actions";
import { useState, KeyboardEvent } from "react";
import { X, Plus, Save } from "lucide-react";

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

export function ArticleForm({ article, submitLabel = "保存文章" }: ArticleFormProps) {
  const publishedAt = toDateTimeLocal(article?.publishedAt);

  // Tag Management State
  const [tags, setTags] = useState<string[]>(article?.tags || []);
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addTag();
    }
  };

  const addTag = () => {
    const val = inputValue.trim();
    if (val && !tags.includes(val)) {
      setTags([...tags, val]);
      setInputValue("");
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  return (
    <form action={saveArticleAction} className="space-y-8">
      {article?.id ? <input type="hidden" name="id" value={article.id} /> : null}

      {/* Hero Section: Title & Slug */}
      <div className="bg-slate-50/50 p-6 rounded-xl border border-slate-100 space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <label htmlFor="title" className="text-sm font-bold text-slate-700">
              文章标题 (Title)
            </label>
            <input
              id="title"
              name="title"
              type="text"
              required
              defaultValue={article?.title ?? ""}
              placeholder="请输入吸睛的标题..."
              className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 focus:outline-none transition-all shadow-sm"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="slug" className="text-sm font-bold text-slate-700">
              URL 别名 (Slug) <span className="text-slate-400 font-normal">(可选，自动生成)</span>
            </label>
            <input
              id="slug"
              name="slug"
              type="text"
              defaultValue={article?.slug ?? ""}
              placeholder="my-awesome-article"
              className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm bg-slate-50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 focus:outline-none transition-all"
            />
          </div>
        </div>
      </div>

      {/* Meta Data Grid */}
      <div className="grid gap-6 md:grid-cols-3">
        <div className="space-y-2">
          <label htmlFor="author" className="text-sm font-bold text-slate-700">作者 (Author)</label>
          <input
            id="author"
            name="author"
            type="text"
            defaultValue={article?.author ?? "Admin"}
            className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm focus:border-blue-500 focus:outline-none shadow-sm"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="status" className="text-sm font-bold text-slate-700">状态 (Status)</label>
          <div className="relative">
            <select
              id="status"
              name="status"
              defaultValue={article?.status ?? "draft"}
              className="w-full appearance-none rounded-lg border border-slate-300 px-4 py-3 text-sm focus:border-blue-500 focus:outline-none shadow-sm cursor-pointer"
            >
              <option value="draft">草稿 (隐藏)</option>
              <option value="published">已发布 (公开)</option>
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="publishedAt" className="text-sm font-bold text-slate-700">发布日期 (Date)</label>
          <input
            id="publishedAt"
            name="publishedAt"
            type="datetime-local"
            defaultValue={publishedAt}
            className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm focus:border-blue-500 focus:outline-none shadow-sm"
          />
        </div>
      </div>

      {/* Summary */}
      <div className="space-y-2">
        <label htmlFor="summary" className="text-sm font-bold text-slate-700">
          摘要 (SEO Description)
        </label>
        <textarea
          id="summary"
          name="summary"
          required
          rows={3}
          defaultValue={article?.summary ?? ""}
          placeholder="简要描述这篇文章的内容（用于 Google 搜索结果展示）..."
          className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 focus:outline-none transition-all shadow-sm resize-none"
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Image Upload */}
        <div className="space-y-3">
          <label className="text-sm font-bold text-slate-700">封面图片 (Cover Image)</label>

          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <label className="relative cursor-pointer flex flex-col items-center justify-center w-full sm:w-32 h-32 rounded-xl border-2 border-dashed border-slate-300 hover:border-blue-500 hover:bg-blue-50/50 transition-all bg-slate-50 overflow-hidden group">
              {article?.coverImage ? (
                <img src={article.coverImage} alt="Preview" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
              ) : (
                <div className="text-center p-2 text-slate-400 group-hover:text-blue-500">
                  <span className="text-3xl block mb-1">+</span>
                  <span className="text-xs font-medium">上传</span>
                </div>
              )}
              <input name="coverImageFile" type="file" className="hidden" accept="image/*" />
            </label>

            <div className="flex-1 w-full space-y-2">
              <input
                name="coverImage"
                type="text"
                defaultValue={article?.coverImage ?? ""}
                placeholder="或粘贴外部图片链接..."
                className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm focus:border-blue-500 focus:outline-none shadow-sm text-slate-600"
              />
              <p className="text-xs text-slate-400">
                点击方框上传 (最大 5MB)，或直接输入 URL。
                图片将自动保存到 <code className="bg-slate-100 px-1 rounded">/public/uploads</code>
              </p>
            </div>
          </div>
        </div>

        {/* Improved Tag Manager */}
        <div className="space-y-2">
          <label htmlFor="tags-input" className="text-sm font-bold text-slate-700">标签 & 关键词 (Tags)</label>

          <input type="hidden" name="tags" value={tags.join(",")} />

          <div className="min-h-[46px] w-full rounded-lg border border-slate-300 px-2 py-1.5 text-sm focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-500/10 transition-all shadow-sm bg-white flex flex-wrap gap-2 items-center">
            {tags.map(tag => (
              <span key={tag} className="inline-flex items-center gap-1 bg-blue-50 text-blue-700 px-2.5 py-1 rounded-md text-sm font-medium border border-blue-100 animate-in fade-in zoom-in duration-200">
                {tag}
                <button type="button" onClick={() => removeTag(tag)} className="hover:text-blue-900 transition-colors">
                  <X size={14} />
                </button>
              </span>
            ))}

            <input
              id="tags-input"
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={tags.length === 0 ? "输入标签并回车..." : "添加更多..."}
              className="flex-1 min-w-[120px] outline-none bg-transparent py-1 px-1"
            />
          </div>
          <p className="text-xs text-slate-400">按回车确认。这些标签将自动生成专题页内链。</p>
        </div>
      </div>

      {/* Content Editor */}
      <div className="space-y-2">
        <label htmlFor="content" className="text-sm font-bold text-slate-700">
          正文内容 (Markdown)
        </label>
        <div className="relative rounded-lg border border-slate-300 shadow-sm overflow-hidden focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-500/10 transition-all">
          <textarea
            id="content"
            name="content"
            required
            rows={20}
            defaultValue={article?.content ?? ""}
            placeholder="# Write your masterpiece here..."
            className="w-full bg-slate-50 p-6 text-sm font-mono focus:bg-white focus:outline-none resize-y"
          />
          <div className="absolute top-2 right-2 opacity-50 pointer-events-none text-xs bg-white px-2 py-1 rounded border">Markdown Mode</div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-8 py-3 text-sm font-bold text-white hover:bg-blue-700 active:transform active:scale-95 transition-all shadow-lg shadow-blue-600/20"
        >
          <Save size={18} />
          {submitLabel}
        </button>
      </div>
    </form>
  );
}
