import Header from '@/app/components/header';
import Menu from '@/app/components/menu';
import Footer from '@/app/components/footer';
import Tv from '@/app/components/tv';
import { getVideosByDecade } from '@/app/api/mysql/videos';

export default async function Page(props: { params: Promise<{ decade: string }> }) {
    const params = await props.params;
    const decade = params.decade as "50s" | "60s" | "70s" | "80s" | "90s";
    const result = await getVideosByDecade(decade);
    const videos = Array.isArray(result) ? result : [];

    return (
        <main>
            <Header />
            <Menu />
            <Tv decade={decade} videos={videos} />
            <Footer />
        </main>
    );
}
