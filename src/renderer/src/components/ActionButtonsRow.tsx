import { cn } from '@renderer/utils/cn'
import { ComponentProps } from 'react'

export function ActionButtonsRow({ className, children, ...props }: ComponentProps<'div'>) {
  return (
    <div className={cn('flex justify-between', className)} {...props}>
      {children}
    </div>
  )
}
