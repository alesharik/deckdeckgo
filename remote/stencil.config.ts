import {Config} from '@stencil/core';

import {sass} from '@stencil/sass';
import {postcss} from '@stencil/postcss';
const autoprefixer = require('autoprefixer');

import builtins from 'rollup-plugin-node-builtins';
import { reactOutputTarget as react } from '@stencil/react-output-target';

// https://stenciljs.com/docs/config

let globalScript: string = 'src/global/app.ts';

// @ts-ignore
const dev: boolean = process.argv && process.argv.indexOf('--local') > -1;
if (dev) {
  globalScript = 'src/global/app-local.ts';
}

export const config: Config = {
  namespace: 'deckdeckgo-remote',
  outputTargets: [
    {
      type: 'www',
      baseUrl: 'https://deckdeckgo.app',
      copy: [{src: 'robots.txt'}]
    },
    react({
      componentCorePackage: 'deckdeckgo-studio',
      proxiesFile: 'test/index.ts',
      includeDefineCustomElements: true,
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
  ],
  globalScript: globalScript,
  globalStyle: 'src/global/app.scss',
  plugins: [
    sass(),
    postcss({
      plugins: [autoprefixer()]
    }),
    builtins()
  ],
  nodeResolve: {browser: true},
  devServer: {
    openBrowser: false,
    port: 3334
  }
};
