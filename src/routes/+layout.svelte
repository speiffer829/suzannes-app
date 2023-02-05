<script lang="ts">
	import '../styles/app.postcss';
	import Toast from '$lib/components/toast/Toast.svelte';
	import { is_full_screen_loading } from '$lib/store';
	import Loading from '$lib/components/Loading.svelte';
	import { onMount } from 'svelte';
	import supabase from '$lib/db';
	import { invalidateAll } from '$app/navigation';
	import { navigating } from '$app/stores';

	let watching_load = false;

	$: handleNavigate($navigating);

	function handleNavigate(is_navigating) {
		if (is_navigating) {
			watching_load = true;
			setTimeout(() => {
				if (watching_load) {
					$is_full_screen_loading = true;
				}
			}, 300);
		} else {
			watching_load = false;
			$is_full_screen_loading = false;
		}
	}

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
