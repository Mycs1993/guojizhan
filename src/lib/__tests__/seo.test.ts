import { describe, it, expect } from 'vitest';
import fc from 'fast-check';

// 测试辅助函数：验证 URL 格式
export function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

// 测试辅助函数：验证 ISO 日期格式
export function isValidISODate(dateString: string): boolean {
  const date = new Date(dateString);
  return !isNaN(date.getTime());
}

// 测试辅助函数：验证 Schema.org JSON-LD 基本结构
export function isValidSchemaOrg(schema: Record<string, unknown>): boolean {
  return (
    schema['@context'] === 'https://schema.org' &&
    typeof schema['@type'] === 'string'
  );
}

// Arbitrary 生成器：产品名称
export const productNameArb = fc.string({ minLength: 5, maxLength: 100 });

// Arbitrary 生成器：URL 路径
export const urlPathArb = fc.array(
  fc.string({ minLength: 1, maxLength: 20 }),
  { minLength: 1, maxLength: 5 }
).map(segments => '/' + segments.filter(s => s.length > 0).join('/'));

// Arbitrary 生成器：产品数据
export const productArb = fc.record({
  id: fc.string({ minLength: 3, maxLength: 30 }),
  name: productNameArb,
  description: fc.string({ minLength: 10, maxLength: 200 }),
  fullDescription: fc.string({ minLength: 20, maxLength: 500 }),
  image: fc.constant('/images/product.jpg'),
  icon: fc.constantFrom('Flame', 'Leaf', 'Factory', 'Zap', 'Thermometer'),
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
});

// Arbitrary 生成器：新闻文章
export const newsItemArb = fc.record({
  id: fc.string({ minLength: 3, maxLength: 30 }),
  title: fc.string({ minLength: 10, maxLength: 100 }),
  excerpt: fc.string({ minLength: 20, maxLength: 200 }),
  content: fc.string({ minLength: 50, maxLength: 1000 }),
  date: fc.date({ min: new Date('2020-01-01'), max: new Date() }).map(d => d.toISOString().split('T')[0]),
  image: fc.constant('/images/news.jpg'),
  category: fc.constantFrom('Company News', 'Industry News', 'Product Update'),
});

// 基础测试：验证辅助函数
describe('SEO Test Utilities', () => {
  it('isValidUrl should validate URLs correctly', () => {
    expect(isValidUrl('https://example.com')).toBe(true);
    expect(isValidUrl('https://example.com/path')).toBe(true);
    expect(isValidUrl('not-a-url')).toBe(false);
  });

  it('isValidISODate should validate dates correctly', () => {
    expect(isValidISODate('2024-01-15')).toBe(true);
    expect(isValidISODate('2024-01-15T10:30:00Z')).toBe(true);
    expect(isValidISODate('invalid-date')).toBe(false);
  });

  it('isValidSchemaOrg should validate schema structure', () => {
    expect(isValidSchemaOrg({ '@context': 'https://schema.org', '@type': 'Product' })).toBe(true);
    expect(isValidSchemaOrg({ '@context': 'wrong', '@type': 'Product' })).toBe(false);
    expect(isValidSchemaOrg({ '@context': 'https://schema.org' })).toBe(false);
  });
});
