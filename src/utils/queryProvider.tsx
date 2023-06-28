"use client"

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {PropsWithChildren, useState} from "react"

export const QueryProviders = ({ children }: PropsWithChildren) => {
    const [client] = useState(
      new QueryClient()
    );
  
    return (
      <QueryClientProvider client={client}>
        {children}
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    );
}