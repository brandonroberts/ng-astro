import angular from '@analogjs/vite-plugin-angular';

function getRenderer() {
	return {
		name: 'astro-angular',
		clientEntrypoint: 'astro-angular/client.js',
		serverEntrypoint: 'astro-angular/server.js',
	};
}

function getViteConfiguration() {
	return {
		optimizeDeps: {
			include: ['astro-angular/client.js'],
			exclude: ['astro-angular/server.js'],
		},
		plugins: [angular.default()]
	};
}

export default function () {
	return {
		name: 'astro-angular',
		hooks: {
			'astro:config:setup': ({ addRenderer, updateConfig }) => {
				addRenderer(getRenderer());
				updateConfig({ vite: getViteConfiguration() });
			},
		},
	};
}