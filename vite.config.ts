import vue from '@vitejs/plugin-vue';
import { readFileSync } from 'fs';
import { resolve } from 'path';
import AutoImport from 'unplugin-auto-import/vite';
import { fileURLToPath } from 'url';
import { defineConfig, loadEnv } from 'vite';
import checker from 'vite-plugin-checker';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), '');
	const isDev = env.NODE_ENV !== 'production';

	return {
		plugins: [
			vue(),
			AutoImport({
				imports: ['vue'],
				dts: 'src/app/types/auto-imports.d.ts'
			}),
			checker({
				vueTsc: true,
				eslint: {
					lintCommand: 'eslint "./src/**/*.{ts,tsx,vue}"'
				},
				stylelint: {
					lintCommand: 'stylelint ./src/**/*.{css,scss,vue}'
				}
			})
		],
		resolve: {
			alias: {
				'@': fileURLToPath(new URL('./src/', import.meta.url))
			},
			extensions: ['.js', '.json', '.jsx', '.mjs', '.ts', '.tsx', '.vue']
		},
		define: { 'process.env': env },
		server: {
			port: parseInt(env.VITE_APP_PORT, 10) || 3000,
			https: {
				key: readFileSync(resolve(__dirname, env.SSL_KEY_PATH)),
				cert: readFileSync(resolve(__dirname, env.SSL_CERT_PATH))
			}
		}
	};
});
