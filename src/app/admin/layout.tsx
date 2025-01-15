import { MetadataRoute } from 'next';
import { Niramit } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import "@/app/globals.css";

const niramit = Niramit({
    variable: "--font-niramit",
    subsets: ["latin"],
    weight: ["400", "700"],
});

export function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            disallow: '/' // Disallow all crawlers for this page
        }
    };
}

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className={`${niramit.className}`}>
            {children}
        </main>
    );
}
