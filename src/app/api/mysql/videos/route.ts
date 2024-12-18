import mysql from 'mysql2/promise';
import { NextResponse, NextRequest } from 'next/server';
import { GetDBSettings, IDBSettings } from '@/shared/common';

let connectionParams = GetDBSettings();

export async function GET(request: NextRequest) {
    let decade = '';

    try {
        decade = request.nextUrl!.searchParams!.get('decade')!;
        console.log('decade: ', decade);

        const connection = await mysql.createConnection(connectionParams);
        const get_exp_query = 'SELECT * FROM ttt_videos.video_ids WHERE decade = "' + decade + '"';
        const [results] = await connection.execute(get_exp_query)

        connection.end()

        return NextResponse.json(results)
    } catch (err) {
        console.log('ERROR: API - ', (err as Error).message)

        const response = {
            error: (err as Error).message,
            returnedStatus: 200,
        }

        return NextResponse.json(response, { status: 200 })
    }
}