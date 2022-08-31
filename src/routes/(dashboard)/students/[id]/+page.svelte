<script>
	import { format } from 'date-fns';
	import { page } from '$app/stores';
	import supabase from '$lib/db';

	let student = supabase.from('students').select(`*, phones(*)`).eq('id', $page.params.id).single();
</script>

<svelte:head>
	{#await student}
		<title>Getting Student...</title>
	{:then { data }}
		<title>{data.first_name} {data.last_name}</title>
	{:catch error}
		<title>Error</title>
	{/await}
</svelte:head>

<div id="student-grid" class="grid lg:grid-cols-2 ">
	{#await student}
		...loading
	{:then { data }}
		<section id="main-card" class="card">
			<h1>{data.first_name} {data.last_name}</h1>

			<div class="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-4">
				<div class="grey-box mb-0">
					<p class="text-sm">Age</p>
					<p class="text-2xl text-center">28</p>
				</div>

				<div class="grey-box lg:col-span-2 xl:col-span-3 mb-0">
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
					<p>{data.address}</p>
					<p>{data.city}, PA {data.zip}</p>
				</address>
			</div>

			<div class="grey-box">
				<p class="text-sm">Email</p>
				<p class="text-2xl">{data.email}</p>
			</div>
		</section>
	{:catch error}
		<!-- student was rejected -->
	{/await}
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
	}
</style>
