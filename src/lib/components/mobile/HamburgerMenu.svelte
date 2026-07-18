<script lang="ts">
	import { siteConfig } from '$lib/config';
    import { fade } from 'svelte/transition';
    import { navigation } from '$lib/navigation';
	import SidebarItem from '../SidebarItem.svelte';

    let { onclose } = $props();
</script>

<div class="fullscreen-overlay" transition:fade={{ duration: 200 }}>
    <ul class="sidebar-navigation-mobile">
        {#each navigation as item}
            <SidebarItem url={item.url} title={item.title} children={item.children} callback={onclose}/>
        {/each}
    </ul>
</div>

<style>
    @media (max-width: 768px) {
        .fullscreen-overlay {
            position: fixed !important;
            top: var(--sidebar-height);
            left: 0;
            width: 100vw;
            height: 100vh;
            
            z-index: 9000;
            background-color: var(--color-background);
        }

        .sidebar-navigation-mobile{
            padding-top: 2rem;
            margin: 0;
            padding-left: 0;
            list-style: none;

            height: 100%;

            overflow-y: auto;
            overflow-x: hidden;
        }
    }
</style>