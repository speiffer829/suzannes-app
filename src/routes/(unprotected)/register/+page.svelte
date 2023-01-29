<script lang="ts">
	import Input from '$lib/components/Input.svelte';
</script>

<svelte:head>
	<title>Register Account</title>
</svelte:head>

<form action="?/register" method="POST" class="block self-center max-w-md w-11/12">
	<h1 class="text-3xl font-bold">Register</h1>
	<Input label="Email" type="email" name="email" />
	<Input label="Password" type="password" name="password" />

	<div class="flex justify-between items-end">
		<button class="btn" type="submit">Submit</button>
		<a class="text-pink underline" href="/login">Login</a>
	</div>
</form>
