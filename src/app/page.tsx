import Header from '@/app/components/header';
import Menu from '@/app/components/menu';
import Footer from '@/app/components/footer';

export default function Home() {
    return (
        <main>
            <Header />
            <Menu />
            <section className="home-container">
                <h2 className="home-message">Choose a Decade</h2>
            </section>
            <Footer />
        </main>
    );
}
