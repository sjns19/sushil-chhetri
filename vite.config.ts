import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import htmlMinifier from 'vite-plugin-html-minifier';
import path from 'path'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  return {
    base: mode === 'production' ? '/sushil-chhetri/' : '/',
    build: {
      outDir: 'docs'
    },
    plugins: [
      react({
        babel: {
          plugins: [['babel-plugin-react-compiler']],
        },
      }),
      htmlMinifier({
        minify: true
      })
    ],
    css: {
      modules: {
        generateScopedName: mode === 'production' ? '[hash:base64:5]' : undefined,
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
