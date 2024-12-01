'use client'

import { FcGoogle } from 'react-icons/fc'
import { toast } from 'sonner'
import * as React from 'react'

import { buttonVariants } from '@/shared/components/ui/button'
import { cn } from '@/shared/utils'

interface SignInWithGoogleProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'> {}

const SignInWithGoogle = ({ ...props }: SignInWithGoogleProps) => {
  const onClick = async () => {
    try {
      //
    } catch (e: unknown) {
      toast.error((e as Error)?.message)
    }
  }

  return (
    <button
      type="button"
      className={cn(buttonVariants({ variant: 'outline' }))}
      onClick={onClick}
      {...props}
    >
      <FcGoogle className="size-[18px]" />
      <span className="w-full">구글 로그인</span>
    </button>
  )
}

export { SignInWithGoogle, type SignInWithGoogleProps }
