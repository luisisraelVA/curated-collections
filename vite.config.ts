import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    mode === "development" && componentTagger()
  ].filter(Boolean),
  
  // --- OPTIMIZACIÓN DE VELOCIDAD ---
  build: {
    target: "esnext", // Usa JavaScript moderno (más rápido)
    minify: "esbuild", // Compresión ultra rápida
    cssMinify: true,   // Comprime el CSS al máximo
    rollupOptions: {
      output: {
        // Divide el código en trozos pequeños para que cargue más rápido
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
      },
    },
    // Elimina console.logs en producción para ganar milisegundos
    terserOptions: mode === "production" ? {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    } : undefined,
  },
  // ---------------------------------

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: [
      "react", 
      "react-dom", 
      "react/jsx-runtime", 
      "react/jsx-dev-runtime", 
      "@tanstack/react-query", 
      "@tanstack/query-core"
    ],
  },
}));