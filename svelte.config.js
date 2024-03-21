import azure from 'svelte-adapter-azure-swa';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

export default {
	kit: {
		adapter: azure()
	},
	preprocess: vitePreprocess()

};
