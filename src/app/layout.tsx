import type { Metadata } from "next";
import { Orbitron } from "next/font/google";
import Header from '@/app/components/header';
import Menu from '@/app/components/menu';
import Footer from '@/app/components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import "@/app/globals.css";

const orbitron = Orbitron({
    variable: "--font-orbitron",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Time Travel Television",
    description: "Catch glimpses of the past through the television screen.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${orbitron.className}`}>
                <Header />
                <Menu />
                {children}
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
            </body>
        </html>
    );
}
