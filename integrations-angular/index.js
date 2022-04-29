// import type { AstroIntegration, AstroRenderer } from 'astro';

function getRenderer() {
	return {
		name: '@astrojs/angular',
		clientEntrypoint: '@astrojs/angular/client.js',
		serverEntrypoint: '@astrojs/angular/server.js',
	};
}

function getViteConfiguration() {
	return {
		optimizeDeps: {
			include: ['@astrojs/angular/client.js'],
			exclude: ['@astrojs/angular/server.js'],
		},
		plugins: [],
		ssr: {
			external: [''],
		},
	};
}

export default function () {
	return {
		name: '@astrojs/angular',
		hooks: {
			'astro:config:setup': ({ addRenderer, updateConfig }) => {
				addRenderer(getRenderer());
				updateConfig({ vite: getViteConfiguration() });
			},
		},
	};
}