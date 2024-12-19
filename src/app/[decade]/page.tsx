import Tv from '@/app/components/tv';
import { getVideosByDecade } from '@/app/api/mysql/videos/route';

export default async function Page(props: { params: Promise<{ decade: string }> }) {
    const params = await props.params;
    const decade = params.decade;
    const result = await getVideosByDecade(decade);
    const videos = Array.isArray(result) ? result : [];

    return (
        <main>
            <Tv decade={decade} videos={videos} />
        </main>
    );
}
