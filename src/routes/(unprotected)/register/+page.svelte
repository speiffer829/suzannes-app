<script lang="ts">
	import Input from '$lib/components/Input.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>Register Account</title>
</svelte:head>

<div class="grid lg:grid-cols-5 md:grid-cols-2">
	<img
		src={`/unprotected-imgs/${data.img}.png`}
		alt="painting of gymnast"
		class="lg:col-span-3 block md:min-h-screen h-36 w-full max-w-full object-cover"
	/>
	<div class="lg:col-span-2 flex justify-center align-center">
		<form action="?/register" method="POST" class="block self-center">
			<h1 class="text-3xl font-bold">Register</h1>
			<Input label="Email" type="email" name="email" />
			<Input label="Password" type="password" name="password" />

			<div class="flex justify-between items-end">
				<button class="btn" type="submit">Submit</button>
				<a class="text-pink underline" href="/login">Login</a>
			</div>
		</form>
	</div>
</div>

<style lang="scss">
	form {
		display: block;
		width: min(90%, 400px);
		padding: 20px;
		// background: var(--light);
		// box-shadow: var(--shadow);
		border-radius: 16px;
	}
</style>
