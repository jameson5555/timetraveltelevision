import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from '@/app/components/header';
import Menu from '@/app/components/menu';
import Footer from '@/app/components/footer';
import BootstrapClient from '@/app/components/bootstrapClient';
import 'bootstrap/dist/css/bootstrap.css';
import "@/app/globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
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
            <body className={`${geistSans.variable} ${geistMono.variable}`}>
                <Header />
                <Menu />
                {children}
                <Footer />
                <BootstrapClient />
            </body>
        </html>
    );
}
