<script>
    import DiscordIcon from "./DiscordIcon.svelte";
	import DriveIcon from "./DriveIcon.svelte";
	import ThemeSwitch from "./ThemeSwitch.svelte";
	import Contact from "./Contact.svelte";
</script>

<div class="header desktop-only">
    <div class="header-icons">
        <Contact/>
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
        justify-content: flex-end;
        align-items: center;

        border-bottom: 1px solid var(--color-gray-0);
    }

    .header-icons {
        display: flex;
        flex-direction: row;
    }
</style>