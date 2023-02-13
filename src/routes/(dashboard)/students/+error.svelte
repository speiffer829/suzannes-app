<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	$: console.log('error stuff', data);
</script>

Error Page
