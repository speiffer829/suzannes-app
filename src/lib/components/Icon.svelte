<script lang="ts">
	export let icon:
		| 'arrow-left'
		| 'activity'
		| 'alert-circle'
		| 'clipboard'
		| 'check'
		| 'clock'
		| 'credit-card'
		| 'edit'
		| 'home'
		| 'logout'
		| 'more'
		| 'plus'
		| 'printer'
		| 'search'
		| 'settings'
		| 'trash'
		| 'user'
		| 'user-plus'
		| 'x';
	export let size: number = 24;
	export let stroke_width: number = 2;
	export let classes: string = '';
</script>

{#if icon == 'arrow-left'}
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={size}
		height={size}
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width={stroke_width}
		stroke-linecap="round"
		stroke-linejoin="round"
		class="{classes} feather feather-arrow-left"
		><line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" /></svg
	>
{:else if icon == 'activity'}
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={size}
		height={size}
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width={stroke_width}
		stroke-linecap="round"
		stroke-linejoin="round"
		class="{classes} feather feather-activity"
		><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg
	>
{:else if icon == 'alert-circle'}
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={size}
		height={size}
		stroke-width={stroke_width}
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-linecap="round"
		stroke-linejoin="round"
		class="{classes} feather feather-alert-circle"
		><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line
			x1="12"
			y1="16"
			x2="12.01"
			y2="16"
		/></svg
	>
{:else if icon == 'clipboard'}
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={size}
		height={size}
		stroke-width={stroke_width}
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-linecap="round"
		stroke-linejoin="round"
		class="{classes} feather feather-clipboard"
		><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /><rect
			x="8"
			y="2"
			width="8"
			height="4"
			rx="1"
			ry="1"
		/></svg
	>
{:else if icon == 'check'}
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={size}
		height={size}
		stroke-width={stroke_width}
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-linecap="round"
		stroke-linejoin="round"
		class="{classes} feather feather-check"><polyline points="20 6 9 17 4 12" /></svg
	>
{:else if icon == 'clock'}
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={size}
		height={size}
		stroke-width={stroke_width}
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-linecap="round"
		stroke-linejoin="round"
		class="{classes} feather feather-clock"
		><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg
	>
{:else if icon == 'credit-card'}
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={size}
		height={size}
		stroke-width={stroke_width}
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-linecap="round"
		stroke-linejoin="round"
		class="{classes} feather feather-credit-card"
		><rect x="1" y="4" width="22" height="16" rx="2" ry="2" /><line
			x1="1"
			y1="10"
			x2="23"
			y2="10"
		/></svg
	>
{:else if icon == 'edit'}
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={size}
		height={size}
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width={stroke_width}
		stroke-linecap="round"
		stroke-linejoin="round"
		class="{classes} feather feather-edit"
		><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path
			d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"
		/></svg
	>
{:else if icon == 'home'}
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={size}
		height={size}
		stroke-width={stroke_width}
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-linecap="round"
		stroke-linejoin="round"
		class="{classes} feather feather-home"
		><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline
			points="9 22 9 12 15 12 15 22"
		/></svg
	>
{:else if icon == 'logout'}
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={size}
		height={size}
		stroke-width={stroke_width}
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-linecap="round"
		stroke-linejoin="round"
		class="{classes} feather feather-log-out"
		><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line
			x1="21"
			y1="12"
			x2="9"
			y2="12"
		/></svg
	>
{:else if icon == 'more'}
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={size}
		height={size}
		stroke-width={stroke_width}
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-linecap="round"
		stroke-linejoin="round"
		class="{classes} feather feather-more-horizontal"
		><circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /><circle
			cx="5"
			cy="12"
			r="1"
		/></svg
	>
{:else if icon == 'plus'}
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={size}
		height={size}
		stroke-width={stroke_width}
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-linecap="round"
		stroke-linejoin="round"
		class="{classes} feather feather-plus"
		><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg
	>
{:else if icon == 'printer'}
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={size}
		height={size}
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width={stroke_width}
		stroke-linecap="round"
		stroke-linejoin="round"
		class="{classes} feather feather-printer"
		><polyline points="6 9 6 2 18 2 18 9" /><path
			d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"
		/><rect x="6" y="14" width="12" height="8" /></svg
	>
{:else if icon == 'search'}
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={size}
		height={size}
		stroke-width={stroke_width}
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-linecap="round"
		stroke-linejoin="round"
		class="{classes} feather feather-search"
		><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg
	>
{:else if icon == 'settings'}
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={size}
		height={size}
		stroke-width={stroke_width}
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-linecap="round"
		stroke-linejoin="round"
		class="{classes} feather feather-settings"
		><circle cx="12" cy="12" r="3" /><path
			d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
		/></svg
	>
{:else if icon == 'trash'}
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={size}
		height={size}
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width={stroke_width}
		stroke-linecap="round"
		stroke-linejoin="round"
		class="{classes} feather feather-trash-2"
		><polyline points="3 6 5 6 21 6" /><path
			d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
		/><line x1="10" y1="11" x2="10" y2="17" /><line x1="14" y1="11" x2="14" y2="17" /></svg
	>
{:else if icon == 'user'}
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={size}
		height={size}
		stroke-width={stroke_width}
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-linecap="round"
		stroke-linejoin="round"
		class="{classes} feather feather-user"
		><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg
	>
{:else if icon == 'user-plus'}
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={size}
		height={size}
		stroke-width={stroke_width}
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-linecap="round"
		stroke-linejoin="round"
		class="feather feather-user-plus"
		><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="8.5" cy="7" r="4" /><line
			x1="20"
			y1="8"
			x2="20"
			y2="14"
		/><line x1="23" y1="11" x2="17" y2="11" /></svg
	>
{:else if icon == 'x'}
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={size}
		height={size}
		stroke-width={stroke_width}
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-linecap="round"
		stroke-linejoin="round"
		class="{classes} feather feather-x"
		><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg
	>
{/if}
