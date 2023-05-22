<script lang="ts">
    import "carbon-components-svelte/css/g100.css";
    import { Header, HeaderNav, HeaderNavItem } from "carbon-components-svelte";
</script>

<Header company="Solarion2" platformName="Kit-Bot">
    <HeaderNav>
        <HeaderNavItem href="/">Home</HeaderNavItem>
        <HeaderNavItem href="/about">About</HeaderNavItem>
        <HeaderNavItem href="/contact">Contact</HeaderNavItem>
        <HeaderNavItem href="commands">Commands</HeaderNavItem>
    </HeaderNav>
</Header>

<slot/>
