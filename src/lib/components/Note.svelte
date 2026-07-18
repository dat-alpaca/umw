<script lang="ts">
    let { children } = $props();
</script>

<div class="custom-note">
    <div class="note-title">
        <span>Note</span>
    </div>
    <div class="note-content">
        {#if children}
            {@render children()}
        {/if}
    </div>
</div>

<style>
    .custom-note {
        padding: 1rem;
        margin: 1.5rem 0;

        border: 1px solid var(--color-blue-2);
        border-left: 0.25rem solid var(--color-blue-1);
        border-radius: 4px 4px 4px 4px;
    }
    .note-title {
        display: flex;
        align-items: center;
        margin-bottom: 0.5rem;

        gap: 0.5rem;
        
        font-weight: bold;
        color: var(--color-blue-1);

        text-transform: uppercase;
    }
    .note-content {
        color: var(--color-gray-1);
        font-size: 0.95rem;
        line-height: 1.6;
    }
</style>