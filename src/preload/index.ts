import {
  CreateTemplate,
  DeleteTemplate,
  ReadTemplate,
  ReadTemplates,
  UpdateTemplate
} from '@shared/models'
import { contextBridge, ipcRenderer } from 'electron'

if (!process.contextIsolated) {
  throw new Error('contextIsolation must be enabled in the BrowserWindow')
}

try {
  contextBridge.exposeInMainWorld('context', {
    local: navigator.language,
    createTemplate: (...args: Parameters<CreateTemplate>) =>
      ipcRenderer.invoke('createTemplate', ...args),
    readTemplates: (...args: Parameters<ReadTemplates>) =>
      ipcRenderer.invoke('readTemplates', ...args),
    readTemplate: (...args: Parameters<ReadTemplate>) =>
      ipcRenderer.invoke('readTemplate', ...args),
    updateTemplate: (...args: Parameters<UpdateTemplate>) =>
      ipcRenderer.invoke('updateTemplate', ...args),
    deleteTemplate: (...args: Parameters<DeleteTemplate>) =>
      ipcRenderer.invoke('deleteTemplate', ...args)
  })
} catch (error) {
  console.error('Failed to expose context to renderer:', error)
}
