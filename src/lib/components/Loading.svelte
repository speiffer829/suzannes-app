<script>
	export let style = '';
</script>

<div class="loading-contain" {style}>
	<span class="spinner" />
</div>

<style lang="scss">
	.loading-contain {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.spinner {
		width: 60px;
		height: 60px;
		border-radius: 100px;
		border: solid var(--dark-transparent) 4px;
		border-top-color: var(--pink);
		animation: spin 500ms infinite;
		animation-timing-function: linear;
	}

	@keyframes spin {
		0% {
			transform: rotate(0turn);
		}
		100% {
			transform: rotate(1turn);
		}
	}
</style>
