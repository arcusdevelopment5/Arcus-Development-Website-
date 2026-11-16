import {build} from 'esbuild';
await build({entryPoints:['carousel/comparison.tsx'],bundle:true,minify:true,format:'esm',target:'es2020',outfile:'dist/assets/arcus-comparison.js',define:{'process.env.NODE_ENV':'"production"'},legalComments:'eof'});
