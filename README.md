`requestBody` is optional by default in OpenAPI 3.0[[1]](https://swagger.io/docs/specification/describing-request-body/). Orval does not respect that; it also does not respect `required: false`.

See the spec in [schema.yaml](schema.yaml), and the results in [out.ts](out.ts).

You can use these steps to reproduce:

1. `npm i -D`
2. `npm run gen`
