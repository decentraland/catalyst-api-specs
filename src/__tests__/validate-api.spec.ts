import { CATALYST_API, CONTENT_API, LAMBDAS_API, EXPLORER_API } from '../../lib/index'
import { OpenAPISchemaValidator } from 'express-openapi-validator/dist/framework/openapi.schema.validator'

// This test is different to redocly lint
describe('Validate OAS (Express integration)', () => {
  const validator = new OpenAPISchemaValidator({ version: '3', validateApiSpec: true })

  it('Catalyst: should not be errors when validating API with schema validator', () => {
    const result = validator.validate(CATALYST_API)
    expect(result.errors).toHaveLength(0)
  })

  it('Content: should not be errors when validating API with schema validator', () => {
    const result = validator.validate(CONTENT_API)
    expect(result.errors).toHaveLength(0)
  })

  it('Lambdas: should not be errors when validating API with schema validator', () => {
    const result = validator.validate(LAMBDAS_API)
    expect(result.errors).toHaveLength(0)
  })

  it('Explorer: should not be errors when validating API with schema validator', () => {
    const result = validator.validate(EXPLORER_API)
    expect(result.errors).toHaveLength(0)
  })
})

describe('Extract the APIs of each service', () => {
  it.each([
    ['/content/', CONTENT_API],
    ['/lambdas/', LAMBDAS_API],
    ['/explorer/', EXPLORER_API]
  ])('should keep only and every %s path', (prefix, api) => {
    expect(Object.keys(api.paths)).toEqual(Object.keys(CATALYST_API.paths).filter((path) => path.startsWith(prefix)))
  })

  it('should not extract an empty API', () => {
    expect([CONTENT_API, LAMBDAS_API, EXPLORER_API].map((api) => Object.keys(api.paths).length > 0)).toEqual([
      true,
      true,
      true
    ])
  })
})
