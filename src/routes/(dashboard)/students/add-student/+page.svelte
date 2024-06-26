<script lang="ts">
	import DateInput from '$lib/components/DateInput.svelte';
	import Input from '$lib/components/Input.svelte';
	import Loading from '$lib/components/Loading.svelte';
	import { scale } from 'svelte/transition';
	import { flip } from 'svelte/animate';
	import { enhance } from '$app/forms';
	import type { phoneType } from '$lib/types';
	import { goto } from '$app/navigation';
	import Dialog from '$lib/components/Dialog.svelte';

	// TODO: Add phone validation
	// TODO: Submit Phones

	let { form } = $props();

	let isLoading: boolean = false;

	let phoneArr = $state([{ id: 1, label: '', phone: '' }]);

	function removePhoneGroup(id): void {
		phoneArr = [...phoneArr].filter((p) => p.id !== id);
	}

	function useRegex(input) {
		let regex = /phone\[[0-9]+\]/i;
		return regex.test(input);
	}

	function handle_form({ formData }) {
		// if (phoneArr.length > 0 && phoneArr[0].phone !== '') {
		// 	data.set('phones', JSON.stringify(phoneArr));
		// }
		return async ({ result, update }) => {
			form = result.data;
		};
	}

	let the_dialog: HTMLDialogElement | undefined = $state();
	$inspect(the_dialog);
</script>

<svelte:head>
	<title>Add Student | SuzApp</title>
</svelte:head>

<Loading fullScreen is_showing={isLoading} />

<div class="">
	<form method="POST" autocomplete="off" use:enhance={handle_form}>
		<div class="card mt-14">
			<h1 class="pink-underline text-4xl font-black">Add Student</h1>
			<Input
				name="first_name"
				value={form?.data?.first_name}
				label="First Name"
				validation_error={form?.error?.first_name}
				required
			/>
			<Input
				name="last_name"
				value={form?.data?.last_name ?? ''}
				label="Last Name"
				validation_error={form?.error?.last_name}
				required
			/>
			<Input
				name="email"
				value={form?.data?.email ?? ''}
				label="Email"
				type="email"
				validation_error={form?.error?.email}
				required
			/>
			<label class="select-label" for="grade">
				<span>Grade</span>
			</label>
			<select
				name="grade"
				id="grade"
				tabindex="0"
				title="Grade"
				value={form?.data?.grade ?? 'Select Grade'}
			>
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
			<DateInput name="dob" label="Date Of Birth" />
			<Input
				name="address"
				placeholder="717 North 8th Ave."
				label="Address"
				label_classes="mt-16"
			/>
			<Input name="city" placeholder="Lebanon" label="City" />
			<Input name="zip" placeholder="17042" label="Zip" />
		</div>

		<!-- PHONE STUFF  -->

		<div class="card mt-14">
			<h2 class="text-3xl font-black mb-6 text-left pink-underline">Phones</h2>
			{#each phoneArr as { id, phone, label }, index (id)}
				<fieldset
					class="phone-group shadow-md p-2"
					animate:flip={{ duration: 200 }}
					transition:scale
				>
					<label class="input">
						<span class="w-full block text-lg">Phone Label</span>
						<input
							name={`ignore-label`}
							type="text"
							title="phone label"
							placeholder="Optional"
							autocomplete="off"
							bind:value={phoneArr[index].label}
						/>
					</label>
					<label class="input">
						<span class="w-full block text-lg">Phone Number</span>
						<input
							name={`ignore-phone`}
							type="tel"
							title="phone"
							bind:value={phoneArr[index].label}
						/>
					</label>
					{#if phoneArr.length > 1}
						<button
							onclick={() => removePhoneGroup(id)}
							transition:scale
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
				onclick={() =>
					(phoneArr = [...phoneArr, { id: Math.round(Math.random() * 100), label: '', phone: '' }])}
			>
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
					class="lucide lucide-plus"><path d="M5 12h14" /><path d="M12 5v14" /></svg
				>
				<span class="block color-pink">Add Another Phone</span>
			</button>
		</div>

		<div class="flex justify-end pb-10">
			<button class="btn save-btn bg-green hover:text-green mt-16" type="submit">
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
					class="lucide lucide-check"><path d="M20 6 9 17l-5-5" /></svg
				>
				Save Student
			</button>
		</div>
	</form>
</div>

<style lang="postcss">
	.more-btn {
		width: 100%;
		border-radius: theme('borderRadius.xl');
		padding: theme('spacing.3');
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		border: 2px solid theme('colors.pink.200');
		background: theme('colors.pink.200');
		color: theme('colors.pink.900');
		transition: all 300ms;
		margin-bottom: theme('spacing.5');
		margin-top: theme('spacing.10');
		margin-inline: 0;

		&:hover {
			background: theme('colors.pink.300');
		}
	}

	.phone-group {
		position: relative;
		margin-bottom: theme('spacing.10');
		padding-left: theme('spacing.5');

		&::before {
			content: '';
			height: 100%;
			background-color: theme('colors.pink.DEFAULT');
			border-radius: theme('borderRadius.full');
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
</style>
