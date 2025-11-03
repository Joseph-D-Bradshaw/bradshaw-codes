import type { Snippet } from 'svelte';

type WindowEntry = {
	id: string;
	program: Snippet;
};

function createWindowStore() {
	let windows = $state<WindowEntry[]>([]);

	return {
		get windows() {
			return windows;
		},
		add(program: Snippet) {
			const id = crypto.randomUUID();
			windows.push({ id, program });
		},
		remove(id: string) {
			windows = windows.filter((w) => w.id !== id);
		}
	};
}

const windowStore = createWindowStore();
export default windowStore;
