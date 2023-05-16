import { CATALYST_API, CONTENT_API, COMMS_API, LAMBDAS_API } from '../../lib/index'
import { OpenAPISchemaValidator } from 'express-openapi-validator/dist/framework/openapi.schema.validator'

// This test is different to redocly lint
describe('Validate OAS (Express integration)', () => {
  const validator = new OpenAPISchemaValidator({ version: '3', validateApiSpec: true })

  it('Catalyst: should not be errors when validating API with schema validator', () => {
    const result = validator.validate(CATALYST_API)
    expect(result.errors.length).toBe(0)
  })

  it('Content: should not be errors when validating API with schema validator', () => {
    const result = validator.validate(CONTENT_API)
    expect(result.errors.length).toBe(0)
  })

  it('Comms: should not be errors when validating API with schema validator', () => {
    const result = validator.validate(COMMS_API)
    expect(result.errors.length).toBe(0)
  })

  it('Lambdas: should not be errors when validating API with schema validator', () => {
    const result = validator.validate(LAMBDAS_API)
    expect(result.errors.length).toBe(0)
  })
})
