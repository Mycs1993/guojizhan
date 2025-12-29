'use client';

export default function LogoutButton({ redirectTo = '/en/admin/login' }: { redirectTo?: string }) {
    const handleLogout = async () => {
        await fetch('/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ action: 'logout' }),
        });
        window.location.href = redirectTo;
    };

    return (
        <button
            onClick={handleLogout}
            className="bg-white text-gray-700 border border-gray-300 px-6 py-2 rounded-lg hover:bg-gray-50 transition font-semibold shadow-sm"
        >
            退出登录
        </button>
    );
}
