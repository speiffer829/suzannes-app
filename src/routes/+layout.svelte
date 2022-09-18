<script>
	import '../styles/app.postcss';
	import '../styles/app.scss';
	import Toast from '$lib/components/toast/Toast.svelte';
	import { navigating } from '$app/stores';
	import { is_full_screen_loading } from '$lib/store';
	import Loading from '$lib/components/Loading.svelte';
</script>

<Loading fullScreen={true} isShowing={$is_full_screen_loading} />
<Toast />
<slot />
