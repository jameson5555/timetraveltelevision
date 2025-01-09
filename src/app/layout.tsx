import type { Metadata } from "next";
import { Orbitron } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import "@/app/globals.css";
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
        <html lang="en">
            <body className={`${orbitron.className}`}>
                {children}
            </body>
        </html>
    );
}
