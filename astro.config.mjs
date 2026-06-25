// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	vite: {
		resolve: {
			alias: {
				'~/': '/src/', // 絶対パスとして扱えるようにする
			},
		},
	},
});
