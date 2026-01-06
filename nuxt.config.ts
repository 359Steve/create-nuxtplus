// https://nuxt.com/docs/api/configuration/nuxt-config

import type { Meta } from '@unhead/vue/types';

const meta: Meta[] = [
	{ charset: 'utf-8' },
	{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
	{ name: 'format-detection', content: 'telephone=no' },
];

export default defineNuxtConfig({
	compatibilityDate: '2025-09-10',
	components: [
		{
			path: '~/components',
			extensions: ['.vue', '.tsx'],
		},
	],
	runtimeConfig: {},
	experimental: {
		payloadExtraction: false,
	},
	imports: {
		dirs: ['composables'],
	},
	plugins: [],
	pages: true,
	typescript: {
		strict: true,
		tsConfig: {
			compilerOptions: {
				experimentalDecorators: true,
				emitDecoratorMetadata: true,
			},
		},
	},
	devtools: { enabled: true },
	modules: ['@nuxtjs/tailwindcss', '@nuxt/eslint', '@element-plus/nuxt'],
	// 项目配置
	app: {
		head: {
			title: '测试',
			meta,
			link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
			viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
		},
	},

	// 初始化样式
	css: ['~/assets/css/index.scss', '~/assets/css/tailwind.css'],

	// 定义公共样式
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: '@use "~/assets/css/element-variables.scss" as element;',
				},
			},
			preprocessorMaxWorkers: true,
		},
	},

	postcss: {
		plugins: {
			'postcss-nested': {},
			'postcss-custom-media': {},
		},
	},
});
