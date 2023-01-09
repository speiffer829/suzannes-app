import { writable } from 'svelte/store';

function newToast() {
	const { subscribe, update } = writable([]);

	function send(
		msg: string,
		{
			color = 'pink',
			duration = 3000,
			isPersisting = false
		}?: {
			duration?: number;
			color?: string;
			isPersisting?: boolean;
		} = {}
	) {
		const id = Math.floor(Math.random() * 1000);
		update((state) => [...state, { id, msg, duration, color, isPersisting }]);
		return id;
	}

	function remove(id) {
		update((state) => {
			const newState = state.filter((s) => s.id !== id);

			return newState;
		});
	}

	return { subscribe, send, remove };
}

export const toast = newToast();
