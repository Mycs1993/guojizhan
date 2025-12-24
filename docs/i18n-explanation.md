# 中英文翻译原理说明

## 1. 翻译系统架构

这个项目使用 **next-intl** 库来实现国际化（i18n）功能。

### 核心组件：

#### 1.1 路由配置 (`src/i18n/routing.ts`)
```typescript
export const routing = defineRouting({
    locales: ['en', 'zh'],      // 支持的语言列表
    defaultLocale: 'en'          // 默认语言
});
```
- 定义了支持的语言：英文（en）和中文（zh）
- 默认语言是英文

#### 1.2 中间件 (`src/middleware.ts`)
```typescript
export default createMiddleware(routing);
```
- 自动检测用户的语言偏好
- 根据 URL 路径（如 `/en/about` 或 `/zh/about`）切换语言
- 重定向到正确的语言版本

#### 1.3 请求配置 (`src/i18n/request.ts`)
```typescript
return {
    locale,  // 当前语言
    messages: (await import(`../../messages/${locale}.json`)).default
};
```
- 根据当前语言加载对应的翻译文件
- `messages/en.json` 用于英文
- `messages/zh.json` 用于中文

## 2. 翻译文件结构

### 2.1 翻译文件位置
- `messages/en.json` - 英文翻译
- `messages/zh.json` - 中文翻译

### 2.2 翻译文件格式
```json
{
  "AboutPage": {
    "title": "About Us",
    "subtitle": "A legacy of quality..."
  }
}
```

## 3. 在组件中使用翻译

### 3.1 服务器组件（Server Component）
```typescript
import { getTranslations } from "next-intl/server";

export default async function AboutPage() {
  const t = await getTranslations("AboutPage");
  
  return <h1>{t("title")}</h1>;  // 输出: "About Us" 或 "关于我们"
}
```

### 3.2 客户端组件（Client Component）
```typescript
"use client";
import { useTranslations } from "next-intl";

export function MyComponent() {
  const t = useTranslations("AboutPage");
  
  return <h1>{t("title")}</h1>;
}
```

## 4. 工作流程

### 4.1 用户访问网站
1. 用户访问 `/about` 或 `/zh/about` 或 `/en/about`
2. 中间件检测语言（从 URL 或浏览器设置）
3. 重定向到对应的语言路径

### 4.2 页面渲染
1. Next.js 读取 URL 中的 `[locale]` 参数
2. `getTranslations("AboutPage")` 加载对应语言的翻译文件
3. `t("title")` 返回当前语言对应的文本
4. 页面渲染时显示对应语言的文本

### 4.3 语言切换
1. 用户点击语言切换按钮
2. 使用 `useRouter().replace(pathname, { locale: 'zh' })` 切换语言
3. URL 更新为 `/zh/about`
4. 页面重新加载，显示中文内容

## 5. 翻译键的命名规则

使用点号分隔的层级结构：
```json
{
  "AboutPage": {
    "title": "...",
    "companyProfile": "...",
    "certifications": "...",
    "cert1": "...",
    "cert2": "..."
  }
}
```

在代码中使用：
```typescript
t("title")                    // AboutPage.title
t("companyProfile")           // AboutPage.companyProfile
t("cert1")                    // AboutPage.cert1
```

## 6. 优势

1. **类型安全**：TypeScript 可以检查翻译键是否存在
2. **自动切换**：根据 URL 自动加载对应语言
3. **SEO 友好**：每种语言有独立的 URL
4. **易于维护**：所有翻译集中管理
5. **性能优化**：只加载当前语言的翻译文件

## 7. 添加新翻译的步骤

1. 在 `messages/en.json` 中添加英文翻译
2. 在 `messages/zh.json` 中添加中文翻译
3. 在组件中使用 `t("key")` 获取翻译
4. 刷新页面查看效果

## 8. 示例

### 翻译文件：
```json
// en.json
{
  "AboutPage": {
    "title": "About Us"
  }
}

// zh.json
{
  "AboutPage": {
    "title": "关于我们"
  }
}
```

### 组件代码：
```typescript
const t = await getTranslations("AboutPage");
<h1>{t("title")}</h1>
```

### 结果：
- 访问 `/en/about` → 显示 "About Us"
- 访问 `/zh/about` → 显示 "关于我们"

