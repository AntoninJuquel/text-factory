import {
  useSelectedTemplate,
  useTemplates,
  useTemplateStoreActions
} from '@renderer/store/templateStore'
import { ComponentProps } from 'react'
import { TemplatePreview } from './TemplatePreview'

export type NotePreviewListProps = ComponentProps<'ul'> & {
  onSelect?: () => void
}

export function TemplatePreviewList({ onSelect, ...props }: NotePreviewListProps) {
  const templates = useTemplates()
  const { title } = useSelectedTemplate()
  const actions = useTemplateStoreActions()

  if (templates.length === 0)
    return (
      <div className="flex items-center justify-center h-32 text-gray-500">No templates found</div>
    )

  return (
    <ul className="mt-3 space-y-1 overflow-y-auto" {...props}>
      {templates.map((template) => (
        <TemplatePreview
          key={template.title}
          isActive={template.title === title}
          onClick={() => {
            actions.readTemplate(template.title)
            onSelect?.()
          }}
          {...template}
        />
      ))}
    </ul>
  )
}
