# AI生成图片指南

## 方法一：使用脚本自动生成（推荐）

### 1. 使用 OpenAI DALL-E

```bash
# 设置API Key
export OPENAI_API_KEY="your-api-key-here"

# 运行脚本
python scripts/generate_facility_images.py
# 选择选项 1
```

**优点：**
- 图片质量高
- 完全符合提示词要求
- 可以精确控制风格

**缺点：**
- 需要付费API（约 $0.04/张）
- 需要注册OpenAI账号

### 2. 使用 Stability AI

```bash
# 设置API Key
export STABILITY_API_KEY="your-api-key-here"

# 运行脚本
python scripts/generate_facility_images.py
# 选择选项 2
```

**优点：**
- 图片质量好
- 价格相对便宜

**缺点：**
- 需要注册账号
- 需要API key

### 3. 从 Unsplash 下载（免费）

```bash
python scripts/generate_facility_images.py
# 选择选项 3
```

**优点：**
- 完全免费
- 无需API key
- 真实照片

**缺点：**
- 图片可能不完全匹配需求
- 需要筛选合适的图片

## 方法二：手动生成（最佳质量）

### 推荐工具

1. **Midjourney** (https://www.midjourney.com/)
   - 图片质量最高
   - 需要Discord账号
   - 付费订阅

2. **DALL-E 3** (https://openai.com/dall-e-3)
   - 通过ChatGPT Plus使用
   - 质量很好
   - 易于使用

3. **Leonardo.ai** (https://leonardo.ai/)
   - 免费额度
   - 质量不错
   - 易于使用

4. **Stable Diffusion** (https://stablediffusionweb.com/)
   - 免费使用
   - 可本地运行
   - 需要一定技术基础

### 提示词（Prompt）

#### 1. 生产车间
```
Modern industrial boiler production workshop with automated welding equipment, CNC machining centers, and precision assembly stations. Clean, professional, well-lit factory floor. Industrial photography style, 16:9 aspect ratio, high quality.
```

#### 2. 质量检测实验室
```
Professional quality testing laboratory with hydraulic pressure testing equipment, ultrasonic testing machines, and material analysis instruments. Modern, clean, scientific environment. Professional photography, 16:9 aspect ratio.
```

#### 3. 研发中心
```
State-of-the-art research and development center with CAD/CAM workstations, thermal efficiency testing equipment, and engineering team working. Modern office and lab environment. Professional corporate photography, 16:9 aspect ratio.
```

#### 4. 材料仓储
```
Organized industrial material storage warehouse with steel materials, organized shelves, quality control tags. Clean, well-organized, professional storage facility. Industrial photography, 16:9 aspect ratio.
```

#### 5. 装配区域
```
Spacious industrial assembly area for large-scale boiler assembly with overhead cranes, professional assembly tools, and workers. Modern factory floor. Professional industrial photography, 16:9 aspect ratio.
```

#### 6. 质量控制
```
Quality control inspection area with multi-stage inspection points, testing equipment, and quality assurance professionals. Clean, professional, modern quality control facility. Corporate photography style, 16:9 aspect ratio.
```

### 图片要求

- **尺寸**: 1600x900 像素 (16:9 比例)
- **格式**: JPG 或 PNG
- **文件大小**: < 2MB
- **风格**: 专业、现代、工业风格
- **保存位置**: `public/images/facilities/`

### 文件命名

- `production-workshop.jpg`
- `quality-testing-lab.jpg`
- `rd-center.jpg`
- `material-storage.jpg`
- `assembly-area.jpg`
- `quality-control.jpg`

## 方法三：使用真实照片（最推荐）

如果有真实的工厂照片，这是最佳选择：

1. 拍摄或收集工厂照片
2. 使用图片编辑软件调整尺寸为 1600x900
3. 优化文件大小
4. 保存到 `public/images/facilities/`

**优点：**
- 真实可信
- 展示实际设施
- 增强客户信任

## 更新网站显示图片

生成图片后，需要更新代码以显示图片：

```typescript
// 在 about/page.tsx 中
<img 
  src="/images/facilities/production-workshop.jpg" 
  alt="Production Workshop"
  className="w-full h-full object-cover"
/>
```

## 免费图片资源

如果不想使用AI生成，可以使用以下免费资源：

1. **Unsplash** (https://unsplash.com/)
   - 搜索关键词: "factory", "industrial", "manufacturing"
   - 免费商用

2. **Pexels** (https://www.pexels.com/)
   - 搜索关键词: "industrial", "factory", "workshop"
   - 免费商用

3. **Pixabay** (https://pixabay.com/)
   - 搜索关键词: "factory", "industrial"
   - 免费商用

## 注意事项

1. **版权**: 确保使用的图片有商用授权
2. **质量**: 图片要清晰，避免模糊
3. **一致性**: 保持图片风格统一
4. **优化**: 压缩图片以提高加载速度
5. **备用方案**: 如果图片加载失败，保留图标作为备用

