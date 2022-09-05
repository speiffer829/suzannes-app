<script>
	export let style = '';
	export let fullScreen = false;
	export let isShowing = true;

	function teleport(node) {
		if (fullScreen === false) return;
		let target;

		function update() {
			target = document.querySelector('body');
			target.appendChild(node);
			node.hidden = false;
		}

		function destroy() {
			if (node.parentNode) {
				// Child demands parent to kill it. dark
				node.parentNode.removeChild(node);
			}
		}

		update();

		return {
			update,
			destroy
		};
	}
</script>

{#if isShowing}
	<div class="loading-contain" class:full-screen={fullScreen} {style} use:teleport>
		<span class="spinner" />
	</div>
{/if}

<style lang="scss">
	.loading-contain {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;

		&.full-screen {
			position: fixed;
			top: 0;
			left: 0;
			z-index: 1000;
			background: hsl(var(--darkHSL) / 50%);
		}
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
