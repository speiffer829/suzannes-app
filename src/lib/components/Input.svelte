<script lang="ts">
	export let value: string = null,
		placeholder: string = null,
		disabled: boolean = false,
		label: string = null,
		name: string = null;
	export let classes: string = null;
	export let autofocus: boolean = false;
</script>

<label class="input">
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
