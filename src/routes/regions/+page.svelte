<script lang="ts">
    import type { Component } from 'svelte';
    import Page from '$lib/regions/_Page.md'

    const regions_data = import.meta.glob('$lib/regions/*.md', {eager: true});
    const regions = Object.fromEntries(
        Object.entries(regions_data)
            .filter(([path]) => !path.endsWith('_Page.md'))
            .map(([path, module]: [string, any]) => {
                const name = path.split('/').pop()!.replace('.md', '');
                return [
                    name,
                    {
                        component: module.default,
                        title: module.metadata?.title ?? name
                    }
                ];
            })
    );

    let selected = $state(Object.keys(regions)[0]);
    let CurrentComponent = $state<Component | null>(regions[selected]?.component ?? null);

    $effect(() => {
        CurrentComponent = regions[selected]?.component ?? null;
    });
</script>

<main>
    <Page></Page>

    <br/>
    <div class="selector-container">
        <h3 class="selector-text"> Selected Country: </h3>
        
        <select bind:value={selected} class="selector">
            {#each Object.entries(regions) as [value, region]}
                <option value={value}>{region.title}</option>
            {/each}
        </select>
    </div>

    <hr/>

    {#if CurrentComponent}
        <CurrentComponent />
    {:else}
        <p>Loading...</p>
    {/if}
</main>

<style>
    .selector-container {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        width: 100%;
    }

    .selector-text {
        margin: 0;
        width: 100%;
        margin-right: 2rem;
    }

    .selector {
        width: 100%;
        padding: 0.5rem 0.5rem;

        cursor: pointer;

        background-color: var(--color-background);
        -webkit-appearance: none;
        appearance: none;
        border-radius: 4px;
        border-color: var(--color-purple-0);
        box-shadow: 0 1px 2px rgba(0,0,0,0.05);
    }
</style>