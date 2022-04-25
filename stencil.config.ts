import { Config } from '@stencil/core';
import { angularOutputTarget } from '@stencil/angular-output-target';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'skyzon',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    angularOutputTarget({
      componentCorePackage: 'skyzon',
      directivesProxyFile: './angular-workspace/projects/skyzon-lib/src/lib/stencil-generated/components.ts',
      directivesArrayFile: './angular-workspace/projects/skyzon-lib/src/lib/stencil-generated/index.ts',
    }),
  ],
  globalStyle: 'src/global/global.scss',
  plugins: [
    sass()
  ]
};
