<script lang="ts">
	import { siteConfig } from "$lib/config";

    const year = new Date().getFullYear();

</script>

<footer class="umw-footer">Copyright © {year} {siteConfig.organization} All Rights Reserved.</footer>

<style>
    .umw-footer {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;

        padding-bottom: 1.5rem;
    }
</style>