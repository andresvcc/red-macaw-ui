import react from '@vitejs/plugin-react'
import path from 'node:path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import reactPreset from 'vite-preset-react'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    dts(),
    reactPreset({ removeDevtoolsInProd: true, injectReact: true })
  ],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      }
    }
  },
  build: {
    sourcemap: true,
    lib: {
      entry: path.resolve(__dirname, 'src/index.tsx'),
      name: 'Red-Macaw',
      formats: ['es', 'umd'],
      fileName: format => `red-macaw-ui.${format}.js`
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'styled-components'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'styled-components': 'styled'
        }
      }
    }
  }
})
