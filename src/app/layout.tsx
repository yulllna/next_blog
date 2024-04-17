import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Roboto, Noto_Sans_KR } from "next/font/google";

import "./globals.css";
import Link from 'next/link'

const inter = Inter({ subsets: ["latin"] });
const notoSansKr = Noto_Sans_KR({
  // preload: true, 기본값
  subsets: ["latin"], // 또는 preload: false
  weight: ["100", "400", "700", "900"], // 가변 폰트가 아닌 경우, 사용할 fontWeight 배열
});

// const roboto = Roboto({
//   subsets: ["latin"], // preload에 사용할 subsets입니다.
//   weight: ["100", "400", "700"],
//   variable: "--roboto", // CSS 변수 방식으로 스타일을 지정할 경우에 사용합니다.
// });

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
    <html lang="en" className={notoSansKr.className}>
      <body className='flex flex-col w-full max-w-screen-2xl mx-auto'>
        <header className="py-2 px-4 flex justify-between align-center">
          <p className="font-bold text-2xl text-slate-800"><Link href='/'>Yuri's Blog✨</Link></p>
          <nav className="gap-x-3 flex text-slate-800">
            <Link href='/'>home</Link>
            <Link href='/about'>about</Link>
            <Link href='/posts'>posts</Link>
            <Link href='/contact'>contact</Link>
          </nav>
        </header>
        <main className='grow'>{children}</main>
        <div className="bg-blue-950 text-white text-xs text-center">© 2024 yuri. All Right Reserved.</div>
      </body>
    </html>
  );
}
