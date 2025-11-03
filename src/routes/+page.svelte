<script lang="ts">
	import { Window, Notes } from '$lib';
	import windowStore from '$lib/stores/windows.svelte';
</script>

{#each windowStore.windows as window (window.id)}
	<Window width={400} height={300} onclose={() => windowStore.remove(window.id)} title="Notes">
		{@render window.program()}
	</Window>
{/each}

<button
	onclick={() => {
		windowStore.add(note);
	}}>Add Window</button
>

{#snippet note()}
	<Notes />
{/snippet}
