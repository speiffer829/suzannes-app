<script>
	import { tweened } from 'svelte/motion';
	import { onMount } from 'svelte';
	import { toast } from './toast';

	export let msg, id, duration, isPersisting;
	let progress = tweened(100, { duration });

	onMount(async () => {
		if (!isPersisting) {
			await progress.set(0);
			toast.remove(id);
		}
	});
</script>

<p>{msg}</p>

<style>
	p {
		margin: 0;
	}
</style>
