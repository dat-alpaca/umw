<script lang="ts">
    import { siteConfig } from '$lib/config';
    import Envelope from '$lib/assets/Envelope.svelte'

    let { iconColor='--color-gray-1' } = $props();
</script>

<a href="mailto:{siteConfig.email}" class="header-contact-link" title="Contact us!" style:color={iconColor}>
    <Envelope/>
</a>

<style>
    .header-contact-link {
        display: flex;
        align-items: center;
        margin-right: 12px;
    
        width: 1.9rem;
        height: 1.9rem;
        color: var(--color-gray-1);
        transition: transform 0.1s ease-in-out;
    }
    
    .header-contact-link:hover { 
        transform: scale(1.15); 
    }
</style>
 