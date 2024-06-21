import { Button } from '@renderer/components/ui/button'
import { useFormVariables } from '@renderer/store/formStore'
import { useSelectedTemplate } from '@renderer/store/templateStore'
import { templateFiller } from '@renderer/utils/templateFiller'

import { Copy } from 'lucide-react'

export function CopyFormButton() {
  const { content } = useSelectedTemplate()
  const formVariables = useFormVariables()

  function copyForm() {
    const text = templateFiller(formVariables, content)
    navigator.clipboard.writeText(text)
  }

  return (
    <Button variant="outline" size="icon" onClick={copyForm} disabled={!content}>
      <Copy className="h-4 w-4" />
    </Button>
  )
}
