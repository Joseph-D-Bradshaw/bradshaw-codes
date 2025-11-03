import type { Snippet } from 'svelte';

type WindowEntry = {
	id: string;
	title: string;
	program: Snippet;
};

function createWindowStore() {
	let windows = $state<WindowEntry[]>([]);
	let activeWindowTitle = $state('Finder');

	return {
		get windows() {
			return windows;
		},
		get activeWindowTitle() {
			return activeWindowTitle;
		},
		add(program: Snippet, title: string) {
			const id = crypto.randomUUID();
			windows.push({ id, program, title });
			activeWindowTitle = title;
		},
		remove(id: string) {
			windows = windows.filter((w) => w.id !== id);
		},
		setActiveWindowTitle(title: string) {
			activeWindowTitle = title;
		}
	};
}

const windowStore = createWindowStore();
export default windowStore;
