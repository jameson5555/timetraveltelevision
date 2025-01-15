import mysql from 'mysql2/promise';
import { GetDBSettings } from '@/shared/common';

const connectionParams = GetDBSettings();

export async function getVideosByDecade(decade: string) {
    try {
        const connection = await mysql.createConnection(connectionParams);
        const get_exp_query = 'SELECT * FROM ttt_videos.video_ids WHERE decade = "' + decade + '"';
        const [results] = await connection.execute(get_exp_query);

        connection.end();

        return results
    } catch (err) {
        console.error('ERROR: API - ', (err as Error).message)
    }
}
