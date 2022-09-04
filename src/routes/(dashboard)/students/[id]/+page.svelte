<script>
	import { format } from 'date-fns';
	import { page } from '$app/stores';
	import supabase from '$lib/db';
	import Loading from '$lib/components/Loading.svelte';
	import { parseISO, differenceInYears } from 'date-fns';

	let student = supabase.from('students').select(`*, phones(*)`).eq('id', $page.params.id).single();

	function getAge(dob) {
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

<div id="student-grid" class="grid xl:grid-cols-2 gap-8">
	<section id="main-card" class="card mt-14">
		{#await student}
			<Loading style="min-height: 300px" />
		{:then { data }}
			<h1 class="pink-underline">{data.first_name} {data.last_name}</h1>

			<div class=" mb-4 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4">
				<div class="grey-box mb-0">
					<p class="text-sm">Age</p>
					<p class="text-2xl sm:text-center">{getAge(data.dob)}</p>
				</div>

				<div class="grey-box sm:col-span-2 md:col-span-3 mb-0">
					<p class="text-sm">Grade</p>
					<p class="text-2xl">
						{data.grade}{data.grade !== 'none' &&
						data.grade !== 'kindergarden' &&
						data.grade !== 'pre' &&
						data.grade !== 'graduated'
							? ' Grade'
							: ''}
					</p>
				</div>
			</div>

			<div class="grey-box">
				<p class="text-sm">DOB</p>
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
		{:catch error}
			<!-- student was rejected -->
		{/await}
	</section>
</div>

<style lang="scss">
	.grey-box {
		@apply bg-dark-transparent rounded-lg py-1.5 px-2.5 mb-4;

		&.mb-0 {
			margin-bottom: 0;
		}
	}

	.phones-list {
		list-style: none;
		padding: 0;
	}
</style>
