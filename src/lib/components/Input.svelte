<script lang="ts">
	export let value: string = null,
		placeholder: string = null,
		disabled: boolean = false,
		label: string = null,
		name: string = null;
	export let classes: string = null;
	export let autofocus: boolean = false;
</script>

<label>
	<span class="w-full block text-lg">{label}</span>
	<input
		{name}
		type="text"
		bind:value
		{placeholder}
		{disabled}
		title={label}
		class={classes}
		{autofocus}
	/>
</label>

<style lang="scss">
	label {
		margin: 1rem 0;
		display: block;
	}
	input {
		width: 100%;
		font-size: 24px;
		padding: 8px 15px;
		border: solid 2px var(--dark);
		border-radius: 8px;
		outline: none;

		&:focus {
			border-color: var(--pink);
		}
	}
</style>
