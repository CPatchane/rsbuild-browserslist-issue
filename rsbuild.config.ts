import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import browserslistConfig from "@getaround-eu/browserslist-config"

export default defineConfig({
  plugins: [pluginReact()],
  // output: {
  //   overrideBrowserslist: browserslistConfig,
  // }
});
