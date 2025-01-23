import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';

export async function DELETE(req: Request){
    const body = await req.json();
    const { videoId } = body;

    try {
        const result = await sql`
            DELETE FROM videos WHERE video_id=${videoId}
        `;
        const results = result.rows;
        revalidatePath('/admin');
        return NextResponse.json({ success: true, results });
    } catch (error) {
        console.error('ERROR: API - ', (error as Error).message);
        return NextResponse.json({ success: false, error: (error as Error).message });
    }
}