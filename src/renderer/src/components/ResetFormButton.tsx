import { Button } from '@renderer/components/ui/button'
import { useFormStoreActions } from '@renderer/store/formStore'

import { RotateCcw } from 'lucide-react'

export function ResetFormButton() {
  const { resetFormVariables } = useFormStoreActions()
  return (
    <Button variant="destructive" size="icon" onClick={resetFormVariables}>
      <RotateCcw className="h-4 w-4" />
    </Button>
  )
}
