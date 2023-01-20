<script lang="ts">
	import { scale } from 'svelte/transition';
	import { page, navigating } from '$app/stores';
	import Icon from '$lib/components/Icon.svelte';
	import { enhance, type SubmitFunction } from '$app/forms';
	import supabase from '$lib/db';
	import { toast } from '$lib/components/toast/toast';

	$: {
		if ($navigating !== null && isNavShowing) {
			isNavShowing = false;
		}
	}

	let isNavShowing = false;

	async function submitLogout({ cancel }) {
		const { error } = await supabase.auth.signOut();
		if (error) {
			toast.send('Logout Error');
		}
		cancel();
	}
</script>

<aside
	class="bg-dark min-h-screen h-full text-light flex flex-col justify-between"
	class:active={isNavShowing}
>
	<h2 class="p-6 text-3xl">Hello, <span class="text-pink font-bold">Spenser</span></h2>

	<nav class="p-3">
		<a href="/" class="px-3 py-1 mb-1" class:active={$page.route.id === '/(dashboard)'}>
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
		<form action="/logout" method="Post">
			<button type="submit" class="px-3 py-1">
				<Icon icon="logout" size={20} />
				<span>Logout</span>
			</button>
		</form>
	</nav>
	<button
		class:active={isNavShowing}
		class="toggle-sidebar-btn"
		title="Toggle Sidebar"
		on:click={() => (isNavShowing = !isNavShowing)}
	>
		<svg viewBox="0 0 100 100" width="26" fill="white">
			<rect class="line top" width="100" height="10" rx="5" x="0" y="15" />
			<rect class="line middle" width="100" height="10" rx="5" x="0" y="45" />
			<rect class="line bottom" width="100" height="10" rx="5" x="0" y="75" />
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
		padding-top: 60px;
		transition: all 300ms;

		&.active {
			transform: translateX(0);
		}

		@media screen and (min-width: 350px) {
			padding-top: 0;
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
			padding: 10px;
			transition: all 250ms;

			&:hover {
				background: hsl(0 0% 100% / 15%);
			}

			&:active {
				// transition: background 0ms, transform 250ms;
				// background: var(--periwinkle);
				transform: scale(0.9);
			}

			&.active {
				transition: all 0ms;
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
		right: -50px;
		top: 20px;
		width: 50px;
		height: 50px;
		border-radius: 0 5px 5px 0;
		background: var(--dark);
		display: flex;
		justify-content: center;
		align-items: center;
		overflow: hidden;
		overflow: clip;
		padding: 5px;
		transition: background 250ms, translate 250ms;

		@media screen and (min-width: 1024px) {
			display: none;
		}

		.line {
			transition: y 200ms ease-in 200ms, rotate 200ms ease-in, opacity 0ms 200ms;
			transform-origin: center;
		}

		&.active {
			background: var(--red);
			translate: -85px;
			border-radius: 5px;

			@media screen and (min-width: 350px) {
				translate: initial;
				border-radius: 0 5px 5px 0;
			}
			.line {
				transition: y 200ms ease-in, rotate 200ms ease-in 200ms, opacity 0ms 200ms;
			}

			.top,
			.bottom {
				y: 45;
			}

			.top {
				rotate: 45deg;
			}
			.middle {
				opacity: 0;
			}
			.bottom {
				rotate: -45deg;
			}
		}
	}
</style>
