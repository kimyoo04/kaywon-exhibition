import path from 'path'

const buildEslintCommand = (filenames) => {
  const files = filenames
    .filter((f) => f.includes('/src/'))
    .map((f) => path.relative(process.cwd(), f))

  if (files.length === 0) {
    return null
  }

  return `next lint --fix --file ${files.join(' --file ')}`
}

const config = {
  '*.{ts,tsx}': async (files) => {
    const command = buildEslintCommand(files)
    return command ? [command, "bash -c 'pnpm check-types'"] : ["bash -c 'pnpm check-types'"]
  },
}

export default config
