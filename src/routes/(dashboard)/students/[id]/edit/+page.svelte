<script lang="ts">
	import type { studentType } from '$lib/types';
	import type { PageData } from './$types';

	export let data: PageData;
	let student: studentType;
	$: ({ student } = data);
</script>

<h1>Edit {student.first_name} {student.last_name}</h1>
