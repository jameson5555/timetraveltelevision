import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';

export async function POST(req: Request){
    const body = await req.json();
    const { decade, videoId, description } = body;

    try {
        const result = await sql`
            INSERT INTO videos (decade, video_id, description)
            VALUES (${decade}, ${videoId}, ${description})
        `;
        const results = result.rows;
        revalidatePath('/admin');
        return NextResponse.json({ success: true, results });
    } catch (error) {
        console.error('ERROR: API - ', (error as Error).message);
        return NextResponse.json({ success: false, error: (error as Error).message });
    }
}