export * from './client.schemas'
import { GetActiveEntities400 } from './client.schemas'

// All errors have the same schema, so we pick a random one
// to generate a generic type
export type ErrorResponse = GetActiveEntities400
