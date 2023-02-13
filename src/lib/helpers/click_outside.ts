import type { Action } from 'svelte/action';

interface Attributes {
	'on:click-outside': (event: CustomEvent) => void;
}

export const click_outside: Action<HTMLElement, any, Attributes> = (node) => {
	// initialize
	const handle_click = (e: MouseEvent) => {
		if (e?.target instanceof Element) {
			if (!node.contains(e.target)) {
				node.dispatchEvent(
					new CustomEvent('click-outside', { detail: 'Detects A Click Outside.' })
				);
			}
		}
	};

	document.addEventListener('click', handle_click, true);

	return {
		destroy() {
			// whenever action is destroyed
			document.removeEventListener('click', handle_click, true);
		}
	};
};
