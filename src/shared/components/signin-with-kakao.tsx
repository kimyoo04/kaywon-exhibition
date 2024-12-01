'use client'

import { toast } from 'sonner'
import * as React from 'react'

import { cn } from '@/shared/utils'

import { buttonVariants } from './ui/button'

const KakaoIcon = () => (
  <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_122_60)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.00002 1.09998C4.02917 1.09998 0 4.21293 0 8.05226C0 10.44 1.5584 12.5449 3.93152 13.7969L2.93303 17.4445C2.84481 17.7668 3.21341 18.0237 3.49646 17.8369L7.87334 14.9482C8.2427 14.9838 8.61808 15.0046 9.00002 15.0046C13.9705 15.0046 17.9999 11.8918 17.9999 8.05226C17.9999 4.21293 13.9705 1.09998 9.00002 1.09998Z"
        fill="black"
      />
    </g>
    <defs>
      <clipPath id="clip0_122_60">
        <rect width="17.9999" height="18" fill="white" transform="translate(0 0.5)" />
      </clipPath>
    </defs>
  </svg>
)

interface SignInWithKakaoProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'> {}

const SignInWithKakao = ({ ...props }: SignInWithKakaoProps) => {
  const onClick = async () => {
    try {
      //
    } catch (e: unknown) {
      toast.error((e as Error)?.message)
    }
  }

  return (
    <button
      className={cn(
        buttonVariants({ variant: 'outline' }),
        'relative flex bg-[#FEE500] text-black hover:bg-[#FEE500]/80',
      )}
      onClick={onClick}
      {...props}
    >
      <KakaoIcon />
      <span className="w-full">카카오 로그인</span>
    </button>
  )
}

export { SignInWithKakao, type SignInWithKakaoProps }
