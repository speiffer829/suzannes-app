<script lang="ts">
	export let value: string = null,
		placeholder: string = null,
		disabled: boolean = false,
		label: string = null,
		name: string = null;
	export let classes: string = null;
	export let autofocus: boolean = false;
	export let other_stuff = {};
	export let type = 'text';
</script>

<label class="input">
	<span class="w-full block text-lg">{label}</span>
	{#if type === 'text'}
		<input
			{name}
			type="text"
			bind:value
			{placeholder}
			{disabled}
			title={label}
			class={classes}
			{autofocus}
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
			{autofocus}
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
			{autofocus}
			{...other_stuff}
		/>
	{/if}
</label>
