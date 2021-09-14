import { CATALYST_API } from '../../lib/index'
import { OpenAPISchemaValidator } from 'express-openapi-validator/dist/framework/openapi.schema.validator'

// This test is different to redocly lint
describe("Validate OAS (Express integration)", () => {
  it("should not be errors when validating API with schema validator", () => {
    const validator = new OpenAPISchemaValidator({ version: '3', validateApiSpec: true})
    const result = validator.validate(CATALYST_API)
    console.log(result)
    expect(result.errors.length).toBe(0)
  })
})