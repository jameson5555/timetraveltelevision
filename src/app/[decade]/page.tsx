import Header from '@/app/components/header';
import Menu from '@/app/components/menu';
import Footer from '@/app/components/footer';
import Tv from '@/app/components/tv';
import { getVideosByDecade } from '@/app/api/mysql/videos/route';
import Starfield from 'react-starfield';

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
            <Starfield
                starCount={2000}
                starColor={[255, 255, 255]}
                speedFactor={0.03}
                backgroundColor="black"
            />
            <div className='time-vortex'>
                <div className='spiral spiral1'></div>
                <div className='spiral spiral2'></div>
                <div className='spiral spiral3'></div>
                <div className='spiral spiral4'></div>
                <div className='spiral spiral5'></div>
                <div className='spiral spiral6'></div>
                <div className='spiral spiral7'></div>
                <div className='spiral spiral8'></div>
            </div>
            <Footer />
        </main>
    );
}
