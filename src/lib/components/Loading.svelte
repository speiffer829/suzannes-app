<script lang="ts">
	import { teleport } from '$lib/helpers/teleport';

	export let style: string = '';
	export let fullScreen: boolean = false;
	export let is_showing: boolean = true;
</script>

{#if is_showing}
	<div
		class="overlay w-full h-full flex justify-center items-center bg-dark bg-opacity-50 fixed top-0 left-0 z-[500]"
		{style}
		use:teleport={{ fullScreen }}
	>
		<div class="pp flex-shrink-0 w-[20px] bg-pub-blue-300 h-[20px] rounded-full" />
		<div class="bg-transparent text-sm px-4 py-3 rounded-2xl w-fit">
			<svg viewBox="0 0 580 140" width="150" height="50">
				<circle r="50" cx="50" cy="90" class=" transition-all circle" style="--delay: 0ms" />
				<circle r="50" cx="170" cy="90" class=" transition-all circle" style="--delay: 100ms" />
				<circle r="50" cx="290" cy="90" class=" transition-all circle" style="--delay: 200ms" />
				<circle r="50" cx="410" cy="90" class=" transition-all circle" style="--delay: 300ms" />
				<circle r="50" cx="530" cy="90" class=" transition-all circle" style="--delay: 400ms" />
			</svg>
		</div>
	</div>
{/if}

<style lang="postcss">
	.circle {
		@apply fill-pink-500;
		animation: run 1000ms infinite forwards;
		animation-delay: var(--delay);
	}

	@keyframes run {
		0% {
			translate: 0 0;
			@apply fill-pink-500;
		}

		50% {
			translate: 0px -40px;
			@apply fill-coral;
		}
	}
</style>
