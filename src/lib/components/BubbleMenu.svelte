<script lang="ts">
	import Icon from './Icon.svelte';
	import { fly, slide, scale } from 'svelte/transition';
	import { backIn, backInOut, backOut } from 'svelte/easing';

	interface optionType {
		text: string;
		callback?: () => any;
	}

	export let options: optionType[];
	export let is_open = false;
	let this_bubble;

	function clickAway(e) {
		if (!this_bubble) return;
		if (!this_bubble.contains(e.target) && is_open) {
			is_open = false;
		}
	}
</script>

<svelte:window on:click={clickAway} />

<div class="bubble-menu-contain" bind:this={this_bubble}>
	<button class="circle-btn" title="Show Options" on:click={() => (is_open = !is_open)}>
		<Icon icon="more" size={20} />
	</button>

	{#if is_open}
		<div class="bubble-body" transition:scale={{ easing: backInOut }} id="bubble-body">
			{#each options as option}
				<button on:click={option.callback}>{option.text}</button>
			{/each}
		</div>
	{/if}
</div>

<style lang="scss">
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
