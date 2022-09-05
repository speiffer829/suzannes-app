import { writable } from 'svelte/store';

function newToast() {
	const { subscribe, update } = writable([]);

	function send({ msg, duration = 3000, color = 'pink' }) {
		const id = Math.floor(Math.random() * 1000);
		update((state) => [...state, { id, msg, duration, color }]);
	}

	function remove(id) {
		update((state) => {
			console.log('remove arr', state);

			const newState = state.filter((s) => s.id !== id);

			return newState;
		});
	}

	return { subscribe, send, remove };
}

export const toast = newToast();