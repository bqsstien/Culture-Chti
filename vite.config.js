import { resolve } from 'path';
import { defineConfig } from 'vite';
import htmlPurge from 'vite-plugin-purgecss';

export default defineConfig({
    root: resolve(__dirname, "src"),
    resolve: {
        alias: {
            "~bootstrap": resolve(__dirname, "node_modules/bootstrap"),
        },
    },
    server: {
        port: 8080,
        hot: true,
    },
    plugins: [
        htmlPurge([htmlPurge()])
    ],
    build: {
        rollupOptions: {
            input: {
                index: resolve(__dirname, './src/index.html'),
                carnaval: resolve(__dirname, './src/carnaval.html'),
                patois: resolve(__dirname, './src/patois.html'),
                beffrois: resolve(__dirname, './src/beffrois.html'),
            }
        }
    }
});



