<script>
	import '../styles/app.postcss';
	import '../styles/app.scss';
	import Toast from '$lib/components/toast/Toast.svelte';
	import { navigating } from '$app/stores';

	$: console.log($navigating);
</script>

<Toast />
<slot />
