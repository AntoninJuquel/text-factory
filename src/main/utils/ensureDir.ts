import fs from 'fs/promises'

export async function ensureDir(dir: string) {
  try {
    await fs.access(dir)
  } catch (error) {
    await fs.mkdir(dir)
  }
}
