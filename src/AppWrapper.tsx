import { PropsWithChildren } from "react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ThemeWrapper } from "./providers/ThemeProvider"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // We don't want to drain our tokens
      refetchOnMount: false,
      retry: false,
      // Each request is different so no caching is needed
      cacheTime: 0,
    },
  },
})

export const AppWrapper = ({ children }: PropsWithChildren) => (
  <ThemeWrapper>
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  </ThemeWrapper>
)
