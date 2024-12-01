'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ReactNode, useState } from 'react'

import { queryConfig } from '@/shared/lib/react-query'

type AppProviderProps = {
  children: ReactNode
}

function TanstackProvider({ children }: AppProviderProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: queryConfig,
      }),
  )

  return (
    <QueryClientProvider client={queryClient}>
      {process.env.DEV && <ReactQueryDevtools />}
      {children}
    </QueryClientProvider>
  )
}

export { TanstackProvider }
