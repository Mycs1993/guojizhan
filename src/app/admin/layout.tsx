import "@/app/globals.css";

export const metadata = {
    title: '管理后台 - Admin',
};

export default function AdminRootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="zh">
            <body className="antialiased">
                {children}
            </body>
        </html>
    );
}
