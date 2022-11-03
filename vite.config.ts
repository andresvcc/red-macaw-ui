import react from '@vitejs/plugin-react';
import reactPreset from 'vite-preset-react';
import path from 'node:path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import {
  createStyleImportPlugin,
} from 'vite-plugin-style-import'
import depsExternal from 'rollup-plugin-node-externals';

export default defineConfig({
    plugins: [
        react(),
        reactPreset({ removeDevtoolsInProd: true, injectReact: true }),
        depsExternal({
          include: 'antd',
        }),
        dts({
            insertTypesEntry: true,
        }),
        createStyleImportPlugin({
          libs: [
            {
              libraryName: 'antd',
              resolveStyle(name) {
                if (/^(row|col)$/.test(name)) return `antd/es/style/index.css`
                return `antd/es/${name}/style/index.css`
              }
            },
            {
              libraryName: 'antd-mobile',
              resolveStyle(name) {
                return `antd-mobile/es/${name}/style/index.css`
              }
            }
          ],
        }),
    ],
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
          additionalData: '@import "antd/dist/antd.min.css";',
        },
      },
    },
    build: {
        sourcemap: true,
        lib: {
            entry: path.resolve(__dirname, 'src/index.ts'),
            name: 'Red-Macaw',
            formats: ['es', 'umd'],
            fileName: (format) => `red-macaw-ui.${format}.js`,
        },
        rollupOptions: {
            external: ['react', 'react-dom', 'antd', 'styled-components'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                    'styled-components': 'styled',
                    antd:'antd'
                },
            },
        },
    },
});
