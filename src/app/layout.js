// This is the root layout component for your Next.js app.
// Learn more: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required

import { Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-rubik",
});

export default function Layout({ children }) {
    return (
        <html lang="en">
            <body className={rubik.variable}>{children}</body>
        </html>
    );
}
