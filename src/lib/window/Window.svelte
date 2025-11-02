<script module lang="ts">
	import { onMount, type Snippet } from 'svelte';

	export type OSWindow = {
		id: string;
		title: string;
		width: number;
		height: number;
		x: number;
		y: number;
		z: number;
		minimized: boolean;
		isOpen: boolean;
	};
</script>

<script lang="ts">
	import { makeDraggable } from '$lib';

	let {
		id,
		title,
		children,
		width,
		height,
		x,
		y,
		z,
		minimized,
		isOpen
	}: OSWindow & { children?: Snippet } = $props();

	let windowElement: HTMLDivElement;
	let windowBarElement: HTMLDivElement;

	onMount(() => {
		makeDraggable({ element: windowElement, trigger: windowBarElement });
	});
</script>

<div bind:this={windowElement} class="window" style="height: {height}px; width: {width}px;">
	<div bind:this={windowBarElement} class="window__bar">
		<button aria-label="close" class="window__bar__button window__bar__button--close"></button>
		<button aria-label="minimize" class="window__bar__button window__bar__button--minimize"
		></button>
		<button aria-label="fullscreen" class="window__bar__button window__bar__button--fullscreen"
		></button>
	</div>
	<div class="window__content">
		<h1>{title}</h1>
		{@render children?.()}
	</div>
</div>

<style>
	.window {
		border-radius: 22px;
		background: var(--window-bg, #fcfcfc);
		box-shadow: 0 0 12px rgb(80 80 80 / 30%);
	}

	.window__bar {
		height: 20px;
		padding: 8px 12px;
		cursor: pointer;
	}

	.window__bar__button {
		width: 10px;
		height: 10px;
		border: none;
		border-radius: 9999px;
		cursor: pointer;
	}

	.window__bar__button--close {
		background: #fa756a;
	}

	.window__bar__button--minimize {
		background: #fecf02;
	}

	.window__bar__button--fullscreen {
		background: #17c42c;
	}

	.window__content {
		height: 100%;
		padding: 12px;
	}
</style>
