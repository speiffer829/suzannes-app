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
	import { scale } from 'svelte/transition';

	let watching_load = $state(false);
	let show_timeout_popup = $state(false);

	let showToTopBtn = $state(false);

	$effect(() => {
		handleNavigate($navigating);
	});

	function handleNavigate(is_navigating) {
		if (is_navigating) {
			watching_load = true;
			setTimeout(() => {
				if (watching_load) {
					$is_full_screen_loading = true;
				}
			}, 300);
			setTimeout(() => {
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

	function toTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
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

<svelte:window onscroll={() => (showToTopBtn = window.scrollY > 100)} />

<Prompt confirm_text="Refresh" cancel_text="Keep Waiting" onconfirm={() => location.reload()}>
	<h2 class="text-3xl text-red font-black">Page Timeout</h2>
	<p class="text-xl mt-4">
		It would seem the page timed out. I'd give it a refresh. You might be having network
		connectivity problems.
	</p>
</Prompt>

{#if showToTopBtn}
	<button
		onclick={toTop}
		id="to-top-btn"
		class="btn fixed bottom-6 right-6 p-3 rounded-full z-10"
		transition:scale
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			class="lucide lucide-arrow-up"><path d="m5 12 7-7 7 7" /><path d="M12 19V5" /></svg
		>
		<span class="sr-only">Top Top Of Page</span>
	</button>
{/if}
<Loading fullScreen={true} is_showing={$is_full_screen_loading} />
<Toast />
<slot />
