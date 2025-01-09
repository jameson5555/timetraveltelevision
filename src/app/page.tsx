import Header from '@/app/components/header';
import Menu from '@/app/components/menu';
import Footer from '@/app/components/footer';
import Starfield from 'react-starfield';

export default function Home() {
    return (
        <main>
            <Header />
            <Menu />
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
