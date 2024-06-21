import { TemplateInfo } from '@shared/models'
import fs from 'fs/promises'
import path from 'path'
import { getRootDir } from './getRootDir'

export async function getTemplateInfo(filename: string) {
  const filePath = path.join(getRootDir(), filename)
  const fileStats = await fs.stat(filePath)
  const templateInfo: TemplateInfo = {
    title: path.basename(filename),
    lastEditedTime: fileStats.mtimeMs
  }
  return templateInfo
}
