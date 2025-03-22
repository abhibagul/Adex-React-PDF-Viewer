import { defineConfig } from "tsup";
import esbuildCssModulesPlugin from "esbuild-css-modules-plugin";
import cssModulesPlugin from "esbuild-css-modules-plugin";
import {sassPlugin} from "esbuild-sass-plugin";
export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"], // Ensure both ESM and CJS are built
  dts: true, // Generate TypeScript declarations
  outDir: "dist", // Output folder
  sourcemap: true,
  splitting: false, // Ensures a single ESM file
  clean: true,
//   loader: {
//     ".scss": "css", // This tells tsup to treat .scss files as CSS
//   },
// esbuildPlugins: [
//     sassPlugin({
//         type: "css-module", // Ensures CSS Modules are processed correctly
//       }),
//   ],
// esbuildPlugins: [sassPlugin()], 
});
