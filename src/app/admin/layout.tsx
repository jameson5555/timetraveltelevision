import type { Metadata } from "next";
import { Niramit } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import "@/app/globals.css";
// import { FaMaximize } from "react-icons/fa6"; // insert icons like this
// browse icons here: https://react-icons.github.io/react-icons/
// todo: learn https://www.remotion.dev/

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
        <main className={`${niramit.className}`}>
            {children}
        </main>
    );
}
