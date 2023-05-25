<script lang="ts">
    import "carbon-components-svelte/css/all.css";
    import {
        Theme,
        Content,
        Header,
        HeaderNav,
        HeaderNavItem,
        SideNav,
        SideNavItems,
        SideNavLink, HeaderUtilities, HeaderGlobalAction, Modal
    } from "carbon-components-svelte";
    import { page } from "$app/stores";
    import { Home, Information, Email, Code, SettingsAdjust } from "carbon-icons-svelte";

    let isSideNavOpen = false;
    let isSettingsModalOpen = false;
</script>


<Header bind:isSideNavOpen company="Solarion2" href="/" platformName="Kit-Bot">
    <HeaderNav>
        <HeaderNavItem href="/" isSelected={$page.url.pathname === "/"}>Home</HeaderNavItem>
        <HeaderNavItem href="/about" isSelected={$page.url.pathname === "/about"}>About</HeaderNavItem>
        <HeaderNavItem href="/contact" isSelected={$page.url.pathname === "/contact"}>Contact</HeaderNavItem>
        <HeaderNavItem href="commands" isSelected={$page.url.pathname === "/commands"}>Commands</HeaderNavItem>
    </HeaderNav>
    <HeaderUtilities>
        <HeaderGlobalAction aria-label="Settings" icon={SettingsAdjust}
                            on:click={() => isSettingsModalOpen = !isSettingsModalOpen}>
        </HeaderGlobalAction>
    </HeaderUtilities>
</Header>

<SideNav bind:isOpen={isSideNavOpen} rail>
    <SideNavItems>
        <SideNavLink href="/" icon={Home} isSelected={$page.url.pathname === "/"} text="Home"/>
        <SideNavLink href="/about" icon={Information} isSelected={$page.url.pathname === "/about"} text="About"/>
        <SideNavLink href="/contact" icon={Email} isSelected={$page.url.pathname === "/contact"} text="Contact"/>
        <SideNavLink href="/commands" icon={Code} isSelected={$page.url.pathname === "/commands"} text="Commands"/>
    </SideNavItems>
</SideNav>


<Modal bind:open={isSettingsModalOpen} modalHeading="Settings" passiveModal={true} size="xs">
    <Theme persist persistKey="__carbon-theme" render="select"/>
</Modal>

<Content>
    <slot/>
</Content>
