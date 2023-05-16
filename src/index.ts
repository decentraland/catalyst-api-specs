import { readFileSync }from 'fs'
import { resolve } from 'path'
import { parse } from 'yaml'

const parseAPI = (fileName: string): any => {
  const file = readFileSync(resolve(__dirname,'api', fileName), 'utf8')
  return parse(file)
}

export const CATALYST_API = parseAPI('catalyst.yaml')
