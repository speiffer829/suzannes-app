<script lang="ts">
	export let value: string | null | undefined | FormDataEntryValue = null,
		placeholder: string | null = null,
		disabled: boolean = false,
		label: string | null = null,
		name: string | null = null;
	export let classes: string | null = null;
	export let autofocus: boolean = false;
	export let other_stuff = {};
	export let type = 'text';
	export let label_classes: string | null = null;
	export let validation_error: string | null = null;
	export let required: boolean = false;
	$: console.log(`${name} value: ${value}`);

	function wipe_error() {
		validation_error = null;
	}
</script>

<label class="input {label_classes}">
	<span class="w-full block text-lg"
		>{label}
		{#if required}
			<span class="text-red-500">*</span>
		{/if}
	</span>
	{#if type === 'text'}
		<input
			on:input={wipe_error}
			{name}
			type="text"
			bind:value
			{placeholder}
			{disabled}
			title={label}
			class={classes}
			class:border-red-500={validation_error}
			{required}
			{...other_stuff}
		/>
	{:else if type === 'email'}
		<input
			{name}
			type="email"
			bind:value
			{placeholder}
			{disabled}
			title={label}
			class={classes}
			class:border-red-500={validation_error}
			{required}
			{...other_stuff}
		/>
	{:else if type === 'password'}
		<input
			{name}
			type="password"
			bind:value
			{placeholder}
			{disabled}
			title={label}
			class={classes}
			{required}
			class:border-red-500={validation_error}
			{...other_stuff}
		/>
	{/if}

	{#if validation_error}
		<span class="text-red-500 text-sm">{validation_error}</span>
	{/if}
</label>
