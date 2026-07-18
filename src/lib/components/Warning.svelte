<script lang="ts">
    let { children } = $props();
</script>

<div class="custom-warning">
    <div class="warning-title">
        <span>Warning</span>
    </div>
    <div class="warning-content">
        {#if children}
            {@render children()}
        {/if}
    </div>
</div>

<style>
    .custom-warning {
        padding: 1rem;
        margin: 1.5rem 0;

        border: 1px solid var(--color-yellow-1);
        border-left: 0.25rem solid var(--color-yellow-1);
        border-radius: 4px 4px 4px 4px;
    }
    .warning-title {
        display: flex;
        align-items: center;
        margin-bottom: 0.5rem;

        gap: 0.5rem;
        
        font-weight: bold;
        color: var(--color-yellow-1);

        text-transform: uppercase;
    }
    .warning-content {
        color: var(--color-gray-1);
        font-size: 0.95rem;
        line-height: 1.6;
    }
</style>