<script lang="ts">
	import Input from '$lib/components/Input.svelte';
</script>

<svelte:head>
	<title>Register Account</title>
</svelte:head>

<div class="center">
	<form action="?/register" method="POST">
		<h1 class="text-3xl font-bold">Register</h1>
		<Input label="Email" type="email" name="email" />
		<Input label="Password" type="password" name="password" />

		<div class="flex justify-between items-end">
			<button class="btn" type="submit">Submit</button>
			<a class="text-pink underline" href="/login">Login</a>
		</div>
	</form>
</div>

<style lang="scss">
	.center {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		min-height: 100vh;
	}

	form {
		display: block;
		width: min(90%, 400px);
		padding: 20px;
		background: var(--light);
		box-shadow: var(--shadow);
		border-radius: 16px;
	}
</style>
