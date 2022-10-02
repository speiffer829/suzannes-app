<script lang="ts">
	import Icon from './Icon.svelte';

	interface optionType {
		text: string;
		callback?: () => any;
	}

	export let options: optionType[];
	export let is_open = false;
</script>

<div class="bubble-menu-contain">
	<button class="circle-btn" title="Show Options">
		<Icon icon="more" size={20} />
	</button>
</div>

<style lang="scss">
	.bubble-menu-contain {
		position: relative;
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
			background: var(--pink);
		}
	}
</style>
