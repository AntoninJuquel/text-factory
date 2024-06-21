import { useFormStoreActions, useFormVariables } from '@renderer/store/formStore'
import { useSelectedTemplate } from '@renderer/store/templateStore'
import { templateParser } from '@renderer/utils/templateParser'
import { useEffect } from 'react'
import { Input } from './ui/input'
import { Label } from './ui/label'

export function TemplateForm() {
  const { content } = useSelectedTemplate()

  const formVariables = useFormVariables()
  const { setFormVariables, setFormVariable } = useFormStoreActions()

  useEffect(() => {
    const variables = templateParser(content)
    setFormVariables(variables)
  }, [content])

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFormVariable(e.target.id, e.target.value)
  }

  return (
    <ul className="h-full space-y-2 overflow-y-auto">
      {Object.entries(formVariables).map(([variable, value]) => (
        <li key={variable} className="grid w-full items-center gap-1.5 p-2">
          <Label htmlFor={variable}>{variable}</Label>
          <Input id={variable} placeholder={variable} value={value} onChange={handleChange} />
        </li>
      ))}
    </ul>
  )
}
