import { Button } from '@renderer/components/ui/button'
import { useFormVariables } from '@renderer/store/formStore'
import { useSelectedTemplate } from '@renderer/store/templateStore'
import { templateFiller } from '@renderer/utils/templateFiller'

import { Download } from 'lucide-react'

export function ExportFormButton() {
  const { content } = useSelectedTemplate()
  const formVariables = useFormVariables()

  function exportForm() {
    const text = templateFiller(formVariables, content)
    window.context.createTemplate(text, 'folder')
  }
  return (
    <Button variant="default" size="icon" onClick={exportForm} disabled={!content}>
      <Download className="h-4 w-4" />
    </Button>
  )
}
