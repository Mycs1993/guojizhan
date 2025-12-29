import "@/app/globals.css";

export const metadata = {
    title: '管理后台 - Admin',
};

export default function AdminRootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    // Admin layout - html and body are defined in root layout
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
            {children}
        </div>
    );
}
