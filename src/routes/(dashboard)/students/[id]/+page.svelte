<script lang="ts">
	import type { studentType } from '$lib/types';
	import { format } from 'date-fns';
	import { page } from '$app/stores';
	import supabase from '$lib/db';
	import Loading from '$lib/components/Loading.svelte';
	import { parseISO, differenceInYears } from 'date-fns';
	import ScannerCards from './ScannerCards.svelte';

	let student = supabase
		.from<studentType>('students')
		.select(`*, phones(*), scanner_cards(*)`)
		.eq('id', $page.params.id)
		.single();

	function getAge(dob): number {
		const date = parseISO(dob);
		const age = differenceInYears(new Date(), date);
		return age;
	}
</script>

<svelte:head>
	{#await student}
		<title>Getting Student... | SuzApp</title>
	{:then { data }}
		<title>{data.first_name} {data.last_name} | SuzApp</title>
	{:catch error}
		<title>Error | SuzApp</title>
	{/await}
</svelte:head>

<div id="student-grid" class="grid xl:grid-cols-2 gap-8  mt-14">
	<section id="main-card" class="card">
		{#await student}
			<Loading --min-height="600px" />
		{:then { data, error }}
			{#if error}
				<h1 class="pink-underline">This Student Does Not Exist</h1>
				<a href="/students" class="btn">Back To Students</a>
			{:else}
				<h1 class="pink-underline">{data.first_name} {data.last_name}</h1>

				<div class=" mb-4 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4">
					<div class="grey-box mb-0">
						<p class="text-sm">Age</p>
						<p class="text-2xl sm:text-center">{getAge(data.dob)}</p>
					</div>

					<div class="grey-box sm:col-span-2 md:col-span-3 mb-0">
						<p class="text-sm">Grade</p>
						<p class="text-2xl">
							{data.grade}
						</p>
					</div>
				</div>

				<div class="grey-box">
					<p class="text-sm">Date Of Birth</p>
					<p class="text-2xl">{format(new Date(data.dob), 'MMMM dd, yyyy')}</p>
				</div>

				<div class="grey-box">
					<p class="text-sm">Address</p>
					<address class="text-2xl">
						{data.address}<br />
						{data.city}, PA {data.zip}
					</address>
				</div>

				<div class="grey-box">
					<p class="text-sm flex items-center gap-1">Email</p>
					<p class="text-2xl">{data.email}</p>
				</div>

				{@const { phones } = data}

				{#if phones.length === 1}
					{@const phone = phones[0]}
					<div class="grey-box">
						<p class="text-sm">Phone {phone.label ? `(${phone.label})` : ''}</p>
						<p class="text-2xl">{phone.phone}</p>
					</div>
				{:else if phones.length > 1}
					<section>
						<h2 class="text-3xl font-black mb-2 text-center">Phones</h2>
						<ul class="phones-list">
							{#each phones as phone (phone.phone_id)}
								<li>
									<div class="grey-box">
										<p class="text-sm flex items-center gap-1">
											<span class="block">{phone.label ? phone.label : 'Phone'}</span>
										</p>
										<p class="text-2xl">{phone.phone}</p>
									</div>
								</li>
							{/each}
						</ul>
					</section>
				{/if}
			{/if}
		{:catch error}
			<h1>There Has Been An Error</h1>
		{/await}
	</section>

	{#await student then { data }}
		{@const { scanner_cards } = data}
		<ScannerCards {scanner_cards} student_id={data.id} pathname={$page.url.pathname} />
	{/await}
</div>

<style lang="scss">
	.grey-box {
		@apply bg-dark-transparent rounded-lg py-1.5 px-2.5 mb-4;

		&.mb-0 {
			margin-bottom: 0;
		}
	}

	h1 {
		position: relative;
		font-weight: 900;
		font-size: 2.875rem;
		text-align: center;
		padding: 10px;
		margin-bottom: 30px;

		&::after {
			content: '';
			width: 70px;
			height: 10px;
			background: var(--pink);
			border-radius: 100px;
			position: absolute;
			bottom: -10px;
			left: 50%;
			transform: translateX(-50%);
		}
	}

	.phones-list {
		list-style: none;
		padding: 0;
	}
</style>
