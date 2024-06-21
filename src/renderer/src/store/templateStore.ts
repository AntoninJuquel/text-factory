import { logger } from '@shared/logger'
import {
  CreateTemplate,
  DeleteTemplate,
  ReadTemplate,
  ReadTemplates,
  TemplateContent,
  TemplateInfo,
  UpdateTemplate
} from '@shared/models'
import { create } from 'zustand'

interface TemplateStoreState {
  templates: TemplateInfo[]
  selectedTemplate: {
    index: number
    title: string
    content: TemplateContent
  }
}

interface TemplateStoreActions {
  createTemplate: CreateTemplate
  readTemplates: ReadTemplates
  readTemplate: ReadTemplate
  updateTemplate: UpdateTemplate
  deleteTemplate: DeleteTemplate
}

interface TemplateStore extends TemplateStoreState {
  actions: TemplateStoreActions
}

const useTemplateStore = create<TemplateStore>((set, get) => ({
  templates: [],
  selectedTemplate: {
    index: -1,
    title: '',
    content: ''
  },
  actions: {
    createTemplate: async () => {
      const title = await window.context.createTemplate()
      if (!title) {
        return ''
      }
      set((state) => ({
        templates: [{ title, lastEditedTime: Date.now() }, ...state.templates]
      }))

      await get().actions.readTemplate(title)

      return title
    },
    readTemplates: async () => {
      const templates = await window.context.readTemplates()
      set(() => ({ templates: templates.sort((a, b) => b.lastEditedTime - a.lastEditedTime) }))
      return templates
    },
    readTemplate: async (title) => {
      try {
        const content = await window.context.readTemplate(title)
        set((state) => ({
          selectedTemplate: {
            content,
            title,
            index: state.templates.findIndex((template) => template.title === title)
          }
        }))
        return content
      } catch (e) {
        logger.error('readTemplate', e)
        await get().actions.readTemplates()
        return ''
      }
    },
    updateTemplate: async (title, content) => {
      try {
        await window.context.updateTemplate(title, content)
        set((state) => ({
          templates: state.templates.map((template) =>
            template.title === title ? { ...template, lastEditedTime: Date.now() } : template
          ),
          selectedTemplate: {
            ...state.selectedTemplate,
            content
          }
        }))
      } catch (e) {
        logger.error('updateTemplate', e)
        await get().actions.readTemplates()
        set(() => ({
          selectedTemplate: {
            index: -1,
            title: '',
            content: ''
          }
        }))
      }
    },
    deleteTemplate: async (title) => {
      let deleted = false
      if (!title) {
        return deleted
      }
      try {
        deleted = await window.context.deleteTemplate(title)
      } catch (e) {
        logger.error('deleteTemplate', e)
      } finally {
        await get().actions.readTemplates()
        set(() => ({
          selectedTemplate: {
            index: -1,
            title: '',
            content: ''
          }
        }))
      }
      return deleted
    }
  }
}))

export const useTemplates = () => useTemplateStore((state) => state.templates)

export const useSelectedTemplate = () => useTemplateStore((state) => state.selectedTemplate)

export const useTemplateStoreActions = () => useTemplateStore((state) => state.actions)
