<script lang="ts">
    import { resolve } from '$app/paths';
    import { page } from '$app/state';
    
    import SidebarButton from './SidebarButton.svelte';

    let { url, title, children, callback = null } = $props();
    let isOpen: boolean = $state(false);

    function toggleSidebarItem() {
        isOpen = !isOpen;
    }
</script>

<li class="sidebar-item">
    <!-- Root -->
    <div class="sidebar-item-combined" class:active={page.url.pathname === url}>
        <a href={resolve(url)} onclick={callback}> {title} </a>
        
        {#if children && children.length > 0}
            <SidebarButton onclick={toggleSidebarItem} isOpen={isOpen}/>
        {/if}
    </div>
    
    <!-- Children -->
    {#if children && children.length > 0}
        <ul class="subsidebar" class:subsidebar-hidden={!isOpen}>
        {#each children as child}
            <li class="subsidebar-item">
                <a href={resolve(child.url)} onclick={callback}> {child.title} </a>
            </li>
        {/each}
        </ul>
    {/if}
</li>

<style>
    /* Sidebar */
    .sidebar-item {
        padding-left: 1rem;
    }

    .sidebar-item-combined.active {
        background-image: var(--default-gradient);
    }

    .sidebar-item-combined:hover {
        background-image: var(--default-gradient);
    }

    /* Combined */
    .sidebar-item-combined {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        min-height: 2rem;
    }

    /* Subsidebar */
    .subsidebar-item {
        padding: 0;
        line-height: 2;
        list-style: none;
    }

    .subsidebar-item > a {
        color: var(--color-gray-1);
        text-decoration: none;
    }

    .subsidebar-item:active{
        background-image: var(--default-gradient);
    }

    .subsidebar-hidden {
        display: none;
    }

    .subsidebar-item:hover{
        background-image: var(--default-gradient);
    }
</style>

