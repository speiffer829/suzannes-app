<script lang="ts">
	import DateInput from '$lib/components/DateInput.svelte';
	import Input from '$lib/components/Input.svelte';
	import Loading from '$lib/components/Loading.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import { toast } from '$lib/components/toast/toast';

	let isLoading = false;

	let first_name, last_name, grade, dob;

	let phoneArr = [1];

	async function handleSubmit(e) {
		isLoading = true;
		toast.send('Saving Student...', { color: 'yellow' });

		const data = new FormData(e.target);
		new Promise<void>((resolve, reject) => {
			setTimeout(() => {
				toast.send(`${first_name} ${last_name} Has Been Added!`, {
					color: 'green',
					isPersisting: false
				});
				isLoading = false;
				resolve();
			}, 1000);
		});
	}
</script>

<svelte:head>
	<title>Add Student | SuzApp</title>
</svelte:head>

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

		<!-- PHONE STUFF  -->

		<h2 class="text-3xl font-black mt-6 text-center -mb-4">Phones</h2>
		{#each phoneArr as phone_item (phone_item)}
			<div class="phone-group">
				<label class="input">
					<span class="w-full block text-lg">Phone Label</span>
					<input name={`phone-${phone_item}`} type="tel" title="phone" placeholder="Optional" />
				</label>
				<label class="input">
					<span class="w-full block text-lg">Phone Number</span>
					<input name={`phone-${phone_item}`} type="tel" title="phone" />
				</label>
			</div>
		{/each}

		<button
			class="more-btn"
			type="button"
			on:click={() => (phoneArr = [...phoneArr, Math.round(Math.random() * 100)])}
		>
			<Icon icon="plus" />
			<span class="block color-pink">Add Phone</span>
		</button>

		<div class="flex justify-end">
			<button class="btn mt-16" type="submit">
				<Icon icon="plus" />
				Add Student
			</button>
		</div>
	</form>
</div>

<style lang="scss">
	.more-btn {
		display: block;
		width: 100%;
		border-radius: 8px;
		padding: 10px;
		display: flex;
		align-items: center;
		justify-content: center;
		border: solid 2px var(--pink);
		background: hsl(var(--pinkHSL) / 10%);
		color: var(--pink-dark);
		margin: 40px 0 20px;
		transition: all 250ms;

		&:hover {
			background: hsl(var(--pinkHSL) / 40%);
		}
	}

	.phone-group {
		position: relative;
		margin-bottom: 40px;
		padding-left: 20px;

		&::before {
			content: '';
			height: 100%;
			background: var(--pink);
			border-radius: 100px;
			width: 5px;
			position: absolute;
			top: 0;
			left: 0;
		}
	}
</style>
