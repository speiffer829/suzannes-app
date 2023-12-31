<script lang="ts">
	import { page, navigating } from '$app/stores';
	import { enhance } from '$app/forms';
	import supabase from '$lib/db';
	import { toast } from '$lib/components/toast/toast';
	import type { ActionResult } from '@sveltejs/kit';

	$: {
		if ($navigating !== null && isNavShowing) {
			isNavShowing = false;
		}
	}

	let isNavShowing = false;
</script>

<header
	class="bg-dark min-h-screen h-full text-light flex flex-col justify-between print:hidden"
	class:active={isNavShowing}
>
	<h2 class="p-6 text-3xl">Hello, <span class="text-pink font-bold">Spenser</span></h2>

	<nav class="p-3">
		<a href="/" class="px-3 py-1 mb-1" class:active={$page.route.id === '/(dashboard)'}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="20"
				height="20"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="lucide lucide-home"
				><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline
					points="9 22 9 12 15 12 15 22"
				/></svg
			>
			<span>Home</span>
		</a>
		<a href="/students" class="px-3 py-1" class:active={$page.url.pathname.includes('/students')}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="20"
				height="20"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="lucide lucide-users"
				><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path
					d="M22 21v-2a4 4 0 0 0-3-3.87"
				/><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg
			>
			<span>Students</span>
		</a>
		<a href="/classes" class="px-3 py-1" class:active={$page.url.pathname.includes('/classes')}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="20"
				height="20"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="lucide lucide-clipboard"
				><rect width="8" height="4" x="8" y="2" rx="1" ry="1" /><path
					d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
				/></svg
			>
			<span>Classes</span>
		</a>
		<a
			href="/time-sheets"
			class="px-3 py-1"
			class:active={$page.url.pathname.includes('/time-sheets')}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="20"
				height="20"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="lucide lucide-clock"
				><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg
			>
			<span>Time Sheets</span>
		</a>
		<a
			href="/my-account"
			class="px-3 py-1"
			class:active={$page.url.pathname.includes('/my-account')}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="20"
				height="20"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="lucide lucide-settings"
				><path
					d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"
				/><circle cx="12" cy="12" r="3" /></svg
			>
			<span>My Account</span>
		</a>
	</nav>

	<nav class="secondary-nav px-3 py-2">
		<form action="/logout" method="Post">
			<button type="submit" class="px-3 py-1">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="20"
					height="20"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="lucide lucide-log-out"
					><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline
						points="16 17 21 12 16 7"
					/><line x1="21" x2="9" y1="12" y2="12" /></svg
				>
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
</header>

<style lang="postcss">
	header {
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
				/* transition: background 0ms, transform 250ms; */
				/*  background: var(--periwinkle); */
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
		transition:
			background 250ms,
			translate 250ms;

		@media screen and (min-width: 1024px) {
			display: none;
		}

		.line {
			transition:
				y 200ms ease-in 200ms,
				rotate 200ms ease-in,
				opacity 0ms 200ms;
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
				transition:
					y 200ms ease-in,
					rotate 200ms ease-in 200ms,
					opacity 0ms 200ms;
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
