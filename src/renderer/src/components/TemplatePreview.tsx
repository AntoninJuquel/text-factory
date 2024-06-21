import { cn } from '@renderer/utils/cn'
import { formatDate } from '@renderer/utils/dateFormater'
import { TemplateInfo } from '@shared/models'
import { ComponentProps } from 'react'

export type TemplateProps = TemplateInfo & {
  isActive?: boolean
} & ComponentProps<'li'>

export function TemplatePreview({
  title,
  lastEditedTime: lastEditeTime,
  isActive = false,
  className,
  ...props
}: TemplateProps) {
  return (
    <li
      className={cn(
        'items-center cursor-pointer rounded-md px-2.5 py-3 transition-colors duration-75',
        {
          'bg-zinc-400/75': isActive,
          'hover:bg-zinc-500/75': !isActive
        },
        className
      )}
      {...props}
    >
      <h3 className="mb-1 font-bold truncate">{title}</h3>
      <span className="inline-block w-full mb-2 text-xs font-light text-left">
        {formatDate(new Date(lastEditeTime))}
      </span>
    </li>
  )
}
