import type { Metadata } from "next";
import { Orbitron } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import "@/app/globals.css";
import Starfield from 'react-starfield';
// import { FaMaximize } from "react-icons/fa6"; // insert icons like this
// browse icons here: https://react-icons.github.io/react-icons/
// todo: learn https://www.remotion.dev/

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
        <html lang="en" data-bs-theme="dark">
            <body className={`${orbitron.className}`}>
                {children}
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
            </body>
        </html>
    );
}
