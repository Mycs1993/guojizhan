import Link from "next/link";
import { loginAction } from "../actions";

export default async function AdminLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;

  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6">
      <div className="w-full max-w-md rounded-2xl bg-slate-900 p-8 shadow-xl border border-slate-800">
        <div className="mb-6">
          <p className="text-sm uppercase tracking-[0.3em] text-blue-400">Admin</p>
          <h1 className="text-2xl font-semibold">Sign in</h1>
          <p className="text-sm text-slate-400 mt-2">Use the admin password to continue.</p>
        </div>

        {error ? (
          <div className="mb-4 rounded-lg border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-200">
            Incorrect password. Please try again.
          </div>
        ) : null}

        <form action={loginAction} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-medium text-slate-300">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white focus:border-blue-500 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 py-3 text-sm font-semibold text-white hover:bg-blue-700"
          >
            Sign in
          </button>
        </form>

        <div className="mt-6 text-sm text-slate-500">
          <Link href="/" className="text-blue-400 hover:text-blue-300">
            Back to site
          </Link>
        </div>
      </div>
    </div>
  );
}
