<script lang="ts">
	import { page } from '$app/stores';
	$: console.log($page);
</script>

<h1>Error!</h1>
<p>{$page.error}</p>
