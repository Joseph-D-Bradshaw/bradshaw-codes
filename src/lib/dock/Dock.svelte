<script>
	import { Notes } from '$lib';
	import windowStore from '$lib/stores/windows.svelte';
</script>

<div class="dock">
	<button aria-label="app-1" class="dock__app dock__app--green"></button>
	<button
		onclick={() => windowStore.add(note, 'Obsidian')}
		aria-label="app-2"
		class="dock__app dock__app--green"
	></button>
	<button
		onclick={() => windowStore.add(note, 'Notes')}
		aria-label="app-3"
		class="dock__app dock__app--yellow dock__app--running"
	></button>
	<button aria-label="app-4" class="dock__app dock__app--blue"></button>
	<div class="divider"></div>
	<button aria-label="app-5" class="dock__app dock__app--blue"></button>
	<button aria-label="app-6" class="dock__app dock__app--blue"></button>
</div>

{#snippet note()}
	<Notes />
{/snippet}

<style>
	.dock {
		position: absolute;
		bottom: 0;
		left: 50%;
		transform: translateX(-50%);
		display: flex;
		gap: 8px;
		margin: 4px;
		padding: 16px;
		border-radius: 32px;
		background: rgb(255 255 255 / 2%);
		box-shadow:
			inset 0 0 12px rgb(255 255 255 / 60%),
			0 0 12px rgb(0 0 0 / 15%);
	}

	.dock__app {
		width: 60px;
		height: 60px;
		border-radius: 20px;
		cursor: pointer;
		transform: scale(100%) translateY(0);
		transition: transform 0.2s ease-in-out;
		box-shadow:
			inset 0 8px 8px rgb(255 255 255 / 30%),
			inset 0 -8px 8px rgb(255 255 255 / 20%);
	}

	.dock__app--green {
		background: hsl(131, 70%, 56%);
	}

	.dock__app--blue {
		background: hsl(205, 98%, 56%);
	}

	.dock__app--yellow {
		background: hsl(49, 98%, 59%);
	}

	.dock__app--running {
		position: relative;
	}

	.dock__app--running::after {
		content: '';
		position: absolute;
		bottom: -12px;
		left: 50%;
		transform: translateX(-50%);
		width: 6px;
		height: 6px;
		background: #142a4b;
		border-radius: 50%;
	}

	.dock__app:hover {
		transform: scale(115%) translateY(-8px);
		transition: transform 0.2s ease-in-out;
	}

	.dock__app:hover + .dock__app,
	.dock__app:has(+ .dock__app:hover) {
		transform: scale(90%);
		transition: transform 0.2s ease-in-out;
	}

	.divider {
		width: 4px;
		margin: 0 4px;
		border-radius: 24px;
		background: rgb(60 119 176 / 60%);
		box-shadow: inset 0 0 4px rgba(60 119 176);
	}
</style>
