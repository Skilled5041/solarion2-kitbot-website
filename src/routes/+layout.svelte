<script lang="ts">
    import "carbon-components-svelte/css/g100.css";
    import {
        Content,
        Header,
        HeaderNav,
        HeaderNavItem,
        SideNav,
        SideNavItems,
        SideNavLink
    } from "carbon-components-svelte";
    import { page } from "$app/stores";
    import { Home, Information, Email, Code } from "carbon-icons-svelte";

    let isSideNavOpen = false;
</script>

<Header bind:isSideNavOpen company="Solarion2" href="/" platformName="Kit-Bot">
    <HeaderNav>
        <HeaderNavItem href="/">Home</HeaderNavItem>
        <HeaderNavItem href="/about">About</HeaderNavItem>
        <HeaderNavItem href="/contact">Contact</HeaderNavItem>
        <HeaderNavItem href="commands">Commands</HeaderNavItem>
    </HeaderNav>
</Header>

<SideNav bind:isOpen={isSideNavOpen} rail>
    <SideNavItems>
        <SideNavLink href="/" icon={Home} isSelected={$page.url.pathname === "/"} text="Home"/>
        <SideNavLink href="/about" icon={Information} isSelected={$page.url.pathname === "/about"} text="About"/>
        <SideNavLink href="/contact" icon={Email} isSelected={$page.url.pathname === "/contact"} text="Contact"/>
        <SideNavLink href="/commands" icon={Code} isSelected={$page.url.pathname === "/commands"} text="Commands"/>
    </SideNavItems>
</SideNav>

<Content>
    <slot/>
</Content>
