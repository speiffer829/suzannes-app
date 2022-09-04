<script>
	import Input from '$lib/components/Input.svelte';

	let first_name, last_name, grade;

	async function handleSubmit(e) {
		const data = new FormData(e.target);
		for (let [name, value] of data) {
			console.log(name, value);
		}
	}
</script>

<div class="card mt-14 max-w-xl">
	<h1 class="pink-underline">Add Student</h1>

	<form on:submit|preventDefault={handleSubmit} autocomplete="off">
		<Input name="first_name" label="First Name" bind:value={first_name} />
		<Input name="last_name" label="Last Name" bind:value={last_name} />

		<div class="flex justify-end">
			<button class="btn mt-16" type="submit">
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
					class="feather feather-plus"
					><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg
				>
				Add Student
			</button>
		</div>
	</form>
</div>
