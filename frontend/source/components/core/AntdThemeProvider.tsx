"use client";
import React, { useEffect, useState } from "react";
import { ConfigProvider } from "antd";
import ru from "antd/locale/ru_RU";
import ua from "antd/locale/uk_UA";
import { useParams } from "next/navigation";
import { TLocales } from "@/dictionaries";
import { Locale } from "antd/lib/locale";

const antdLocales: Record<TLocales, Locale> = {
  ru: ru,
  ua: ua,
};

interface AntdThemeProviderProps {
  children: React.ReactNode;
}

function AntdThemeProvider({ children }: AntdThemeProviderProps) {
  const { lang } = useParams<{ lang: TLocales }>();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return <ConfigProvider locale={antdLocales[lang]}>{children}</ConfigProvider>;
}

export default AntdThemeProvider;
