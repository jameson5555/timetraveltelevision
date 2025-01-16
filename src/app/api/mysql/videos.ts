import { sql } from '@vercel/postgres';
import type { DecadeListItem } from '@/app/lib/definitions';

export async function getVideosByDecade(decade: string) {
    try {
        const videos = await sql<DecadeListItem>`SELECT * FROM videos WHERE decade=${decade}`;
        return videos.rows;
    } catch (error) {
        console.error('Failed to fetch videos:', error);
        throw new Error('Failed to fetch videos.');
    }
}
