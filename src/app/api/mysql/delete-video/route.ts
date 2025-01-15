import { NextResponse } from 'next/server';
import mysql from 'mysql2/promise';
import { GetDBSettings } from '@/shared/common';

const connectionParams = GetDBSettings();

export async function DELETE(req: Request){
    const body = await req.json();
    const { videoId } = body;

    try {
        const connection = await mysql.createConnection(connectionParams);
        const delete_query = 'DELETE FROM ttt_videos.video_ids WHERE id = ?';
        const [results] = await connection.execute(delete_query, [videoId]);

        connection.end();

        return NextResponse.json({ success: true, results });
    } catch (err) {
        console.error('ERROR: API - ', (err as Error).message);
        return NextResponse.json({ success: false, error: (err as Error).message });
    }
}