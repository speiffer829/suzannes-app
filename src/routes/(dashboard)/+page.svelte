<script lang="ts">
	export let data;
</script>

<h1>Welcome to SvelteKit</h1>

{#if data.session}
	<h2>you can be here {data.session.user.email}</h2>
{:else}
	<h2>You can't be here</h2>
{/if}
