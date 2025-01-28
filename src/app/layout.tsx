import type { Metadata } from "next";
import { Orbitron } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import "@/app/globals.css";
import Starfield from 'react-starfield';
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleAnalytics } from '@next/third-parties/google'

const orbitron = Orbitron({
    variable: "--font-orbitron",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Time Travel Television",
    description: "Take a trip back to the 20th century and catch glimpses of bygone days through the TV screen.",
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
                <SpeedInsights />
                <Analytics/>
                <GoogleAnalytics gaId="G-397TEXEMXF" />
            </body>
        </html>
    );
}
