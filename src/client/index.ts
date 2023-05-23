export * from './client.schemas'
import { GetActiveEntities400, GetWearables503 } from './client.schemas'

// All content errors have the same schema, so we pick a random one
// to generate a generic type
export type ContentErrorResponse = GetActiveEntities400

// All lambdas (lamb2) errors have the same schema, so we pick a random one
// to generate a generic type
export type LambdasErrorResponse = GetWearables503
