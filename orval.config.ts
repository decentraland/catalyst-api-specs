import { defineConfig } from 'orval'

export default defineConfig({
  catalyst: {
    input: './openapi/catalyst.yaml',
    output: {
      mode: 'split',
      target: './src/client/client.ts'
    },
    hooks: {
      afterAllFilesWrite: 'prettier --write'
    }
  }
})
