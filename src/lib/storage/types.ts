export interface StorageAdapter {
    /**
     * Put data specifically for an article or an index file.
     * key should be a relative path like "articles.json" or "slug.json"
     */
    put(key: string, data: string | Buffer): Promise<string>;

    /**
     * Get data. Returns null if not found.
     */
    get<T>(key: string): Promise<T | null>;

    /**
     * Delete data.
     */
    del(key: string): Promise<void>;

    /**
     * Upload an arbitrary file (image, etc).
     * returns the public URL.
     */
    upload(filename: string, data: File | Blob | Buffer): Promise<string>;
}
