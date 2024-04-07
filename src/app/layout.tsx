import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Noto_Sans } from "next/font/google";

import "./globals.css";
import Link from 'next/link'

const inter = Inter({ subsets: ["latin"] });
const sans = Noto_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "유리의 블로그",
  description: "유리의 개발 공부 블로그입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={sans.className}>
        <header className="py-2 px-4 flex justify-between align-center">
          <p className="font-bold text-2xl text-slate-800"><Link href='/'>Yuri's Blog✨</Link></p>
          <nav className="gap-x-3 flex text-slate-800">
            <Link href='/home'>home</Link>
            <Link href='/about'>about</Link>
            <Link href='/posts'>posts</Link>
            <Link href='/contact'>contact</Link>
          </nav>
        </header>
        <main>{children}</main>
        <footer>© 2024 yuri. All Right Reserved.</footer>
      </body>
    </html>
  );
}
