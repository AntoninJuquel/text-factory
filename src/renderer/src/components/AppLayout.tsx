import { ResizablePanel, ResizablePanelGroup } from '@renderer/components/ui/resizable'
import { cn } from '@renderer/utils/cn'
import { ComponentProps, forwardRef } from 'react'

export const RootLayout = ({
  className,
  children,
  ...props
}: ComponentProps<typeof ResizablePanelGroup>) => {
  return (
    <ResizablePanelGroup style={{ height: '100vh' }} {...props}>
      {children}
    </ResizablePanelGroup>
  )
}

export const Sidebar = ({
  className,
  children,
  ...props
}: ComponentProps<typeof ResizablePanel>) => {
  return (
    <ResizablePanel {...props}>
      <aside className={cn('flex flex-col h-full', className)}>{children}</aside>
    </ResizablePanel>
  )
}

export const Content = forwardRef<HTMLDivElement, ComponentProps<typeof ResizablePanel>>(
  ({ className, children, ...props }, ref) => {
    return (
      <ResizablePanel {...props}>
        <main ref={ref} className={cn('flex h-full', className)}>
          {children}
        </main>
      </ResizablePanel>
    )
  }
)
Content.displayName = 'Content'
