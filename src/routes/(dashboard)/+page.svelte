<script lang="ts">
	import type { LayoutData, LayoutParentData, LayoutServerData, PageData } from './$types';

	export let data: PageData;
</script>

<h1>Welcome to SvelteKit</h1>

{#if data?.session}
	<h2>you can be here {data?.session.user.email}</h2>
{:else}
	<h2>You can't be here</h2>
{/if}
