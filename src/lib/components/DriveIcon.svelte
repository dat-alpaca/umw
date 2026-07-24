<script lang="ts">
    import { siteConfig } from '$lib/config';
    import Drive from '$lib/assets/Drive.svelte'

    let { iconColor='--color-gray-1' } = $props();
</script>

<a href="{siteConfig.drive_link}" target="_blank" rel="noopener noreferrer" class="header-drive-link" title="Check our Past Exams" style:color={iconColor}>
    <Drive/>
</a>

<style>
    .header-drive-link {
        display: flex;
        align-items: center;
        margin-right: 12px;
    
        width: 1.9rem;
        height: 1.9rem;
        color: var(--color-gray-1);
        transition: transform 0.1s ease-in-out;
    }
    
    .header-drive-link:hover { 
        transform: scale(1.15); 
    }
</style>
 