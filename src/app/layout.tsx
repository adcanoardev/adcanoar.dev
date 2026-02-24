import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import AppShell from "@/components/layout/AppShell";

const sans = Outfit({
    subsets: ["latin"],
    variable: "--font-sans",
    weight: ["300", "400", "500", "600", "700"],
});

const mono = JetBrains_Mono({
    subsets: ["latin"],
    variable: "--font-mono",
});

export const metadata: Metadata = {
    title: "Adrián — Full Stack Developer | Systems Background",
    description:
        "Minimal one-page portfolio built with Next.js, TypeScript and Tailwind. Featured projects, case studies, experience and contact.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${sans.variable} ${mono.variable} antialiased`}>
                <AppShell>{children}</AppShell>
            </body>
        </html>
    );
}
