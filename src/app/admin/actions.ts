"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { articleService } from "@/lib/articles";
import { login, logout } from "@/lib/auth";
import { requireAdmin } from "@/lib/admin";
import { routing } from "@/i18n/routing";

function getString(formData: FormData, key: string, options?: { trim?: boolean }) {
  const value = formData.get(key);
  if (typeof value !== "string") return "";
  if (options?.trim === false) return value;
  return value.trim();
}

function parseTags(raw: string): string[] {
  if (!raw) return [];
  return raw
    .split(",")
    .map((tag) => tag.trim())
    .filter(Boolean);
}

function parsePublishedAt(raw: string): string {
  if (!raw) return new Date().toISOString();
  const date = new Date(raw);
  if (Number.isNaN(date.getTime())) return new Date().toISOString();
  return date.toISOString();
}

function revalidateNewsPaths(slug?: string) {
  for (const locale of routing.locales) {
    revalidatePath(`/${locale}/news`);
    if (slug) {
      revalidatePath(`/${locale}/news/${slug}`);
    }
  }
}

export async function loginAction(formData: FormData) {
  const password = getString(formData, "password");
  const ok = await login(password);
  if (!ok) {
    redirect("/admin/login?error=1");
  }
  redirect("/admin");
}

export async function logoutAction() {
  await logout();
  redirect("/admin/login");
}

export async function saveArticleAction(formData: FormData) {
  await requireAdmin();

  const id = getString(formData, "id") || undefined;
  const title = getString(formData, "title");
  const summary = getString(formData, "summary");
  const content = getString(formData, "content", { trim: false });
  const slug = getString(formData, "slug") || undefined;
  let coverImage = getString(formData, "coverImage") || undefined;

  const coverImageFile = formData.get("coverImageFile") as File;
  if (coverImageFile && coverImageFile.size > 0) {
    if (coverImageFile.size > 5 * 1024 * 1024) {
      throw new Error("Image size should be less than 5MB");
    }
    coverImage = await articleService.uploadImage(coverImageFile);
  }
  const author = getString(formData, "author") || "Admin";
  const status = getString(formData, "status") === "published" ? "published" : "draft";
  const tags = parseTags(getString(formData, "tags"));
  const publishedAt = parsePublishedAt(getString(formData, "publishedAt"));

  const article = await articleService.saveArticle({
    id,
    title,
    summary,
    content,
    slug,
    coverImage,
    author,
    status,
    tags,
    publishedAt,
  });

  revalidateNewsPaths(article.slug);
  redirect(`/admin/edit/${article.id}?saved=1`);
}

export async function deleteArticleAction(formData: FormData) {
  await requireAdmin();

  const id = getString(formData, "id");
  if (!id) {
    redirect("/admin");
  }

  const existing = await articleService.getArticleById(id);
  await articleService.deleteArticle(id);

  revalidateNewsPaths(existing?.slug);
  redirect("/admin?deleted=1");
}
