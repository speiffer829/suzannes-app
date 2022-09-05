<script>
	import DateInput from '$lib/components/DateInput.svelte';
	import Input from '$lib/components/Input.svelte';
	import Loading from '$lib/components/Loading.svelte';
	import { toast } from '$lib/components/toast/toast';

	let first_name, last_name, grade, dob;

	let isLoading = false;

	async function handleSubmit(e) {
		isLoading = true;
		toast.send({ msg: 'Saving Student...', color: 'yellow' });

		const data = new FormData(e.target);
		new Promise((resolve, reject) => {
			setTimeout(() => {
				toast.send({
					msg: `${first_name} ${last_name} Has Been Added!`,
					color: 'green',
					isPersisting: false
				});
				isLoading = false;
			}, 1000);
		});
	}
</script>

<Loading fullScreen isShowing={isLoading} />

<div class="card mt-14 max-w-xl">
	<h1 class="pink-underline">Add Student</h1>

	<form on:submit|preventDefault={handleSubmit} autocomplete="off">
		<Input name="first_name" label="First Name" bind:value={first_name} />
		<Input name="last_name" label="Last Name" bind:value={last_name} />

		<label class="select-label" for="grade">
			<span>Grade</span>
		</label>
		<select name="grade" id="grade" bind:value={grade} tabindex="0" title="Grade">
			<option value="Select Grade" disabled checked>Select Grade</option>
			<option value="Pre">Pre</option>
			<option value="Kindergarden">Kindergarden</option>
			<option value="1st Grade">1st Grade</option>
			<option value="2nd Grade">2nd Grade</option>
			<option value="3rd Grade">3rd Grade</option>
			<option value="4th Grade">4th Grade</option>
			<option value="5th Grade">5th Grade</option>
			<option value="6th Grade">6th Grade</option>
			<option value="7th Grade">7th Grade</option>
			<option value="8th Grade">8th Grade</option>
			<option value="9th Grade">9th Grade</option>
			<option value="10th Grade">10th Grade</option>
			<option value="11th Grade">11th Grade</option>
			<option value="12th Grade">12th Grade</option>
			<option value="None">None</option>
		</select>

		<DateInput name="dob" label="Date Of Birth" bind:value={dob} />

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
