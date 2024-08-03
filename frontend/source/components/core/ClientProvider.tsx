"use client";

import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import QueryConfig from "@/source/config/queryClientConfig";
import AntdThemeProvider from "@/source/components/core/AntdThemeProvider";

const queryClient = new QueryClient(QueryConfig);

export default function ClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryClientProvider client={queryClient}>
      <AntdThemeProvider>{children}</AntdThemeProvider>
    </QueryClientProvider>
  );
}
