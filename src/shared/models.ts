export type TemplateInfo = {
  title: string
  lastEditedTime: number
}

export type TemplateContent = string

export type CreateTemplate = (
  content?: string,
  open?: 'file' | 'folder'
) => Promise<TemplateInfo['title'] | false>

export type ReadTemplates = () => Promise<TemplateInfo[]>

export type ReadTemplate = (title: TemplateInfo['title']) => Promise<TemplateContent>

export type UpdateTemplate = (
  title: TemplateInfo['title'],
  content: TemplateContent
) => Promise<void>

export type DeleteTemplate = (title: TemplateInfo['title']) => Promise<boolean>
