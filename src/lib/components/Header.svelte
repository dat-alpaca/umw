<script>
	import { siteConfig } from "$lib/config";
	import magnifyingGlass from '$lib/assets/magnifying-glass.svg';
    import DiscordIcon from "./DiscordIcon.svelte";
	import DriveIcon from "./DriveIcon.svelte";
	import ThemeSwitch from "./ThemeSwitch.svelte";
</script>

<div class="header desktop-only">

    <input type="text" id="search-input" tabindex="0" placeholder="Search {siteConfig.site_name}" autocomplete="off">
    <label for="search-input">
        <svg viewBox="0 0 24 24" class="search-icon" aria-hidden="true">
            <use href="{magnifyingGlass}"></use>
        </svg>
    </label>

    <div class="header-icons">
        <DriveIcon/>
        <DiscordIcon/>
        <ThemeSwitch/>
    </div>
</div>

<style>
    .header {
        position: relative;
        left: var(--sidebar-width);
        height: var(--sidebar-height);
        max-height: var(--sidebar-height);

        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        border-bottom: 1px solid var(--color-gray-0);
    }

    .header-icons {
        display: flex;
        flex-direction: row;
    }

    #search-input {
        padding-top: 1.25rem;
        padding-bottom: 1.25rem;
        padding-left: 2rem;

        font-size: 0.875rem;
        background-color: var(--color-background);
        border: 0;

        width: 50%;
    }
</style>