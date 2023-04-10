<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

Error Page

<code>
	<pre>
		{data?.error}
	</pre>
</code>
