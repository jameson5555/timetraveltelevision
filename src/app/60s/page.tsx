import Tv from '@/app/components/tv';
import { getVideosByDecade } from '@/app/api/mysql/videos/route';

export default async function Home() {
    const result = await getVideosByDecade('60s');
    const videos = Array.isArray(result) ? result : [];

    return (
        <main>
            <Tv decade="60s" videos={videos} />
        </main>
    );
}
