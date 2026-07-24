<script lang="ts">
	import { ModeWatcher } from "mode-watcher";

	import serverIcon from '$lib/assets/server_icon.png';
	import favicon from '$lib/assets/favicon.svg';

	import Header from '$lib/components/Header.svelte';
	import HeaderMobile from '$lib/components/mobile/HeaderMobile.svelte';

	import Sidebar from '$lib/components/Sidebar.svelte';

	import { siteConfig } from '$lib/config';

	let { children } = $props();
</script>

<ModeWatcher/>

<svelte:head>
	<link rel="icon" href={favicon} />
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	
	<meta property="og:title" content="UMW Documentation" />
	<meta property="og:description" content="Welcome to the UMW project!" />
	<meta property="og:url" content="{siteConfig.this_site}" />

	<meta property="og:type" content="website">
	
	<meta property="og:image" content="{serverIcon}">
	<meta itemprop="image" content="{serverIcon}">
	
	<script
        data-name="BMC-Widget"
        data-cfasync="false"
        src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
        data-id="mext.unofficial.worldwide" 
        data-description="Support me on Buy me a coffee!"
        data-message="" 
        data-color="#5F7FFF"
        data-position="Right"
        data-x_margin="18"
        data-y_margin="18">
    </script>
</svelte:head>

<div class="main-container">
	<Sidebar />

	<Header/>
	<HeaderMobile/>

	<main class="main-content">
		{@render children()}
		<hr>
	</main>
</div>

<style>
	:global(:root) {
		/* Global Positioning */
		--sidebar-width: 16rem;
		--sidebar-height: 3.75rem;

		/* Gradients */
		--default-gradient: linear-gradient(-90deg, #ebedf5 0%, rgba(235,237,245,0.8) 80%, rgba(235,237,245,0) 100%);

		/* Colors */
		--color-link: var(--color-purple-0);
		--color-sidebar: var(--color-gray-4);
		--color-background: var(--color-white);
		--color-sitename: var(--color-gray-2);
		--color-text: var(--color-black);
		--color-subtext: var(--color-gray-1);

		--color-white: #fff;
		--color-purple-0: #7253ed;

		--color-blue-1: #183385;
		--color-blue-2: #2c84fa;

		--color-gray-0: #eeebee;
		--color-gray-1: #5c5962;
		--color-gray-2: #27262b;
		--color-gray-3: #eaebf0;
		--color-gray-4: #f5f6fa;

		--color-black: #1a1a1a;

		--color-yellow-1: #e7af06;
	}

	:global(:root.dark) {
        /* Gradients */
		--default-gradient: linear-gradient(-90deg, #18171c 0%, rgba(24, 23, 28, 0.8) 80%, rgba(24, 23, 28, 0) 100%);

		/* Colors */
		--color-link: var(--color-purple-0);
		--color-sidebar: var(--color-gray-5);
		--color-background: var(--color-gray-2);
		--color-sitename: var(--color-gray-1);
		--color-text: var(--color-gray-4);
		--color-subtext: var(--color-gray-6);

		--color-white: #121115;
		--color-purple-0: #7253ed;

		--color-blue-1: #5b7eef;
		--color-blue-2: #729aff;

		--color-gray-0: #212026;
		--color-gray-1: #a19da8;
		--color-gray-2: #27262b;
		--color-gray-3: rgb(23, 23, 25);
		--color-gray-4: #dadce4;
		--color-gray-5: #1a191c;
		--color-gray-6: #b9b7bb;

		--color-yellow-1: #f0bd26;
    }

	:global(main p),
    :global(main h1) {
        color: var(--color-text);
    }

	:global(body) {
		color: var(--color-subtext);
	}

	.main-container {
		max-width: calc(90vw - var(--sidebar-width));
	}
	@media (max-width: 768px) {
		.main-container {
			max-width: 100vw;
			margin-bottom: 10rem;
		}
	}

	.main-content {
		position: relative;
		padding-left: 2.5rem;

		left: var(--sidebar-width);
	}
	@media (max-width: 768px) {
		.main-content {
			top: var(--sidebar-height);
			left: 0;
			padding-left: 1.5rem;
			padding-right: 1.5rem;
		}
	}
</style>