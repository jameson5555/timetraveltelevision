import type { Metadata } from "next";
import { Niramit } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import "@/app/globals.css";

const niramit = Niramit({
    variable: "--font-niramit",
    subsets: ["latin"],
    weight: ["400", "700"],
});

export const metadata: Metadata = {
    title: "Time Travel Television",
    description: "Catch glimpses of the past through the television screen.",
};

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className={`${niramit.className} d-flex align-items-center justify-content-center vh-100`}>
            {children}
        </main>
    );
}
