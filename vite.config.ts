import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  return {
    base: mode === 'production' ? '/sushil-chhetri/' : '/',
    build: {
      outDir: 'docs' // Change 'build' to your desired folder name
    },
    plugins: [
      react({
        babel: {
          plugins: [['babel-plugin-react-compiler']],
        },
      }),
    ],
    css: {
      modules: {
        //generateScopedName: '[hash:base64:5]',
      },
      preprocessorOptions: {
        scss: {
          additionalData: `
          @use "sass:color";
					@use "${path.resolve('./src/styles/modules/vars')}";
					@use "${path.resolve('./src/styles/modules/mixins')}";
					@use "${path.resolve('./src/styles/modules/keyframes')}";
				`
        }
      }
    },
  }
});
