<script lang="ts">
	import { toggleMode, mode } from "mode-watcher";
    import Moon from "$lib/assets/Moon.svelte";
	import Sun from "$lib/assets/Sun.svelte";

    let { iconColor='--color-gray-1' } = $props();
</script>
 
<button onclick={toggleMode} class="reset theme-switch-link" title="Change the mode!" style:color={iconColor}>
    {#if mode.current == "light"}
        <Moon/>
    {:else if mode.current == "dark"}
        <Sun/>
    {/if}
</button>
    
<style>
    .theme-switch-link {
        display: flex;
        align-items: center;
        margin-right: 12px;
        padding: 0;
        cursor: pointer;
        margin-right: 0;

        width: 1.9rem;
        height: 1.9rem;
        color: var(--color-gray-1);
        transition: transform 0.1s ease-in-out;
    }
    
    .theme-switch-link :global(svg) {
        width: 1.7rem;
        height: 1.7rem;
    }

    .theme-switch-link:hover { 
        transform: scale(1.15); 
    }
</style>
 