import { cubicOut, sineIn, sineOut } from 'svelte/easing';

export function fall(node, { duration = 700, delay = 0, easing = sineOut }) {
	const window_height = window.innerHeight;

	return {
		duration,
		delay,
		easing,
		css: (t, u) => {
			return `
			transform: translate(-50%, ${u * window_height}px) rotate(${u / 2}turn);
			`;
		}
	};
}
