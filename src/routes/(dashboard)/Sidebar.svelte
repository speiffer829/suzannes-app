<script>
	import { scale } from 'svelte/transition';
	import { page } from '$app/stores';
	import { navigating } from '$app/stores';
	import Icon from '$lib/components/Icon.svelte';

	$: {
		if ($navigating !== null && isNavShowing) {
			isNavShowing = false;
		}
	}

	let isNavShowing = false;
</script>

<aside
	class="bg-dark min-h-screen h-full text-light flex flex-col justify-between"
	class:active={isNavShowing}
>
	<h2 class="p-6 text-3xl">Hello, <span class="text-pink font-bold">Spenser</span></h2>

	<nav class="p-3">
		<a href="/" class="px-3 py-1 mb-1" class:active={$page.routeId === '(dashboard)'}>
			<Icon icon="home" size={20} />
			<span>Home</span>
		</a>
		<a href="/students" class="px-3 py-1" class:active={$page.url.pathname.includes('/students')}>
			<Icon icon="user" size={20} />
			<span>Students</span>
		</a>
		<a href="/classes" class="px-3 py-1" class:active={$page.url.pathname.includes('/classes')}>
			<Icon icon="clipboard" size={20} />
			<span>Classes</span>
		</a>
		<a
			href="/time-sheets"
			class="px-3 py-1"
			class:active={$page.url.pathname.includes('/time-sheets')}
		>
			<Icon icon="clock" size={20} />
			<span>Time Sheets</span>
		</a>
		<a
			href="/my-account"
			class="px-3 py-1"
			class:active={$page.url.pathname.includes('/my-account')}
		>
			<Icon icon="settings" size={20} />
			<span>My Account</span>
		</a>
	</nav>

	<nav class="secondary-nav px-3 py-2 ">
		<button href="/" class="px-3 py-1">
			<Icon icon="logout" size={20} />
			<span>Logout</span>
		</button>
	</nav>
	<button
		class:active={isNavShowing}
		class="toggle-sidebar-btn"
		title="Toggle Sidebar"
		on:click={() => (isNavShowing = !isNavShowing)}
	>
		{#if isNavShowing}
			<!-- content here -->
			<svg
				transition:scale|local={{ duration: 300 }}
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="feather feather-chevrons-left sneaky-icon left"
				><polyline points="11 17 6 12 11 7" /><polyline points="18 17 13 12 18 7" /></svg
			>
		{:else}
			<svg
				transition:scale|local={{ duration: 300 }}
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="feather feather-chevrons-right sneaky-icon right"
				><polyline points="13 17 18 12 13 7" /><polyline points="6 17 11 12 6 7" /></svg
			>
		{/if}
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
			class="feather feather-menu bars"
			><line x1="3" y1="12" x2="21" y2="12" />
			<line x1="3" y1="6" x2="21" y2="6" />
			<line x1="3" y1="18" x2="21" y2="18" />
		</svg>
	</button>
</aside>

<style lang="scss">
	aside {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		transform: translateX(-100%);
		z-index: 100;
		transition: all 300ms;

		&.active {
			transform: translateX(0);
		}

		@media screen and (min-width: 280px) {
			width: 250px;
		}

		@media screen and (min-width: 1024px) {
			transform: translateX(0);
		}
	}

	nav {
		flex: 1 1 auto;

		&.secondary-nav {
			flex: 0 0 auto;
		}
		a,
		button {
			flex: 0 0 auto;
			width: 100%;
			display: flex;
			align-items: center;
			gap: 18px;
			font-size: 20px;
			border-radius: 100px;
			margin-bottom: 10px;
			transition: all 250ms;

			&:hover {
				background: hsl(0 0% 100% / 15%);
			}

			&.active {
				background: var(--pink);
				color: var(--dark);
			}
			span {
				display: block;
			}
		}
	}

	.toggle-sidebar-btn {
		position: absolute;
		right: -60px;
		top: 20px;
		width: 60px;
		height: 60px;
		border-radius: 0 5px 5px 0;
		background: var(--dark);
		display: flex;
		justify-content: left;
		align-items: center;
		overflow: hidden;
		overflow: clip;
		padding: 5px;

		@media screen and (min-width: 1024px) {
			display: none;
		}

		.bars {
			transition: transform 300ms;
		}

		&.active {
			.bars {
				transform: translateX(100%);
			}
		}

		.sneaky-icon {
			position: absolute;

			top: 50%;
			transform: translateY(-50%);

			&.left {
				left: 5px;
			}

			&.right {
				right: 5px;
			}
		}
	}
</style>
