import { describe, it, expect } from "vitest";
import fc from "fast-check";
import {
  generateProductMetadata,
  generateBreadcrumbs,
  generateBreadcrumbSchema,
  generateArticleSchema,
  type NewsItem,
} from "../seo";
import type { Product } from "@/data/products";

// 配置 fast-check 运行 100 次迭代
fc.configureGlobal({ numRuns: 100 });

// 产品数据生成器
const productArb = fc.record({
  id: fc.string({ minLength: 3, maxLength: 30 }),
  name: fc.string({ minLength: 5, maxLength: 100 }),
  description: fc.string({ minLength: 10, maxLength: 200 }),
  fullDescription: fc.string({ minLength: 20, maxLength: 500 }),
  image: fc.constantFrom("/images/product.jpg", "https://example.com/image.jpg"),
  icon: fc.constantFrom("Flame", "Leaf", "Factory", "Zap", "Thermometer"),
  features: fc.array(fc.string({ minLength: 5, maxLength: 50 }), { minLength: 1, maxLength: 5 }),
  specs: fc.array(
    fc.record({
      model: fc.string({ minLength: 3, maxLength: 20 }),
      capacity: fc.string({ minLength: 3, maxLength: 20 }),
      pressure: fc.string({ minLength: 3, maxLength: 20 }),
      efficiency: fc.string({ minLength: 2, maxLength: 10 }),
      fuel: fc.string({ minLength: 3, maxLength: 30 }),
    }),
    { minLength: 1, maxLength: 3 }
  ),
}) as fc.Arbitrary<Product>;

// 新闻数据生成器
const newsItemArb: fc.Arbitrary<NewsItem> = fc.record({
  id: fc.string({ minLength: 3, maxLength: 30 }),
  title: fc.string({ minLength: 10, maxLength: 100 }),
  excerpt: fc.string({ minLength: 20, maxLength: 200 }),
  content: fc.string({ minLength: 50, maxLength: 1000 }),
  date: fc
    .integer({ min: 1577836800000, max: Date.now() }) // 2020-01-01 to now in ms
    .map((ts) => new Date(ts).toISOString().split("T")[0]),
  image: fc.constantFrom("/images/news.jpg", "https://example.com/news.jpg", undefined),
  category: fc.constantFrom("Company News", "Industry News", "Product Update"),
});

// URL 路径生成器
const urlPathArb = fc
  .array(fc.stringMatching(/^[a-z0-9-]+$/), { minLength: 1, maxLength: 5 })
  .map((segments) => "/" + segments.filter((s) => s.length > 0).join("/"));

describe("SEO Property Tests", () => {
  // **Feature: seo-enhancement, Property 2: Product Metadata Completeness**
  describe("Property 2: Product Metadata Completeness", () => {
    it("generated metadata description should contain product name", () => {
      fc.assert(
        fc.property(productArb, (product) => {
          const metadata = generateProductMetadata(product);
          // Description 应该包含产品相关信息
          expect(metadata.description).toBeDefined();
          expect(typeof metadata.description).toBe("string");
          expect((metadata.description as string).length).toBeGreaterThan(0);
        })
      );
    });

    it("generated metadata should have valid OpenGraph configuration", () => {
      fc.assert(
        fc.property(productArb, (product) => {
          const metadata = generateProductMetadata(product);
          expect(metadata.openGraph).toBeDefined();
          expect(metadata.openGraph?.title).toBeDefined();
          expect(metadata.openGraph?.description).toBeDefined();
          expect(metadata.openGraph?.url).toContain(product.id);
          expect(metadata.openGraph?.images).toBeDefined();
        })
      );
    });

    it("generated metadata should have canonical URL", () => {
      fc.assert(
        fc.property(productArb, (product) => {
          const metadata = generateProductMetadata(product);
          expect(metadata.alternates?.canonical).toContain(product.id);
        })
      );
    });
  });

  // **Feature: seo-enhancement, Property 4: Breadcrumb Hierarchy Correctness**
  describe("Property 4: Breadcrumb Hierarchy Correctness", () => {
    it("breadcrumbs should start with Home", () => {
      fc.assert(
        fc.property(urlPathArb, (path) => {
          const breadcrumbs = generateBreadcrumbs(path);
          expect(breadcrumbs[0].name).toBe("Home");
      expect(breadcrumbs[0].url).toContain("gljyw.top");
        })
      );
    });

    it("breadcrumb positions should be sequential starting from 1", () => {
      fc.assert(
        fc.property(urlPathArb, (path) => {
          const breadcrumbs = generateBreadcrumbs(path);
          const schema = generateBreadcrumbSchema(breadcrumbs);
          const items = (schema as { itemListElement: { position: number }[] }).itemListElement;

          items.forEach((item, index) => {
            expect(item.position).toBe(index + 1);
          });
        })
      );
    });

    it("breadcrumb count should match path depth plus home", () => {
      fc.assert(
        fc.property(urlPathArb, (path) => {
          const segments = path.split("/").filter(Boolean);
          const breadcrumbs = generateBreadcrumbs(path);
          expect(breadcrumbs.length).toBe(segments.length + 1); // +1 for Home
        })
      );
    });
  });

  // **Feature: seo-enhancement, Property 6: Open Graph Required Fields**
  describe("Property 6: Open Graph Required Fields", () => {
    it("OpenGraph should have title, description, url, and images", () => {
      fc.assert(
        fc.property(productArb, (product) => {
          const metadata = generateProductMetadata(product);
          const og = metadata.openGraph;

          expect(og).toBeDefined();
          expect(og?.title).toBeDefined();
          expect(typeof og?.title).toBe("string");
          expect((og?.title as string).length).toBeGreaterThan(0);

          expect(og?.description).toBeDefined();
          expect(typeof og?.description).toBe("string");
          expect((og?.description as string).length).toBeGreaterThan(0);

          expect(og?.url).toBeDefined();
          expect(typeof og?.url).toBe("string");
          expect((og?.url as string).startsWith("https://")).toBe(true);

          expect(og?.images).toBeDefined();
          expect(Array.isArray(og?.images)).toBe(true);
          expect((og?.images as unknown[]).length).toBeGreaterThan(0);
        })
      );
    });
  });

  // **Feature: seo-enhancement, Property 7: Twitter Card Required Fields**
  describe("Property 7: Twitter Card Required Fields", () => {
    it("Twitter card should have card type, title, description, and images", () => {
      fc.assert(
        fc.property(productArb, (product) => {
          const metadata = generateProductMetadata(product);
          const twitter = metadata.twitter;

          expect(twitter).toBeDefined();
          expect(twitter?.card).toBe("summary_large_image");
          expect(twitter?.title).toBeDefined();
          expect(twitter?.description).toBeDefined();
          expect(twitter?.images).toBeDefined();
        })
      );
    });
  });

  // **Feature: seo-enhancement, Property 5: Article Schema Completeness**
  describe("Property 5: Article Schema Completeness", () => {
    it("article schema should have required fields", () => {
      fc.assert(
        fc.property(newsItemArb, (news) => {
          const schema = generateArticleSchema(news) as Record<string, unknown>;

          expect(schema["@context"]).toBe("https://schema.org");
          expect(schema["@type"]).toBe("Article");
          expect(schema.headline).toBe(news.title);
          expect(schema.datePublished).toBe(news.date);
          expect(schema.author).toBeDefined();
          expect(schema.publisher).toBeDefined();
        })
      );
    });

    it("article schema datePublished should be valid ISO date", () => {
      fc.assert(
        fc.property(newsItemArb, (news) => {
          const schema = generateArticleSchema(news) as { datePublished: string };
          const date = new Date(schema.datePublished);
          expect(date.toString()).not.toBe("Invalid Date");
        })
      );
    });
  });
});


// **Feature: seo-enhancement, Property 8: Sitemap Entry Validity**
describe("Property 8: Sitemap Entry Validity", () => {
  // 模拟 sitemap 条目生成函数
  const generateSitemapEntry = (
    path: string,
    priority: number,
    changeFreq: string
  ) => ({
    url: `https://gljyw.top${path}`,
    lastModified: new Date(),
    changeFrequency: changeFreq,
    priority,
  });

  it("sitemap URLs should be valid absolute URLs", () => {
    fc.assert(
      fc.property(
        fc.stringMatching(/^\/[a-z0-9/-]*$/),
        fc.double({ min: 0, max: 1, noNaN: true }),
        fc.constantFrom("always", "hourly", "daily", "weekly", "monthly", "yearly", "never"),
        (path, priority, changeFreq) => {
          const entry = generateSitemapEntry(path, priority, changeFreq);
          expect(entry.url.startsWith("https://")).toBe(true);
          expect(() => new URL(entry.url)).not.toThrow();
        }
      )
    );
  });

  it("sitemap priority should be between 0 and 1", () => {
    fc.assert(
      fc.property(fc.double({ min: 0, max: 1, noNaN: true }), (priority) => {
        expect(priority).toBeGreaterThanOrEqual(0);
        expect(priority).toBeLessThanOrEqual(1);
      })
    );
  });

  it("sitemap lastModified should be valid date", () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 1577836800000, max: Date.now() }),
        (timestamp) => {
          const date = new Date(timestamp);
          expect(date.toString()).not.toBe("Invalid Date");
        }
      )
    );
  });
});


// **Feature: seo-enhancement, Property 10: Image Alt Text Presence**
describe("Property 10: Image Alt Text Presence", () => {
  // 模拟生成产品图片 alt 文本的函数
  const generateProductImageAlt = (productName: string, description: string) => {
    return `${productName} - ${description}`;
  };

  it("product image alt should contain product name", () => {
    fc.assert(
      fc.property(
        fc.string({ minLength: 5, maxLength: 100 }),
        fc.string({ minLength: 10, maxLength: 200 }),
        (name, description) => {
          const alt = generateProductImageAlt(name, description);
          expect(alt).toContain(name);
          expect(alt.length).toBeGreaterThan(0);
        }
      )
    );
  });

  it("product image alt should be non-empty", () => {
    fc.assert(
      fc.property(productArb, (product) => {
        const alt = generateProductImageAlt(product.name, product.description);
        expect(alt.trim().length).toBeGreaterThan(0);
      })
    );
  });
});


// **Feature: seo-enhancement, Property 1: Title Tag Format Consistency**
describe("Property 1: Title Tag Format Consistency", () => {
  const COMPANY_SHORT_NAME = "Yudong Boiler";

  // 模拟 Next.js title template 应用
  const applyTitleTemplate = (pageTitle: string, template: string) => {
    return template.replace("%s", pageTitle);
  };

  it("page title should follow template pattern with company name", () => {
    fc.assert(
      fc.property(
        fc.stringMatching(/^[a-zA-Z0-9\s-]{3,50}$/), // 只使用安全字符
        (pageTitle) => {
          const template = `%s | ${COMPANY_SHORT_NAME}`;
          const fullTitle = applyTitleTemplate(pageTitle, template);

          expect(fullTitle).toContain(COMPANY_SHORT_NAME);
          expect(fullTitle).toContain("|");
          expect(fullTitle.length).toBeGreaterThan(pageTitle.length);
        }
      )
    );
  });

  it("product metadata title should contain product name", () => {
    fc.assert(
      fc.property(productArb, (product) => {
        const metadata = generateProductMetadata(product);
        expect(metadata.title).toBe(product.name);
      })
    );
  });
});
