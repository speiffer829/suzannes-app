<script lang="ts">
	import type { LayoutData } from './$types';

	export let data: LayoutData;
</script>

<div class="grid lg:grid-cols-5 md:grid-cols-2">
	<img
		src={`/unprotected-imgs/${data.img}.png`}
		alt="painting of gymnast"
		class="lg:col-span-3 block md:min-h-screen h-36 w-full max-w-full object-cover"
	/>
	<div class="lg:col-span-2 flex justify-center align-center">
		<slot />
	</div>
</div>
