<script lang="ts">
	import '../styles/app.css';
	import Toast from '$lib/components/toast/Toast.svelte';
	import { is_full_screen_loading } from '$lib/store';
	import Loading from '$lib/components/Loading.svelte';
	import { onMount } from 'svelte';
	import supabase from '$lib/db';
	import { invalidateAll } from '$app/navigation';
	import { navigating } from '$app/stores';
	import Prompt from '$lib/components/Prompt.svelte';

	let watching_load = false;
	let show_timeout_popup = false;

	$: handleNavigate($navigating);

	function handleNavigate(is_navigating) {
		if (is_navigating) {
			watching_load = true;
			setTimeout(() => {
				if (watching_load) {
					$is_full_screen_loading = true;
				}
			}, 300);
			setTimeout(() => {
				console.log('timeout');

				if (watching_load) {
					$is_full_screen_loading = false;
					show_timeout_popup = true;
				}
			}, 10000);
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

<Prompt
	bind:is_open={show_timeout_popup}
	confirm_text="Refresh"
	cancel_text="Keep Waiting"
	on:confirm={() => location.reload()}
>
	<h2 class="text-3xl text-red font-black">Page Timeout</h2>
	<p class="text-xl mt-4">
		It would seem the page timed out. I'd give it a refresh. You might be having network
		connectivity problems.
	</p>
</Prompt>

<Loading fullScreen={true} is_showing={$is_full_screen_loading} />
<Toast />
<slot />
