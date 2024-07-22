import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "@/source/styles/globals.scss";
import Header from "@/source/components/header";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ua">
      <body className={montserrat.className}>
        <Header />
        {children}
        <footer>тут футер</footer>
      </body>
    </html>
  );
}
