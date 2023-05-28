<script lang="ts">
    import "carbon-components-svelte/css/all.css";
    import "@carbon/styles/css/styles.css";
    import "@carbon/charts/styles.css";
    import {
        Theme,
        Content,
        Header,
        HeaderNav,
        HeaderNavItem,
        HeaderUtilities,
        HeaderGlobalAction,
        Modal,
        HeaderPanelLinks,
        HeaderAction,
        HeaderPanelLink
    } from "carbon-components-svelte";
    import { page } from "$app/stores";
    import { SettingsAdjust, Menu } from "carbon-icons-svelte";
    import { invalidateAll } from "$app/navigation";
    import { browser } from "$app/environment";

    let isOpen = false;
    let isSideNavOpen = false;
    let isSettingsModalOpen = false;

    $: {
        if (browser && !isSettingsModalOpen) {
            invalidateAll();
        }
    }

</script>


<Header bind:isSideNavOpen company="Solarion2" href="/" platformName="Kit-Bot">
    <HeaderNav>
        <HeaderNavItem href="/" isSelected={$page.url.pathname === "/"}>Home</HeaderNavItem>
        <HeaderNavItem href="/commands" isSelected={$page.url.pathname === "/commands"}>Commands</HeaderNavItem>
        <HeaderNavItem href="/stats" isSelected={$page.url.pathname === "/stats"}>Stats</HeaderNavItem>
        <HeaderNavItem href="/about" isSelected={$page.url.pathname === "/about"}>About</HeaderNavItem>
        <HeaderNavItem href="/contact" isSelected={$page.url.pathname === "/contact"}>Contact</HeaderNavItem>
    </HeaderNav>
    <HeaderUtilities>
        <HeaderGlobalAction aria-label="Settings" icon={SettingsAdjust}
                            on:click={() => isSettingsModalOpen = !isSettingsModalOpen}>
        </HeaderGlobalAction>
        <HeaderAction bind:isOpen icon={Menu}>
            <HeaderPanelLinks>
                <HeaderPanelLink href="/">Home</HeaderPanelLink>
                <HeaderPanelLink href="/commands">Commands</HeaderPanelLink>
                <HeaderPanelLink href="/stats">Stats</HeaderPanelLink>
                <HeaderPanelLink href="/about">About</HeaderPanelLink>
                <HeaderPanelLink href="/contact">Contact</HeaderPanelLink>
            </HeaderPanelLinks>
        </HeaderAction>
    </HeaderUtilities>
</Header>


<Modal bind:open={isSettingsModalOpen} modalHeading="Settings" passiveModal={true}
       size="xs">
    <Theme persist persistKey="__carbon-theme" render="select" select={{
        themes: ["white", "g10", "g90", "g100"],
        labelText: "Themes",
        "hideLabel": false
    }}/>
</Modal>

<Content>
    <slot/>
</Content>
