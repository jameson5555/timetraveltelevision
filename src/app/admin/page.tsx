import globalConfig from '@/app/app.config';
import DecadesList from '@/app/components/admin/decades-list';
import { getVideosByDecade } from '@/app/api/mysql/videos/route';
import { DecadeListItem, Video } from '@/app/lib/definitions';

const decades = globalConfig.decades;

const fetchDecadesData = async (): Promise<DecadeListItem[]> => {
    const decadesData: DecadeListItem[] = [];
    for (const decade of decades) {
        const result = await getVideosByDecade(decade);
        const videos: Video[] = Array.isArray(result) ? result.map((item: any) => ({
            decade: item.decade,
            description: item.description,
            id: item.id
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
        <main>
            <DecadesList decades={decades} />
        </main>
    );
}
