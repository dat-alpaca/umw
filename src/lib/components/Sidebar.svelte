<script lang="ts">
    import { base } from '$app/paths';

    import { navigation } from '$lib/navigation';
    import { siteConfig } from '$lib/config';

	import SidebarItem from './SidebarItem.svelte';
</script>

<header class="sidebar desktop-only">
    <div class="sidebar-title">
        <a class="no-deco sitename" href="{base}/">{siteConfig.site_name}</a>
    </div>

    <ul class="sidebar-navigation">
        {#each navigation as item}
            <SidebarItem url={item.url} title={item.title} children={item.children}/>
        {/each}
    </ul>
</header>

<style>
    .sidebar {
        position: fixed;
        width: var(--sidebar-width) !important;
        height: 100vh;

        display: flex;
        flex-direction: column;

        background-color: var(--color-sidebar);
        border-right: 1px solid var(--color-gray-0);
    }

    .sidebar-title {
        height: var(--sidebar-height);
        max-height: var(--sidebar-height);

        padding: 0.75rem 2rem 0.75rem 2rem;
        border-bottom: 1px solid var(--color-gray-0);
    }

    .sidebar-title:hover {
        background-image: var(--default-gradient);
    }

    .sitename {
        color: var(--color-sitename);
        font-size: 1.5rem;
        line-height: 1.25;
        text-decoration: none;
    }

    .sidebar-navigation {
        padding-top: 2rem;
        margin: 0;
        padding-left: 0;
        list-style: none;

        height: 100%;

        overflow-y: auto;
        overflow-x: hidden;
    }
</style>