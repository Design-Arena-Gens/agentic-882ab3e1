import "./globals.css";
import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import ThemeToggle from "@/components/theme-toggle";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-cal",
  weight: "400",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Agentic Greeting",
  description: "An ambient, agentic experience that says hi in style."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${calistoga.variable}`}>
      <body className="bg-surface text-neutral antialiased">
        <ThemeToggle />
        {children}
      </body>
    </html>
  );
}
