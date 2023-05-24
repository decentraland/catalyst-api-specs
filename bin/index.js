const { readFileSync, writeFileSync } = require('fs');


  // const { generateJSONSchemaTypes, generateOpenAPITypes, toSource } = await import('schema2dts');
  // const openAPISchema = JSON.parse(readFileSync("lib/api.json").toString());
  // writeFileSync('lib/API.d.ts', toSource(await generateOpenAPITypes(openAPISchema)));


async function main() {
  const { fromParameter } = require("@openapi-contrib/openapi-schema-to-json-schema");
  const api = JSON.parse(readFileSync("lib/api.json").toString());

  const validators = {}
  for (const path in api.paths) {
    validators[path] = {}
    for (const method in api.paths[path]) {
      validators[path][method] = {params: {}, qs: {}}
      const requestBody = api.paths[path][method].requestBody
      if (requestBody && requestBody.content) {
        console.log(requestBody.content)
        const convertedSchema = fromParameter(requestBody);
        validators[path][method]['body'] = convertedSchema
      }
      for (const parameter of (api.paths[path][method].parameters || [])) {
        const convertedSchema = fromParameter(parameter);
        if (parameter['in'] === 'query') {
          validators[path][method]['qs'][parameter.name] = convertedSchema
        } else if (parameter['in'] === 'path') {
          validators[path][method]['params'][parameter.name] = convertedSchema
        } else {
          throw new Error(`Unhandled parameter type ${parameter['in']}`)
        }
      }
    }

  }

  writeFileSync('lib/validators.json', JSON.stringify(validators, null, 2));
}


main().catch(console.error)
