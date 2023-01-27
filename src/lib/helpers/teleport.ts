export function teleport(node, { fullScreen = true } = {}) {
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
