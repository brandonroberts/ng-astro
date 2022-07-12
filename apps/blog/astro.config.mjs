// Full Astro Configuration API Documentation:
// https://docs.astro.build/reference/configuration-reference

// @ts-check
import { defineConfig } from 'astro/config';
import angular from 'astro-angular';

// https://astro.build/config
export default defineConfig({
	// Enable Angular to support Angular components.
	integrations: [angular()],
	experimental: {
		integrations: true
	}
});
