import { Button } from '@renderer/components/ui/button'
import { useTemplateStoreActions } from '@renderer/store/templateStore'
import { FileSignature } from 'lucide-react'

export function CreateTemplateButton() {
  const actions = useTemplateStoreActions()

  return (
    <Button variant="default" size="icon" onClick={() => actions.createTemplate()}>
      <FileSignature className="h-4 w-4" />
    </Button>
  )
}
