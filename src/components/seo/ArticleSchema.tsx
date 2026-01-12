import { generateNewsArticleJsonLd, type NewsItem } from "@/lib/seo";

interface ArticleSchemaProps {
  article: NewsItem;
}

export function ArticleSchema({ article }: ArticleSchemaProps) {
  const schema = generateNewsArticleJsonLd(article);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
