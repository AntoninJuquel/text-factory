import { Button } from '@renderer/components/ui/button'
import { useTemplateStoreActions } from '@renderer/store/templateStore'

import { RotateCw } from 'lucide-react'

export function RefreshTemplatesButton() {
  const { readTemplates } = useTemplateStoreActions()
  return (
    <Button variant="outline" size="icon" onClick={readTemplates}>
      <RotateCw className="h-4 w-4" />
    </Button>
  )
}
