<div class="menubar">
	<div class="menubar__left">
		<span class="menubar__logo">
			<svg
				aria-hidden="true"
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				fill="currentColor"
				viewBox="0 0 24 24"
			>
				<path
					d="M17.537 12.625a4.421 4.421 0 0 0 2.684 4.047 10.96 10.96 0 0 1-1.384 2.845c-.834 1.218-1.7 2.432-3.062 2.457-1.34.025-1.77-.794-3.3-.794-1.531 0-2.01.769-3.275.82-1.316.049-2.317-1.318-3.158-2.532-1.72-2.484-3.032-7.017-1.27-10.077A4.9 4.9 0 0 1 8.91 6.884c1.292-.025 2.51.869 3.3.869.789 0 2.27-1.075 3.828-.917a4.67 4.67 0 0 1 3.66 1.984 4.524 4.524 0 0 0-2.16 3.805m-2.52-7.432A4.4 4.4 0 0 0 16.06 2a4.482 4.482 0 0 0-2.945 1.516 4.185 4.185 0 0 0-1.061 3.093 3.708 3.708 0 0 0 2.967-1.416Z"
				/>
			</svg>
		</span>

		<span class="menubar__option menubar__option--bold">Notes</span>
		<span class="menubar__option">File</span>
		<span class="menubar__option">Edit</span>
		<span class="menubar__option">View</span>
		<span class="menubar__option">Help</span>
	</div>

	<div class="menubar__right">
		<span class="menubar__option">Icon</span>
		<span class="menubar__option">Icon</span>
		<span class="menubar__option">Icon</span>
		<span class="menubar__option menubar__option--thin"> Sat Nov 2 5 16 AM</span>
	</div>
</div>

<style>
	.menubar {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 12px;
		height: 24px;
		width: 100%;
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
		filter: drop-shadow(0 1px 2px rgb(80 80 80 / 15%));
	}

	.menubar__option {
		text-shadow: 0 1px 2px rgb(80 80 80 / 40%);
	}

	.menubar__option--bold {
		font-weight: 700;
	}

	.menubar__option--thin {
		font-weight: 300;
	}

	.menubar__logo,
	.menubar__option {
		color: #fff;
		cursor: pointer;
	}
</style>
