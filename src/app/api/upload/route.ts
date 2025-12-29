import { getStorage } from '@/lib/storage';
import { getSession } from '@/lib/auth';
import { NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';

export async function POST(request: Request) {
    const session = await getSession();
    if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    try {
        const formData = await request.formData();
        const file = formData.get('file') as File;
        if (!file) {
            return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
        }

        const storage = getStorage();
        const extension = file.name.split('.').pop();
        const filename = `${uuidv4()}.${extension}`;

        const url = await storage.upload(filename, file);
        return NextResponse.json({ url });
    } catch (e) {
        return NextResponse.json({ error: 'Upload failed' }, { status: 500 });
    }
}
