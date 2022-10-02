<script lang="ts">
	import type { studentType } from '$lib/types';
	export let data: studentType;
</script>

<h1>Classes {data.first_name} {data.last_name}</h1>
