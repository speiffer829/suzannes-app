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
			<h1>{data.first_name} {data.last_name}</h1>

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
				<p class="text-sm">Email</p>
				<p class="text-2xl">{data.email}</p>
			</div>
		{:catch error}
			<!-- student was rejected -->
		{/await}
	</section>
</div>

<style lang="scss">
	h1 {
		position: relative;
		font-weight: 900;
		font-size: 46px;
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

	.grey-box {
		@apply bg-dark-transparent rounded-lg py-1.5 px-2.5 mb-4;

		&.mb-0 {
			margin-bottom: 0;
		}
	}
</style>
