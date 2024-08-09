import type { Metadata } from "next";
import "@/source/styles/globals.scss";
import Header from "@/source/components/header/header";
import Footer from "@/source/components/footer/footer";
import { TLocales } from "@/dictionaries";
import { Montserrat } from "next/font/google";
import ClientProvider from "@/source/components/core/ClientProvider";
import { ReactNode } from "react";
import { getDictionary, TLocales } from "@/dictionaries";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export async function generateStaticParams() {
  return [{ lang: "ru" }, { lang: "ua" }];
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: ReactNode;
  params: { lang: TLocales };
}>) {
  const dictionary = await getDictionary(params.lang);
  return (
    <html lang={params.lang}>
      <body className={montserrat.className}>
        <ClientProvider>
          <Header dictionary={dictionary} />
          {children}
          <Footer dictionary={dictionary} />
        </ClientProvider>
      </body>
    </html>
  );
}