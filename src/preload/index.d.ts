import {
  CreateTemplate,
  DeleteTemplate,
  ReadTemplate,
  ReadTemplates,
  UpdateTemplate
} from '@shared/models'

declare global {
  interface Window {
    // electron: ElectronAPI
    context: {
      local: string
      createTemplate: CreateTemplate
      readTemplates: ReadTemplates
      readTemplate: ReadTemplate
      updateTemplate: UpdateTemplate
      deleteTemplate: DeleteTemplate
    }
  }
}

export {}
