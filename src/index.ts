import { readFileSync } from 'fs'
import { resolve } from 'path'
import { parse } from 'yaml'

function parseAPI(fileName: string) {
  const file = readFileSync(resolve(__dirname, fileName), 'utf8')
  return parse(file)
}

export const CATALYST_API = parseAPI('api.yaml')

function extractAPI(prefix: string): any {
  const paths: Record<string, any> = {}

  for (const k in paths) {
    if (k.startsWith(prefix)) {
      paths[k] = CATALYST_API.paths[k]
    }
  }
  return { ...CATALYST_API, paths }
}

export const CONTENT_API = extractAPI('/content/')
export const LAMBDAS_API = extractAPI('/lambdas/')
export const COMMS_API = extractAPI('/comms/')
