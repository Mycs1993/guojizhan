"use client";

import { useState, useEffect } from "react";
import { Sparkles, Check, X, RefreshCw, Loader2 } from "lucide-react";
import type { KeywordSuggestion } from "@/types/seo";

export default function AISuggestionsPage() {
  const [suggestions, setSuggestions] = useState<KeywordSuggestion[]>([]);
  const [loading, setLoading] = useState(true);
  const [generating, setGenerating] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => { fetchSuggestions(); }, []);

  async function fetchSuggestions() {
    try {
      const res = await fetch("/api/admin/ai/suggestions");
      if (res.ok) { const data = await res.json(); setSuggestions(data.suggestions || []); }
    } catch { setError("加载失败"); }
    finally { setLoading(false); }
  }

  async function generateSuggestions() {
    setGenerating(true); setError("");
    try {
      const res = await fetch("/api/admin/ai/suggest", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ context: "工业锅炉制造商" }),
      });
      if (res.ok) await fetchSuggestions();
      else setError("生成失败");
    } catch { setError("生成失败"); }
    finally { setGenerating(false); }
  }

  async function handleAccept(id: string) {
    const res = await fetch("/api/admin/ai/accept", {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    if (res.ok) setSuggestions(prev => prev.filter(s => s.id !== id));
  }

  async function handleDismiss(id: string) {
    const res = await fetch("/api/admin/ai/dismiss", {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    if (res.ok) setSuggestions(prev => prev.filter(s => s.id !== id));
  }

  if (loading) return <div className="text-center py-12">加载中...</div>;


  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">AI 关键词推荐</h1>
          <p className="text-slate-500 mt-1">AI 会根据您的网站内容自动推荐高价值关键词</p>
        </div>
        <button onClick={generateSuggestions} disabled={generating} className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 disabled:opacity-50">
          {generating ? <Loader2 size={20} className="animate-spin" /> : <RefreshCw size={20} />}
          {generating ? "生成中..." : "生成新推荐"}
        </button>
      </div>
      {error && <div className="bg-red-50 text-red-600 p-4 rounded-lg mb-4">{error}</div>}
      <div className="bg-white rounded-lg shadow">
        {suggestions.length === 0 ? (
          <div className="text-center py-12">
            <Sparkles className="mx-auto text-purple-400 mb-4" size={48} />
            <p className="text-slate-500">暂无推荐，点击上方按钮生成 AI 推荐</p>
          </div>
        ) : (
          <div className="divide-y">
            {suggestions.map((s) => (
              <div key={s.id} className="p-4 hover:bg-slate-50 flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <span className="font-semibold text-slate-900">{s.keyword}</span>
                    <span className={`text-xs px-2 py-0.5 rounded ${s.estimatedVolume === "高" ? "bg-green-100 text-green-700" : s.estimatedVolume === "中" ? "bg-yellow-100 text-yellow-700" : "bg-slate-100"}`}>搜索量: {s.estimatedVolume}</span>
                    <span className={`text-xs px-2 py-0.5 rounded ${s.difficulty === "低" ? "bg-green-100 text-green-700" : s.difficulty === "中" ? "bg-yellow-100 text-yellow-700" : "bg-red-100 text-red-700"}`}>难度: {s.difficulty}</span>
                  </div>
                  <p className="text-sm text-slate-500 mt-1">{s.reason}</p>
                </div>
                <div className="flex gap-2">
                  <button onClick={() => handleAccept(s.id)} className="p-2 text-green-600 hover:bg-green-50 rounded-lg" title="接受"><Check size={20} /></button>
                  <button onClick={() => handleDismiss(s.id)} className="p-2 text-red-600 hover:bg-red-50 rounded-lg" title="忽略"><X size={20} /></button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
