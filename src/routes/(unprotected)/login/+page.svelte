<script lang="ts">
	import Input from '$lib/components/Input.svelte';
</script>

<svelte:head>
	<title>Login | Suzanne's</title>
</svelte:head>

<form action="?/login" method="POST" class="block self-center max-w-md w-11/12">
	<h1 class="text-3xl font-bold">Login</h1>
	<Input label="Email" type="email" name="email" />
	<Input label="Password" type="password" name="password" />

	<div class="flex justify-between items-end">
		<button class="btn" type="submit">Submit</button>
		<a class="text-pink underline" href="/register">Register</a>
	</div>
</form>
