import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // Build optimizations
  build: {
    target: 'es2015',
    minify: 'esbuild',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          icons: ['lucide-react'],
          router: ['react-router-dom']
        }
      }
    },
    chunkSizeWarningLimit: 1000
  },

  // Asset handling
  assetsInclude: ['**/*.mp4', '**/*.mov'],
  
  // Server config
  server: {
    port: 5173,
    open: true
  },
  
  // Preview config
  preview: {
    port: 4173
  }
})
