import mixpanel from 'mixpanel-browser'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { pageview } from '@/shared/lib/gtag'
import { isProd } from '@/shared/utils/common'

function usePageTrack() {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      if (!isProd(process.env.NODE_ENV)) return

      pageview(url)
      mixpanel.track('Page view', { label: url, category: process.env.WEB_VERSION })
    }

    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
}

export function PageViewTracker() {
  usePageTrack()

  return null
}
