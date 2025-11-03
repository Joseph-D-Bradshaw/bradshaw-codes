<script lang="ts">
	import { Window } from '$lib';
	import windowStore from '$lib/stores/windows.svelte';
</script>

{#each windowStore.windows as window (window.id)}
	<Window
		width={400}
		height={300}
		onclose={() => windowStore.remove(window.id)}
		title={window.title}
	>
		{@render window.program()}
	</Window>
{/each}
