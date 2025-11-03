<script>
	import windowStore from '$lib/stores/windows.svelte';
</script>

<div class="menubar">
	<div class="menubar__left">
		{@render appleLogo()}

		<span class="menubar__option menubar__option--bold">{windowStore.activeWindowTitle}</span>
		<span class="menubar__option">File</span>
		<span class="menubar__option">Edit</span>
		<span class="menubar__option">View</span>
		<span class="menubar__option">Help</span>
	</div>

	<div class="menubar__right">
		{@render speakerSymbol()}
		{@render wifiSymbol()}
		{@render batterySymbol()}
		<span class="menubar__option"> Sat Nov 2 5 16 AM</span>
	</div>
</div>

{#snippet appleLogo()}
	<span class="menubar__logo">
		<svg
			aria-hidden="true"
			xmlns="http://www.w3.org/2000/svg"
			fill="currentColor"
			viewBox="0 0 24 24"
		>
			<path
				d="M17.537 12.625a4.421 4.421 0 0 0 2.684 4.047 10.96 10.96 0 0 1-1.384 2.845c-.834 1.218-1.7 2.432-3.062 2.457-1.34.025-1.77-.794-3.3-.794-1.531 0-2.01.769-3.275.82-1.316.049-2.317-1.318-3.158-2.532-1.72-2.484-3.032-7.017-1.27-10.077A4.9 4.9 0 0 1 8.91 6.884c1.292-.025 2.51.869 3.3.869.789 0 2.27-1.075 3.828-.917a4.67 4.67 0 0 1 3.66 1.984 4.524 4.524 0 0 0-2.16 3.805m-2.52-7.432A4.4 4.4 0 0 0 16.06 2a4.482 4.482 0 0 0-2.945 1.516 4.185 4.185 0 0 0-1.061 3.093 3.708 3.708 0 0 0 2.967-1.416Z"
			/>
		</svg>
	</span>
{/snippet}

{#snippet wifiSymbol()}
	<span class="menubar__logo">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"
			><path
				d="M320 160C229.1 160 146.8 196 86.3 254.6C73.6 266.9 53.3 266.6 41.1 253.9C28.9 241.2 29.1 220.9 41.8 208.7C113.7 138.9 211.9 96 320 96C428.1 96 526.3 138.9 598.3 208.7C611 221 611.3 241.3 599 253.9C586.7 266.5 566.4 266.9 553.8 254.6C493.2 196 410.9 160 320 160zM272 496C272 469.5 293.5 448 320 448C346.5 448 368 469.5 368 496C368 522.5 346.5 544 320 544C293.5 544 272 522.5 272 496zM200 390.2C188.3 403.5 168.1 404.7 154.8 393C141.5 381.3 140.3 361.1 152 347.8C193 301.4 253.1 272 320 272C386.9 272 447 301.4 488 347.8C499.7 361.1 498.4 381.3 485.2 393C472 404.7 451.7 403.4 440 390.2C410.6 356.9 367.8 336 320 336C272.2 336 229.4 356.9 200 390.2z"
			/>
		</svg>
	</span>
{/snippet}

{#snippet speakerSymbol()}
	<span class="menubar__logo">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"
			><rect width="256" height="256" fill="none" /><path
				d="M53.92,34.62A8,8,0,1,0,42.08,45.38L73.55,80H32A16,16,0,0,0,16,96v64a16,16,0,0,0,16,16H77.25l69.84,54.31A8,8,0,0,0,160,224V175.09l42.08,46.29a8,8,0,1,0,11.84-10.76ZM32,96H72v64H32Zm154,47.87a24,24,0,0,0,0-31.72,8,8,0,1,1,12-10.57,40,40,0,0,1,0,52.88,8,8,0,0,1-12-10.59ZM106.23,68.38a8,8,0,0,1,1-11.7l39.85-31A8,8,0,0,1,160,32v74.83a8,8,0,0,1-13.92,5.38ZM248,128a79.9,79.9,0,0,1-20.37,53.34,8,8,0,0,1-11.92-10.67,64,64,0,0,0,0-85.33,8,8,0,1,1,11.92-10.67A79.83,79.83,0,0,1,248,128Z"
				fill="#000000"
			/></svg
		>
	</span>
{/snippet}

{#snippet batterySymbol()}
	<span class="menubar__logo">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="#000000">
			<g fill="#000000">
				<g fill="#000000">
					<g fill="#000000">
						<path
							d="M61,26v-6c0-1.657-1.343-3-3-3H3c-1.657,0-3,1.343-3,3v24c0,1.657,1.343,3,3,3h55c1.657,0,3-1.343,3-3v-6&#10;&#9;&#9;&#9;&#9;c1.657,0,3-1.343,3-3v-6C64,27.343,62.657,26,61,26z M55,41H6V23h49V41z M52,26H9v12h43V26z"
							fill="#000000"
						/>
					</g>
				</g>
			</g>
		</svg>
	</span>
{/snippet}

<style>
	.menubar {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 12px;
		height: 28px;
		width: 100%;
		background: rgb(231 212 231);
		box-shadow:
			inset 0 -4px 12px rgb(60 60 60 / 10%),
			0 4px 8px rgb(80 80 80 / 10%);
		user-select: none;
	}

	.menubar__left,
	.menubar__right {
		display: flex;
		align-items: center;
		gap: 0.8em;
	}

	.menubar__logo {
		height: 20px;
		width: 20px;
		margin-bottom: 2px;
		filter: drop-shadow(0 1px 2px rgb(80 80 80 / 15%));
	}

	.menubar__option--bold {
		font-weight: 700;
	}

	.menubar__logo,
	.menubar__option {
		color: black;
		cursor: pointer;
	}
</style>
