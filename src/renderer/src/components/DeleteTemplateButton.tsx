import { Button } from '@renderer/components/ui/button'
import { useSelectedTemplate, useTemplateStoreActions } from '@renderer/store/templateStore'
import { Trash2 } from 'lucide-react'

export function DeleteTemplateButton() {
  const actions = useTemplateStoreActions()
  const seletedTemplate = useSelectedTemplate()

  return (
    <Button
      variant="destructive"
      size="icon"
      onClick={() => actions.deleteTemplate(seletedTemplate.title)}
      disabled={!seletedTemplate.title}
    >
      <Trash2 className="h-4 w-4" />
    </Button>
  )
}
