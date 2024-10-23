import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:3000/graphql",
  documents: "src/**/*.graphql",
  generates: {
    "./src/__generated__/graphql.ts": {
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
    }
  },
  ignoreNoDocuments: true,
};

export default config;
