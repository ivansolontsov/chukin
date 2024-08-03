import { type QueryClientConfig } from "@tanstack/react-query";

export const QueryConfig: QueryClientConfig = {
  defaultOptions: { queries: { retry: 2 } },
};
export default QueryConfig;
