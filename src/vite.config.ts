import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { builtinModules } from "module";

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.info('vite config', __dirname);

// https://vitejs.dev/config/
export default defineConfig((buildConfig) => ({
    root: path.join(__dirname, '.'),
    build: {
        outDir: 'dist/static',
        rollupOptions: {
            external: buildConfig.isSsrBuild === true ? [...builtinModules, 'node:crypto', 'node:fs', 'node:path'] : [],
        },
    },
    plugins: [
        react(),
    ],
    ssr: {
        noExternal: buildConfig.isSsrBuild === true ? true : undefined,
    },
    alias: {
        resolve: {
            'src': path.resolve(__dirname, '.'),
        }
    }
}));

