import { StorageAdapter } from './types';
import { LocalAdapter } from './adapters/local';
// Future: VercelBlobAdapter

export function getStorage(): StorageAdapter {
    const provider = process.env.STORAGE_PROVIDER || 'local';

    if (provider === 'local') {
        return new LocalAdapter();
    }

    // Default fallback
    return new LocalAdapter();
}
