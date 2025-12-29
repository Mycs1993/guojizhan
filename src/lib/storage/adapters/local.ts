import { StorageAdapter } from '../types';
import path from 'path';
import fs from 'fs/promises';
import { existsSync } from 'fs';

// Data stored in src/data/articles relative to project root
const DATA_DIR = path.join(process.cwd(), 'src', 'data', 'articles');
// Public uploads in public/uploads
const PUBLIC_UPLOAD_DIR = path.join(process.cwd(), 'public', 'uploads');

export class LocalAdapter implements StorageAdapter {
    constructor() {
        this.ensureDirs();
    }

    private async ensureDirs() {
        if (!existsSync(DATA_DIR)) {
            await fs.mkdir(DATA_DIR, { recursive: true });
        }
        if (!existsSync(PUBLIC_UPLOAD_DIR)) {
            await fs.mkdir(PUBLIC_UPLOAD_DIR, { recursive: true });
        }
    }

    async put(key: string, data: string | Buffer): Promise<string> {
        await this.ensureDirs();
        const filePath = path.join(DATA_DIR, key);
        await fs.mkdir(path.dirname(filePath), { recursive: true });
        await fs.writeFile(filePath, data);
        return key;
    }

    async get<T>(key: string): Promise<T | null> {
        const filePath = path.join(DATA_DIR, key);
        if (!existsSync(filePath)) return null;
        try {
            const content = await fs.readFile(filePath, 'utf-8');
            return JSON.parse(content) as T;
        } catch {
            return null;
        }
    }

    async del(key: string): Promise<void> {
        const filePath = path.join(DATA_DIR, key);
        if (existsSync(filePath)) {
            await fs.unlink(filePath);
        }
    }

    async upload(filename: string, data: File | Blob | Buffer): Promise<string> {
        await this.ensureDirs();
        const filePath = path.join(PUBLIC_UPLOAD_DIR, filename);

        let buffer: Buffer;
        if (data instanceof File || data instanceof Blob) {
            const arrayBuffer = await data.arrayBuffer();
            buffer = Buffer.from(arrayBuffer);
        } else {
            buffer = data;
        }

        await fs.writeFile(filePath, buffer);
        return `/uploads/${filename}`;
    }
}
