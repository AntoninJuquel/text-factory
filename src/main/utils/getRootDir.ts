import { appDirectoryName } from '@shared/constants'
import { homedir } from 'os'
import path from 'path'

export function getRootDir() {
  return path.join(homedir(), appDirectoryName)
}
