<script lang="ts">
	import DateInput from '$lib/components/DateInput.svelte';
	import Input from '$lib/components/Input.svelte';
	import Loading from '$lib/components/Loading.svelte';
	import { scale } from 'svelte/transition';
	import { flip } from 'svelte/animate';
	import { enhance } from '$app/forms';
	import MaskInput from 'svelte-input-mask/MaskInput.svelte';
	import { Plus, Check } from 'lucide-svelte';

	let isLoading = false;

	let first_name, last_name, grade, dob;

	let phoneArr = [1];

	function removePhoneGroup(id): void {
		phoneArr = [...phoneArr].filter((p) => p !== id);
	}

	function useRegex(input) {
		let regex = /phone\[[0-9]+\]/i;
		return regex.test(input);
	}
</script>

<svelte:head>
	<title>Add Student | SuzApp</title>
</svelte:head>

<Loading fullScreen isShowing={isLoading} />

<div class="max-w-xl">
	<form
		method="POST"
		autocomplete="off"
		use:enhance={() => {
			return async ({ result }) => {
				// @ts-ignore
				console.log(result.data);
			};
		}}
	>
		<div class="card mt-14">
			<h1 class="pink-underline text-4xl font-black">Add Student</h1>
			<Input name="first_name" label="First Name" />
			<Input name="last_name" label="Last Name" />
			<label class="select-label" for="grade">
				<span>Grade</span>
			</label>
			<select name="grade" id="grade" tabindex="0" title="Grade">
				<option value="Select Grade" disabled selected>Select Grade</option>
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
		</div>

		<!-- PHONE STUFF  -->

		<div class="card mt-14">
			<h2 class="text-3xl font-black mb-6 text-left pink-underline">Phones</h2>
			{#each phoneArr as phone_item (phone_item)}
				<fieldset class="phone-group" animate:flip={{ duration: 200 }} transition:scale|local>
					<label class="input">
						<span class="w-full block text-lg">Phone Label</span>
						<input
							name={`phone-label[${phone_item}]`}
							type="text"
							title="phone label"
							placeholder="Optional"
						/>
					</label>
					<label class="input">
						<span class="w-full block text-lg">Phone Number</span>

						<input name={`phone[${phone_item}]`} type="tel" title="phone" />
					</label>
					{#if phoneArr.length > 1}
						<button
							on:click={() => removePhoneGroup(phone_item)}
							transition:scale|local
							type="button"
							title="Remove This Phone Group"
							class="remove-phone-btn"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="18"
								height="18"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="feather feather-minus"><line x1="5" y1="12" x2="19" y2="12" /></svg
							>
						</button>
					{/if}
				</fieldset>
			{/each}
			<button
				class="more-btn"
				type="button"
				on:click={() => (phoneArr = [...phoneArr, Math.round(Math.random() * 100)])}
			>
				<Plus />
				<span class="block color-pink">Add Another Phone</span>
			</button>
		</div>

		<div class="flex justify-end pb-10">
			<button class="btn save-btn mt-16" type="submit">
				<Check />
				Save Student
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

	.remove-phone-btn {
		position: absolute;
		top: 50%;
		left: -10px;
		transform: translateY(-50%);
		width: 25px;
		height: 25px;
		border: solid 2px var(--pink);
		border-radius: 100px;
		background: var(--light);
		display: flex;
		justify-content: center;
		align-items: center;
		transition: all 250ms;

		&:hover {
			background: var(--dark);
			color: var(--pink);
			border-color: var(--dark);
		}
	}

	.save-btn {
		background: var(--green);
		color: var(--dark-green);

		&:hover {
			background-color: var(--dark);
			color: var(--green);
		}
	}
</style>
