"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FileText, ExternalLink } from "lucide-react";
import type { PageSEO } from "@/types/seo";

export default function PagesListPage() {
  const [pages, setPages] = useState<PageSEO[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPages() {
      try {
        const res = await fetch("/api/admin/pages");
        if (res.ok) { const data = await res.json(); setPages(data.pages); }
      } catch { console.error("Failed to fetch pages"); }
      finally { setLoading(false); }
    }
    fetchPages();
  }, []);

  if (loading) return <div className="text-center py-12">加载中...</div>;

  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-900 mb-6">页面 SEO 管理</h1>
      <div className="grid gap-4">
        {pages.map((page) => (
          <div key={page.slug} className="bg-white rounded-lg shadow p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-50 rounded-lg"><FileText className="text-blue-600" size={24} /></div>
                <div>
                  <h3 className="font-semibold text-lg text-slate-900">{page.title}</h3>
                  <p className="text-slate-500 text-sm mt-1 line-clamp-2">{page.description}</p>
                  <div className="flex gap-2 mt-2 flex-wrap">
                    {page.keywords.slice(0, 3).map((kw) => (
                      <span key={kw} className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">{kw}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <Link href={`/${page.slug === "home" ? "" : page.slug}`} target="_blank" className="p-2 text-slate-400 hover:text-slate-600"><ExternalLink size={18} /></Link>
                <Link href={`/admin/pages/${page.slug}`} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-sm">编辑 SEO</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      {pages.length === 0 && <div className="text-center py-12 text-slate-500">暂无页面配置</div>}
    </div>
  );
}
