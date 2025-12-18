"use client";

import { useState, useEffect } from "react";
import { Plus, Pencil, Trash2, X, Check } from "lucide-react";
import type { Keyword } from "@/types/seo";

export default function KeywordsPage() {
  const [keywords, setKeywords] = useState<Keyword[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({ keyword: "", category: "general" });
  const [error, setError] = useState("");
  const categories = ["core", "product", "commercial", "general", "ai-suggested"];

  useEffect(() => { fetchKeywords(); }, []);

  async function fetchKeywords() {
    try {
      const res = await fetch("/api/admin/keywords");
      if (res.ok) { const data = await res.json(); setKeywords(data.keywords); }
    } catch { setError("加载关键词失败"); }
    finally { setLoading(false); }
  }

  async function handleAdd() {
    if (!formData.keyword.trim()) return;
    const res = await fetch("/api/admin/keywords", {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    if (res.ok) { await fetchKeywords(); setFormData({ keyword: "", category: "general" }); setShowForm(false); }
  }

  async function handleUpdate(id: string) {
    const res = await fetch(`/api/admin/keywords/${id}`, {
      method: "PUT", headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    if (res.ok) { await fetchKeywords(); setEditingId(null); }
  }

  async function handleDelete(id: string) {
    if (!confirm("确定删除？")) return;
    const res = await fetch(`/api/admin/keywords/${id}`, { method: "DELETE" });
    if (res.ok) await fetchKeywords();
  }

  if (loading) return <div className="text-center py-12">加载中...</div>;


  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-slate-900">关键词管理</h1>
        <button onClick={() => setShowForm(true)} className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          <Plus size={20} /> 添加关键词
        </button>
      </div>
      {error && <div className="bg-red-50 text-red-600 p-4 rounded-lg mb-4">{error}</div>}
      {showForm && (
        <div className="bg-white p-4 rounded-lg shadow mb-6">
          <div className="flex gap-4">
            <input type="text" placeholder="输入关键词" value={formData.keyword} onChange={(e) => setFormData({ ...formData, keyword: e.target.value })} className="flex-1 border rounded-lg px-3 py-2" />
            <select value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })} className="border rounded-lg px-3 py-2">
              {categories.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
            <button onClick={handleAdd} className="bg-green-600 text-white px-4 py-2 rounded-lg"><Check size={20} /></button>
            <button onClick={() => setShowForm(false)} className="bg-slate-200 px-4 py-2 rounded-lg"><X size={20} /></button>
          </div>
        </div>
      )}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-slate-50">
            <tr>
              <th className="text-left px-6 py-3 text-sm font-semibold text-slate-600">关键词</th>
              <th className="text-left px-6 py-3 text-sm font-semibold text-slate-600">分类</th>
              <th className="text-left px-6 py-3 text-sm font-semibold text-slate-600">状态</th>
              <th className="text-right px-6 py-3 text-sm font-semibold text-slate-600">操作</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {keywords.map((kw) => (
              <tr key={kw.id} className="hover:bg-slate-50">
                <td className="px-6 py-4">{editingId === kw.id ? <input type="text" value={formData.keyword} onChange={(e) => setFormData({ ...formData, keyword: e.target.value })} className="border rounded px-2 py-1" /> : <span className="font-medium">{kw.keyword}</span>}</td>
                <td className="px-6 py-4"><span className="text-sm bg-slate-100 px-2 py-1 rounded">{kw.category}</span></td>
                <td className="px-6 py-4"><span className={`text-sm px-2 py-1 rounded ${kw.status === "active" ? "bg-green-100 text-green-700" : "bg-slate-100"}`}>{kw.status === "active" ? "启用" : "禁用"}</span></td>
                <td className="px-6 py-4 text-right">
                  {editingId === kw.id ? (
                    <><button onClick={() => handleUpdate(kw.id)} className="text-green-600 mr-2"><Check size={18} /></button><button onClick={() => setEditingId(null)} className="text-slate-400"><X size={18} /></button></>
                  ) : (
                    <><button onClick={() => { setEditingId(kw.id); setFormData({ keyword: kw.keyword, category: kw.category }); }} className="text-blue-600 mr-2"><Pencil size={18} /></button><button onClick={() => handleDelete(kw.id)} className="text-red-600"><Trash2 size={18} /></button></>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {keywords.length === 0 && <div className="text-center py-12 text-slate-500">暂无关键词</div>}
      </div>
    </div>
  );
}
