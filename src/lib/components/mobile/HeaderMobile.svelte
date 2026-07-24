<script>
    import { base } from '$app/paths';
	import { siteConfig } from "$lib/config";
	import DiscordIcon from "../DiscordIcon.svelte";
    import Bars from "$lib/assets/Bars.svelte";
	import HamburgerMenu from "./HamburgerMenu.svelte";
	import DriveIcon from '../DriveIcon.svelte';
	import ThemeSwitch from '../ThemeSwitch.svelte';

    let burgerOn = $state();

    function toggleBurger() {
        burgerOn = !burgerOn;
    }
</script>

<div class="header-mobile mobile-only">
    <div>
        <a class="no-deco sitename" href="{base}/">{siteConfig.site_name_short}</a>
    </div>

    <div class="header-icons">
        <DiscordIcon iconColor="var(--color-purple-0)"/>
        <DriveIcon iconColor="var(--color-purple-0)"/>
        <ThemeSwitch iconColor="var(--color-purple-0)"/>

        <button class="burgi-btn reset" onclick={toggleBurger}>
            <Bars/>
        </button>
    </div>
</div>

{#if burgerOn}
    <HamburgerMenu onclose={() => { burgerOn = false; }} />
{/if}

<style>
    @media (max-width: 768px) {
        .header-mobile {
            position: fixed;
            top: 0;
            z-index: 2000;

            width: 100%;
            height: var(--sidebar-height);
            max-height: var(--sidebar-height);

            padding-left: 1rem;
            padding-right: 1rem;

            display: flex !important;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;

            background-color: var(--color-background);
            border-bottom: 1px solid var(--color-gray-0);
        }

        .header-icons {
            display: flex;
            flex-direction: row;
            align-items: center;
        }

        .burgi-btn {
            display: flex !important;
            align-items: center;

            width: 3rem;
            height: 3rem;
            color: var(--color-purple-0);
        }
    }

    .sitename {
        font-size: 1.3rem;
        line-height: 1.25;
        text-decoration: none;

        color: var(--color-purple-0);
    }
</style>