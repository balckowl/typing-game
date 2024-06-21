import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

import SessionProvider from "./components/auth/SessionProvider";
import Footer from "./layout/footer/footer";
import Header from "./layout/header/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {default: "Tech Type", template: "%s|Tech Type"},
  description: "好きな技術でタイピング！文章が変わる新感覚ゲーム",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <SessionProvider>
        <body className={inter.className}>
          <Header/>
          <main>
            {children}
          </main>
          <Footer/>
        </body>
      </SessionProvider>
    </html>
  );
}
