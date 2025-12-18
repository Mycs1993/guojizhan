import Link from "next/link";
import { LayoutDashboard, Key, FileText, Sparkles, LogOut } from "lucide-react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-100 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-white flex flex-col">
        <div className="p-6 border-b border-slate-700">
          <h1 className="text-xl font-bold">SEO Admin</h1>
          <p className="text-slate-400 text-sm mt-1">管理后台</p>
        </div>
        
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            <li>
              <Link
                href="/admin/dashboard"
                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-800 transition-colors"
              >
                <LayoutDashboard size={20} />
                <span>仪表盘</span>
              </Link>
            </li>
            <li>
              <Link
                href="/admin/keywords"
                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-800 transition-colors"
              >
                <Key size={20} />
                <span>关键词管理</span>
              </Link>
            </li>
            <li>
              <Link
                href="/admin/pages"
                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-800 transition-colors"
              >
                <FileText size={20} />
                <span>页面 SEO</span>
              </Link>
            </li>
            <li>
              <Link
                href="/admin/ai-suggestions"
                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-800 transition-colors"
              >
                <Sparkles size={20} />
                <span>AI 推荐</span>
              </Link>
            </li>
          </ul>
        </nav>

        <div className="p-4 border-t border-slate-700">
          <form action="/api/admin/auth/logout" method="POST">
            <button
              type="submit"
              className="flex items-center gap-3 px-4 py-3 w-full rounded-lg hover:bg-slate-800 transition-colors text-slate-400 hover:text-white"
            >
              <LogOut size={20} />
              <span>退出登录</span>
            </button>
          </form>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}
