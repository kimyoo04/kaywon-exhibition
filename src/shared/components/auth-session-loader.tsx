import { useSession } from 'next-auth/react'
import { useLayoutEffect, type ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function AuthSessionLoader({ children }: Props) {
  const { data, status } = useSession()

  useLayoutEffect(() => {
    if (status !== 'authenticated') return

    // zustand auth store 에 저장
  }, [data, status])

  return <>{children}</>
}
