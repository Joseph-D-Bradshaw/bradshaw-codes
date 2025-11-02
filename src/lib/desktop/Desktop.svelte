<script lang="ts">
	import { Dock, Menubar } from '$lib';

	let { children } = $props();
</script>

<Menubar />

{@render children?.()}

<Dock />
