'use client';

import Header from '@/app/components/header';
import Menu from '@/app/components/menu';
import Footer from '@/app/components/footer';
import Image from 'next/image';

export default function NotFound() {
    return (
        <main>
            <Header />
            <Menu />
            <section className="position-absolute top-50 start-50 translate-middle mw-100">
                <Image
                    src={`/404/timeloop${Math.floor(Math.random() * 3) + 1}.gif`}
                    alt="404"
                    width={500} // Replace with the actual width of the image
                    height={300} // Replace with the actual height of the image
                    className="mw-100 h-auto"
                />
            </section>
            <Footer />
        </main>
    );
}