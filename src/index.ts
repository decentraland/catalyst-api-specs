import { readFileSync }from 'fs'
import { resolve } from 'path'
import { parse } from 'yaml'

const file = readFileSync(resolve(__dirname, './api.yaml'), 'utf8')

export const CATALYST_API = parse(file)