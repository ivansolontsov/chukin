"use client";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { ConfigProvider } from "antd";
import locale from "antd/locale/ru_RU";
import dayjs from "dayjs";
import "dayjs/locale/ru";

dayjs.locale("ru");

interface AntdThemeProviderProps {
  children: React.ReactNode;
}

function AntdThemeProvider({ children }: AntdThemeProviderProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return <ConfigProvider locale={locale}>{children}</ConfigProvider>;
}

export default AntdThemeProvider;
