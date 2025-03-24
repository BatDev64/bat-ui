import fs from 'node:fs/promises'
import path from 'node:path'

export const createFile = async ({
  nameFile,
  content,
  dir = 'lib',
  overwrite = false
}: {
  nameFile: string
  content: string
  dir?: string
  overwrite?: boolean
}) => {
  const root = process.cwd()
  const folder = path.resolve(root, dir)
  const file = path.join(folder, nameFile)

  try {
    await fs.mkdir(folder, { recursive: true })

    const fileExist = await fs
      .access(file)
      .then(() => true)
      .catch(() => false)

    if (fileExist && !overwrite) {
      console.log(
        `The file ${nameFile} already exists and will not be overwritten.`
      )
      return
    }

    await fs.writeFile(file, content, 'utf-8')
    console.log(`the file ${nameFile} created in: ${folder}`)
  } catch (error) {
    console.error(`Error creating file: ${error}`)
  }
}
