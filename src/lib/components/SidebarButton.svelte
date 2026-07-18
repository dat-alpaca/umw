<script lang="ts">
    import AngleRight from '$lib/assets/AngleRight.svelte';

    let { onclick, isOpen } = $props();
</script>

<button onclick={onclick} class="sidebar-btn reset" class:sidebar-open={isOpen} aria-label="submenu" aria-expanded="false">
    <AngleRight />
</button>

<style>
    .sidebar-btn {
        display: flex;
        justify-content: center;
        align-items: center;

        width: 1.8rem;
        height: 1.8rem;

        right: 0;
        color: var(--color-purple-0);

        transition: transform 0.20s
    }
    
    .sidebar-btn:hover {
        cursor: pointer;
        background-image: var(--default-gradient);
    }

    :not(.sidebar-open) {
        transform: rotate(90deg);
    }
</style>