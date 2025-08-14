import * as esbuild from 'esbuild';
import { sassPlugin } from 'esbuild-sass-plugin';

// SCSS
await esbuild.build({
  entryPoints: ['./Stylesheets/site.scss'],
  bundle: true,
  sourcemap: true,
  loader: { '.woff': 'file', '.woff2': 'file' },
  outfile: './wwwroot/css/site.css',
  plugins: [sassPlugin()]
});

// JavaScript
const jsFiles = [
  { entry: './JavaScript/site.js', outfile: './wwwroot/js/site.js' },
  { entry: './JavaScript/index.js', outfile: './wwwroot/js/index.js' },
  { entry: './JavaScript/charts.js', outfile: './wwwroot/js/charts.js' },
  { entry: './JavaScript/tables.js', outfile: './wwwroot/js/tables.js' }
];

jsFiles.forEach(async file => {
  await esbuild.build({
    entryPoints: [file.entry],
    bundle: true,
    sourcemap: true,
    outfile: file.outfile,
  })
});

// The code below can be used if copying files directly from node_modules into wwwroot is necessary.
// Raw files
// const rawFiles = [
//   { entry: './node_modules/path/to/package.js', outfile: './wwwroot/lib/package.js' },
//   { entry: './node_modules/path/to/package.css', outfile: './wwwroot/lib/package.css' },
// ];

// rawFiles.forEach(async file => {
//   await esbuild.build({
//     entryPoints: [file.entry],
//     bundle: false,
//     sourcemap: false,
//     loader: { ".*": 'copy' },
//     outfile: file.outfile
//   });
// });
