<script lang="ts">
	import { enhance } from '$app/forms';
	import Input from '$lib/components/Input.svelte';
	import Loading from '$lib/components/Loading.svelte';

	let is_loading = false;

	async function handleForm() {
		is_loading = true;
	}
</script>

<svelte:head>
	<title>Login | Suzanne's</title>
</svelte:head>

<form method="POST" class="block self-center max-w-md w-11/12 relative" use:enhance={handleForm}>
	<Loading is_showing={is_loading} fullScreen={true} />
	<h1 class="text-3xl font-bold">Login</h1>
	<Input label="Email" type="email" name="email" />
	<Input label="Password" type="password" name="password" />

	<div class="flex justify-between items-end">
		<button class="btn" type="submit">Submit</button>
		<a class="text-pink underline" href="/register">Register</a>
	</div>
</form>
