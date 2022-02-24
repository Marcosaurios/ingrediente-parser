import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		search: '20gr de arroz'
	}
});

export default app;