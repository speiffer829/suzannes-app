<script lang="ts">
	export let value: string = null;
	export let placeholder: string = null;
	export let disabled: boolean = null;
	export let label: string = null;
	export let name: string = null;
	export let classes: string = null;
</script>

<label>
	<span class="w-full block text-lg">{label}</span>
	<input {name} type="date" bind:value {placeholder} {disabled} title={label} class={classes} />
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
