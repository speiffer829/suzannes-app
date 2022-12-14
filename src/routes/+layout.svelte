<script lang="ts">
	import '../styles/app.postcss';
	import '../styles/app.scss';
	import Toast from '$lib/components/toast/Toast.svelte';
	import { is_full_screen_loading } from '$lib/store';
	import Loading from '$lib/components/Loading.svelte';
	import { onMount } from 'svelte';
	import supabase from '$lib/db';
	import { invalidateAll } from '$app/navigation';

	onMount(() => {
		const {
			data: { subscription }
		} = supabase.auth.onAuthStateChange(() => {
			invalidateAll();
		});

		return () => {
			subscription.unsubscribe();
		};
	});
</script>

<Loading fullScreen={true} isShowing={$is_full_screen_loading} />
<Toast />
<slot />
