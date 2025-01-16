import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function POST(req: Request){
    const body = await req.json();
    const { decade, videoId, description } = body;

    try {
        const result = await sql`
            INSERT INTO videos (decade, video_id, description)
            VALUES (${decade}, ${videoId}, ${description})
        `;
        const results = result.rows;
        return NextResponse.json({ success: true, results });
    } catch (error) {
        console.error('ERROR: API - ', (error as Error).message);
        return NextResponse.json({ success: false, error: (error as Error).message });
    }
}