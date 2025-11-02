<script lang="ts">
	import type { Snippet } from 'svelte';

	import favicon from '$lib/assets/favicon.svg';
	import wallpaper from '$lib/assets/wallpaper.jpeg';
	import Desktop from '$lib/desktop/Desktop.svelte';

	let { children }: { children: Snippet } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div id="screen">
	<div class="background" style="background-image: url({wallpaper});"></div>

	<Desktop>
		{@render children?.()}
	</Desktop>
</div>

<style>
	:root {
		font-family: Roboto, monospace;
	}

	#screen {
		position: fixed;
		inset: 0;
	}

	.background {
		position: fixed;
		inset: 0;
		z-index: -100;
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		background-attachment: fixed;
		filter: blur(3px);
	}
</style>
