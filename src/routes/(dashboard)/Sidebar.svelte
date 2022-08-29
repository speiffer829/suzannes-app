<script>
	import { page } from '$app/stores';
</script>

<aside class="bg-dark h-screen text-light flex flex-col">
	<h2 class="p-6 text-3xl">Hello, <span class="text-pink font-bold">Spenser</span></h2>

	<nav class="p-3">
		<a href="/" class="px-3 py-1 mb-1" class:active={$page.routeId === '(dashboard)'}>
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
				class="feather feather-home"
				><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline
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
				class="feather feather-user"
				><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg
			>
			<span>Students</span>
		</a>
		<a href="/" class="px-3 py-1" class:active={$page.url.pathname.includes('/classes')}>
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
				class="feather feather-clipboard"
				><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /><rect
					x="8"
					y="2"
					width="8"
					height="4"
					rx="1"
					ry="1"
				/></svg
			>
			<span>Classes</span>
		</a>
		<a href="/" class="px-3 py-1" class:active={$page.url.pathname.includes('/time-sheets')}>
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
				class="feather feather-clock"
				><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg
			>
			<span>Time Sheets</span>
		</a>
		<a href="/" class="px-3 py-1" class:active={$page.url.pathname.includes('/my-account')}>
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
				class="feather feather-settings"
				><circle cx="12" cy="12" r="3" /><path
					d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
				/></svg
			>
			<span>My Account</span>
		</a>
	</nav>

	<nav class="secondary-nav mt-auto px-3 py-2 ">
		<button href="/" class="px-3 py-1">
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
				class="feather feather-log-out"
				><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline
					points="16 17 21 12 16 7"
				/><line x1="21" y1="12" x2="9" y2="12" /></svg
			>
			<span>Logout</span>
		</button>
	</nav>
</aside>

<style lang="scss">
	aside {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;

		@media screen and (min-width: 280px) {
			width: 250px;
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
</style>
