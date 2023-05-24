const { readFileSync, writeFileSync } = require('fs');

async function main() {
  const { generateJSONSchemaTypes, generateOpenAPITypes, toSource } = await import('schema2dts');
  const openAPISchema = JSON.parse(readFileSync("lib/api.json").toString());
  writeFileSync('lib/API.d.ts', toSource(await generateOpenAPITypes(openAPISchema)));
}


main().catch(console.error)
