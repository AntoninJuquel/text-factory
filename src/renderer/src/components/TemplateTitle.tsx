import { useSelectedTemplate } from '@renderer/store/templateStore'

export function TemplateTitle() {
  const { title } = useSelectedTemplate()

  return (
    <div className="flex justify-center select-none sticky top-0">
      <span className="dark:text-foreground font-semibold">{title}</span>
    </div>
  )
}
