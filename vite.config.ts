import { defineConfig } from 'vite'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [],
    resolve: {
        alias: {
            'react': path.resolve(__dirname, './src/react-shim.ts'),
            'react-dom': path.resolve(__dirname, './src/react-shim.ts'),
        },
    },
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/index.ts'),
            name: 'CognigyReactPlugin',
            fileName: (format) => `plugin.js`,
            formats: ['iife']
        },
        rollupOptions: {
            external: [],
            output: {
                globals: {}
            }
        },
        emptyOutDir: true
    },
    define: {
        'process.env': {}
    }
})
