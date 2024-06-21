import { ensureDir } from '@main/utils/ensureDir'
import { getRootDir } from '@main/utils/getRootDir'
import { getTemplateInfo } from '@main/utils/getTemplateInfo'
import { fileEncoding } from '@shared/constants'
import {
  CreateTemplate,
  DeleteTemplate,
  ReadTemplate,
  ReadTemplates,
  UpdateTemplate
} from '@shared/models'
import { dialog, shell } from 'electron'
import fs from 'fs/promises'
import path from 'path'

export const createTemplate: CreateTemplate = async (content, open) => {
  const rootDir = getRootDir()
  await ensureDir(rootDir)
  const { filePath, canceled } = await dialog.showSaveDialog({
    title: 'New note',
    defaultPath: path.join(rootDir, 'Untitled.md'),
    buttonLabel: 'Create',
    properties: ['showOverwriteConfirmation'],
    showsTagField: false,
    filters: [{ name: 'Markdown', extensions: ['md'] }]
  })
  if (canceled || !filePath) {
    return false
  }

  await fs.writeFile(filePath, content || '', { encoding: fileEncoding })

  switch (open) {
    case 'file':
      await shell.openPath(filePath)
      break
    case 'folder':
      shell.showItemInFolder(filePath)
      break
  }

  const title = path.basename(filePath)
  return title
}

export const readTemplates: ReadTemplates = async () => {
  const rootDir = getRootDir()
  await ensureDir(rootDir)
  const files = await fs.readdir(rootDir, { encoding: fileEncoding, withFileTypes: false })
  const templates = files.filter((file) => file.endsWith('.md'))
  return Promise.all(templates.map(getTemplateInfo))
}

export const readTemplate: ReadTemplate = async (title) => {
  const filePath = path.join(getRootDir(), title)
  const fileContent = await fs.readFile(filePath, { encoding: fileEncoding })
  return fileContent
}

export const updateTemplate: UpdateTemplate = async (title, content) => {
  const filePath = path.join(getRootDir(), title)
  await fs.writeFile(filePath, content, { encoding: fileEncoding })
}

export const deleteTemplate: DeleteTemplate = async (filename) => {
  const rootDir = getRootDir()

  const { response } = await dialog.showMessageBox({
    type: 'warning',
    title: 'Delete note',
    message: `Are you sure you want to delete ${filename}?`,
    buttons: ['Delete', 'Cancel'],
    defaultId: 1,
    cancelId: 1
  })

  if (response === 1) {
    return false
  }

  await fs.unlink(path.join(rootDir, filename))
  return true
}
