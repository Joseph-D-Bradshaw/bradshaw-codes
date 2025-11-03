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
	import gsap from 'gsap';
	import { Draggable } from 'gsap/Draggable';

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
	let topRightHandle: HTMLDivElement;
	let topLeftHandle: HTMLDivElement;
	let bottomRightHandle: HTMLDivElement;
	let bottomLeftHandle: HTMLDivElement;

	let proxies = [1, 2, 3, 4].map((_) => document.createElement('div'));

	function updateBottomRightDrag(this: Draggable) {
		gsap.set(windowElement, { width: '+=' + this.deltaX });
		gsap.set(windowElement, { height: '+=' + this.deltaY });
	}

	function updateBottomLeftDrag(this: Draggable) {
		gsap.set(windowElement, { width: '-=' + this.deltaX, x: '+=' + this.deltaX });
		gsap.set(windowElement, { height: '+=' + this.deltaY });
	}

	function updateTopRightDrag(this: Draggable) {
		gsap.set(windowElement, { width: '+=' + this.deltaX });
		gsap.set(windowElement, { height: '-=' + this.deltaY, y: '+=' + this.deltaY });
	}

	function updateTopLeftDrag(this: Draggable) {
		gsap.set(windowElement, { width: '-=' + this.deltaX, x: '+=' + this.deltaX });
		gsap.set(windowElement, { height: '-=' + this.deltaY, y: '+=' + this.deltaY });
	}

	onMount(() => {
		makeDraggable({ element: windowElement, trigger: windowBarElement });

		Draggable.create(proxies[0], {
			trigger: bottomRightHandle,
			cursor: 'se-resize',
			onDrag: updateBottomRightDrag
		});

		Draggable.create(proxies[1], {
			trigger: topRightHandle,
			cursor: 'ne-resize',
			onDrag: updateTopRightDrag
		});

		Draggable.create(proxies[2], {
			trigger: bottomLeftHandle,
			cursor: 'sw-resize',
			onDrag: updateBottomLeftDrag
		});

		Draggable.create(proxies[3], {
			trigger: topLeftHandle,
			cursor: 'nw-resize',
			onDrag: updateTopLeftDrag
		});
	});
</script>

<div bind:this={windowElement} class="window" style="height: {height}px; width: {width}px;">
	<div bind:this={windowBarElement} class="window__bar">
		<button aria-label="close" class="window__bar__button window__bar__button--close"></button>
		<button aria-label="minimize" class="window__bar__button window__bar__button--minimize"
		></button>
		<button aria-label="fullscreen" class="window__bar__button window__bar__button--fullscreen">
		</button>
	</div>
	<div class="window__content">
		<h1>{title}</h1>
		{@render children?.()}
	</div>
	<div bind:this={topLeftHandle} class="window__handle window__handle--top-left"></div>
	<div bind:this={topRightHandle} class="window__handle window__handle--top-right"></div>
	<div bind:this={bottomLeftHandle} class="window__handle window__handle--bottom-left"></div>
	<div bind:this={bottomRightHandle} class="window__handle window__handle--bottom-right"></div>
</div>

<style>
	.window {
		position: relative;
		display: flex;
		flex-direction: column;
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
		display: flex;
		flex-direction: column;
		flex-grow: 1;
		padding: 12px;
	}

	.window__handle {
		position: absolute;
		height: 20px;
		width: 20px;
	}

	.window__handle--top-left {
		top: 0;
		left: 0;
	}

	.window__handle--top-right {
		top: 0;
		right: 0;
	}

	.window__handle--bottom-left {
		bottom: 0;
		left: 0;
	}

	.window__handle--bottom-right {
		bottom: 0;
		right: 0;
	}
</style>
