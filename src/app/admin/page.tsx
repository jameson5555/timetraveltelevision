import globalConfig from '@/app/app.config';
import DecadesList from '@/app/components/admin/decades-list';
import { getVideosByDecade } from '@/app/api/mysql/videos';
import { DecadeListItem, Video } from '@/app/lib/definitions';

const decades = globalConfig.decades;

const fetchDecadesData = async (): Promise<DecadeListItem[]> => {
    const decadesData: DecadeListItem[] = [];
    for (const decade of decades) {
        const result = await getVideosByDecade(decade);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const videos: Video[] = Array.isArray(result) ? result.map((item: any) => ({
            decade: item.decade,
            description: item.description,
            video_id: item.video_id
        })) : [];
        decadesData.push({
            decade,
            videos
        });
    }
    return decadesData;
};

export default async function AdminPage() {
    const [decades] = await Promise.all([
        fetchDecadesData(),
    ]);
    return (
        <div className="p-4">
            <DecadesList decades={decades} />
        </div>
    );
}
