import Tv from '@/app/components/tv';
import { getVideosByDecade } from '@/app/api/mysql/videos/route';

export default async function Home() {
    const result = await getVideosByDecade('70s');
    const videos = Array.isArray(result) ? result : [];

    return (
        <main>
            <Tv decade="70s" videos={videos} />
        </main>
    );
}
