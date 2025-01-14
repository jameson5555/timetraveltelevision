import { NextResponse } from 'next/server';
import mysql from 'mysql2/promise';
import { GetDBSettings } from '@/shared/common';

let connectionParams = GetDBSettings();

export async function POST(req: Request){
    const body = await req.json();
    const { decade, videoId, description } = body;

    try {
        const connection = await mysql.createConnection(connectionParams);
        const insert_query = `INSERT INTO ttt_videos.video_ids (decade, id, description) VALUES (?, ?, ?)`;
        const [results] = await connection.execute(insert_query, [decade, videoId, description]);

        connection.end();

        return NextResponse.json({ success: true, results });
    } catch (err) {
        console.error('ERROR: API - ', (err as Error).message);
        return NextResponse.json({ success: false, error: (err as Error).message });
    }
}