"use client";

import { useState, useEffect, use } from "react";
import Link from "next/link";
import { ArrowLeft, Save } from "lucide-react";
import type { PageSEO } from "@/types/seo";

export default function PageSEOEditor({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState<Partial<PageSEO>>({ title: "", description: "", keywords: [] });
  const [keywordInput, setKeywordInput] = useState("");

  useEffect(() => {
    async function fetchPage() {
      try {
        const res = await fetch(`/api/admin/pages/${slug}`);
        if (res.ok) { const data = await res.json(); setFormData(data.page); }
      } catch { setError("加载失败"); }
      finally { setLoading(false); }
    }
    fetchPage();
  }, [slug]);

  async function handleSave() {
    setSaving(true); setError(""); setSuccess(false);
    try {
      const res = await fetch(`/api/admin/pages/${slug}`, {
        method: "PUT", headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) { setSuccess(true); setTimeout(() => setSuccess(false), 3000); }
      else { const data = await res.json(); setError(data.error || "保存失败"); }
    } catch { setError("保存失败"); }
    finally { setSaving(false); }
  }

  function addKeyword() {
    if (keywordInput.trim() && !formData.keywords?.includes(keywordInput.trim())) {
      setFormData({ ...formData, keywords: [...(formData.keywords || []), keywordInput.trim()] });
      setKeywordInput("");
    }
  }

  const titleLen = (formData.title || "").length;
  const descLen = (formData.description || "").length;

  if (loading) return <div className="text-center py-12">加载中...</div>;


  return (
    <div>
      <div className="flex items-center gap-4 mb-6">
        <Link href="/admin/pages" className="p-2 hover:bg-slate-200 rounded-lg"><ArrowLeft size={20} /></Link>
        <h1 className="text-2xl font-bold text-slate-900">编辑页面 SEO: {slug}</h1>
      </div>
      {error && <div className="bg-red-50 text-red-600 p-4 rounded-lg mb-4">{error}</div>}
      {success && <div className="bg-green-50 text-green-600 p-4 rounded-lg mb-4">保存成功！</div>}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">页面标题 (Title)</label>
            <input type="text" value={formData.title || ""} onChange={(e) => setFormData({ ...formData, title: e.target.value })} className="w-full border rounded-lg px-3 py-2" />
            <div className="text-xs mt-1 text-slate-500">{titleLen}/60 {titleLen > 60 && <span className="text-orange-600">⚠️ 过长</span>}</div>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">页面描述 (Description)</label>
            <textarea value={formData.description || ""} onChange={(e) => setFormData({ ...formData, description: e.target.value })} className="w-full border rounded-lg px-3 py-2 h-24" />
            <div className="text-xs mt-1 text-slate-500">{descLen}/160 {descLen > 160 && <span className="text-orange-600">⚠️ 过长</span>}</div>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">关键词</label>
            <div className="flex gap-2 mb-2">
              <input type="text" value={keywordInput} onChange={(e) => setKeywordInput(e.target.value)} onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addKeyword())} className="flex-1 border rounded-lg px-3 py-2" placeholder="输入关键词后按回车" />
              <button onClick={addKeyword} className="bg-blue-600 text-white px-4 py-2 rounded-lg">添加</button>
            </div>
            <div className="flex flex-wrap gap-2">
              {formData.keywords?.map((kw) => (
                <span key={kw} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                  {kw}<button onClick={() => setFormData({ ...formData, keywords: formData.keywords?.filter((k) => k !== kw) })} className="hover:text-blue-600">×</button>
                </span>
              ))}
            </div>
          </div>
          <button onClick={handleSave} disabled={saving} className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 disabled:opacity-50">
            <Save size={20} />{saving ? "保存中..." : "保存更改"}
          </button>
        </div>
        <div className="bg-white rounded-lg border p-6">
          <h3 className="text-sm font-semibold text-slate-600 mb-4">Google 搜索预览</h3>
          <div className="border rounded-lg p-4 bg-slate-50">
            <div className="text-sm text-green-700 mb-1">https://gljyw.top/{slug === "home" ? "" : slug}</div>
            <h4 className="text-xl text-blue-800 mb-1 line-clamp-1">{formData.title || "页面标题"}</h4>
            <p className="text-sm text-slate-600 line-clamp-2">{formData.description || "页面描述..."}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
