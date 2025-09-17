import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  base: '/HumanPerformanceZeeland/',   // nodig voor GitHub Pages
  plugins: [react()],
  server: { allowedHosts: true },
  resolve: {
    alias: { '@': path.resolve(process.cwd(), './src') },
    extensions: ['.mjs','.js','.jsx','.ts','.tsx','.json']
  },
  optimizeDeps: { esbuildOptions: { loader: { '.js': 'jsx' } } }
})

