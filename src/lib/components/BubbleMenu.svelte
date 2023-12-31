<script lang="ts">
	import { scale } from 'svelte/transition';
	import { backInOut } from 'svelte/easing';
	import { click_outside } from '$lib/helpers/click_outside';

	interface optionType {
		text: string;
		callback?: () => any;
	}

	interface Props {
		options: optionType[];
		is_open: boolean;
	}

	let { options, is_open = false } = $props<Props>();

	let this_bubble: HTMLElement | undefined = $state();
</script>

<div
	class="bubble-menu-contain"
	bind:this={this_bubble}
	use:click_outside
	on:click-outside={() => (is_open = false)}
>
	<button class="circle-btn" title="Show Options" on:click={() => (is_open = !is_open)}>
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
			class="lucide lucide-more-horizontal"
			><circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /><circle
				cx="5"
				cy="12"
				r="1"
			/></svg
		>
	</button>

	{#if is_open}
		<div class="bubble-body" transition:scale|global={{ easing: backInOut }} id="bubble-body">
			{#each options as option}
				<button on:click={option.callback}>{option.text}</button>
			{/each}
		</div>
	{/if}
</div>

<style lang="postcss">
	.bubble-menu-contain {
		position: relative;
		isolation: isolate;
	}

	.bubble-body {
		background: var(--grey);
		position: absolute;
		width: 250px;
		z-index: 10;
		top: calc(-100% - 30px);
		right: -10px;
		filter: drop-shadow(0px 0px 10px rgb(0 0 0 / 40%));
		padding: 10px;
		border-radius: 8px;

		&::after {
			content: '';
			border: solid 10px transparent;
			border-top-color: var(--grey);
			position: absolute;
			right: 15px;
			top: 100%;
		}

		button {
			padding: 5px 10px;
			transition: all 250ms;
			display: block;
			width: 100%;
			text-align: left;
			border-radius: 5px;

			&:hover {
				background: var(--pink);
			}
		}
	}

	.circle-btn {
		display: flex;
		justify-content: center;
		align-items: center;
		background: var(--grey);
		width: 34px;
		height: 34px;
		border-radius: 100px;
		transition: all 250ms;

		&:hover {
			background: var(--dark);
			color: var(--pink);
		}
	}
</style>
