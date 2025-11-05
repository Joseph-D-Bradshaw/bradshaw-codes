<script>
	import { Notes } from '$lib';
	import windowStore from '$lib/stores/windows.svelte';
</script>

<div class="dock">
	<button aria-label="Finder" class="dock__app dock__app--finder"></button>
	<button
		onclick={() => windowStore.add(note, 'Obsidian')}
		aria-label="Obsidian"
		class="dock__app dock__app--obsidian"
	></button>
	<button
		onclick={() => windowStore.add(note, 'Notes')}
		aria-label="Notes"
		class="dock__app dock__app--notes dock__app--running"
	></button>
	<div class="divider"></div>
	<button aria-label="Bin" class="dock__app dock__app--bin"></button>
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
		padding: 6px;
		border-radius: 20px;
		background: rgb(151 148 156 / 95%);
		border: 1px solid rgb(161 158 166 / 95%);
	}

	.dock__app {
		width: 60px;
		height: 60px;
		cursor: pointer;
		transform: scale(100%) translateY(0);
		transition: transform 0.2s ease-in-out;
		background-size: cover;
	}

	.dock__app--finder {
		background-image: url('../assets/FinderIcon.png');
	}

	.dock__app--notes {
		background-image: url('../assets/NoteIcon.png');
	}

	.dock__app--obsidian {
		background-image: url('../assets/ObsidianIcon.png');
	}

	.dock__app--bin {
		background-image: url('../assets/TrashIcon.png');
	}

	.dock__app--running {
		position: relative;
	}

	.dock__app--running::after {
		content: '';
		position: absolute;
		bottom: -4px;
		left: 50%;
		transform: translateX(-50%);
		width: 4px;
		height: 4px;
		background: rgb(239 241 240);
		border-radius: 50%;
	}

	.dock__app:hover {
		transform: scale(115%) translateY(-8px);
		transition: transform 0.2s ease-in-out;
	}

	.divider {
		width: 1.5px;
		margin: 4px 4px;
		background: rgb(200 194 202);
	}
</style>
