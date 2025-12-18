import { getSEOConfig } from "@/lib/seo-service";
import { Key, FileText, Sparkles, TrendingUp } from "lucide-react";
import Link from "next/link";

export default async function AdminDashboardPage() {
  const config = await getSEOConfig();
  
  const stats = [
    {
      label: "活跃关键词",
      value: config.keywords.filter((k) => k.status === "active").length,
      icon: Key,
      href: "/admin/keywords",
      color: "bg-blue-500",
    },
    {
      label: "页面配置",
      value: Object.keys(config.pages).length,
      icon: FileText,
      href: "/admin/pages",
      color: "bg-green-500",
    },
    {
      label: "AI 推荐",
      value: config.aiSuggestions.filter((s) => s.status === "pending").length,
      icon: Sparkles,
      href: "/admin/ai-suggestions",
      color: "bg-purple-500",
    },
    {
      label: "总关键词",
      value: config.keywords.length,
      icon: TrendingUp,
      href: "/admin/keywords",
      color: "bg-orange-500",
    },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">仪表盘</h1>
        <p className="text-slate-500 mt-2">SEO 配置概览</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <Link
            key={stat.label}
            href={stat.href}
            className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-4">
              <div className={`${stat.color} p-3 rounded-lg text-white`}>
                <stat.icon size={24} />
              </div>
              <div>
                <p className="text-3xl font-bold text-slate-900">{stat.value}</p>
                <p className="text-slate-500 text-sm">{stat.label}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Recent Keywords */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
        <h2 className="text-xl font-bold text-slate-900 mb-4">最近关键词</h2>
        <div className="space-y-3">
          {config.keywords.slice(0, 5).map((keyword) => (
            <div
              key={keyword.id}
              className="flex items-center justify-between py-3 border-b border-slate-100 last:border-0"
            >
              <div>
                <p className="font-medium text-slate-900">{keyword.keyword}</p>
                <p className="text-sm text-slate-500">{keyword.category}</p>
              </div>
              <div className="flex items-center gap-4">
                {keyword.searchVolume && (
                  <span className="text-sm text-slate-500">
                    搜索量: {keyword.searchVolume.toLocaleString()}
                  </span>
                )}
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    keyword.status === "active"
                      ? "bg-green-100 text-green-700"
                      : "bg-slate-100 text-slate-600"
                  }`}
                >
                  {keyword.status === "active" ? "活跃" : "停用"}
                </span>
              </div>
            </div>
          ))}
        </div>
        <Link
          href="/admin/keywords"
          className="block mt-4 text-blue-600 hover:text-blue-700 font-medium text-sm"
        >
          查看全部关键词 →
        </Link>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-xl font-bold text-slate-900 mb-4">快捷操作</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link
            href="/admin/keywords"
            className="p-4 border border-slate-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors"
          >
            <Key className="text-blue-600 mb-2" size={24} />
            <p className="font-medium text-slate-900">添加关键词</p>
            <p className="text-sm text-slate-500">管理网站关键词</p>
          </Link>
          <Link
            href="/admin/pages"
            className="p-4 border border-slate-200 rounded-lg hover:border-green-300 hover:bg-green-50 transition-colors"
          >
            <FileText className="text-green-600 mb-2" size={24} />
            <p className="font-medium text-slate-900">编辑页面 SEO</p>
            <p className="text-sm text-slate-500">优化页面元数据</p>
          </Link>
          <Link
            href="/admin/ai-suggestions"
            className="p-4 border border-slate-200 rounded-lg hover:border-purple-300 hover:bg-purple-50 transition-colors"
          >
            <Sparkles className="text-purple-600 mb-2" size={24} />
            <p className="font-medium text-slate-900">AI 关键词推荐</p>
            <p className="text-sm text-slate-500">智能发现新关键词</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
