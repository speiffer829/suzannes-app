<script lang="ts">
	export let style: string = '';
	export let fullScreen: boolean = false;
	export let isShowing: boolean = true;

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
		<span class="circle">
			<span class="spinner spin-1" />
			<span class="spinner spin-2" />
			<span class="spinner spin-3" />
		</span>
	</div>
{/if}

<style lang="scss">
	.loading-contain {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		min-height: var(--min-height);

		&.full-screen {
			position: fixed;
			top: 0;
			left: 0;
			z-index: 1100;
			background: hsl(var(--darkHSL) / 50%);
		}
	}

	.circle {
		width: 60px;
		height: 60px;
		border-radius: 100px;
		border: solid var(--dark-transparent) 4px;
		position: relative;
		isolation: isolate;
	}

	.spinner {
		position: absolute;
		left: -4px;
		top: -4px;
		width: calc(100% + 8px);
		height: calc(100% + 8px);
		border-radius: 100px;
		border: solid transparent 4px;
		border-top-color: var(--pink);
		animation: spin 500ms infinite;
		z-index: 3;
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
