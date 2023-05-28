import type { LayoutLoad } from "./$types";
import { browser } from "$app/environment";

export const load = (({params}) => {
    let theme: string | undefined;

    if (browser) {
        theme = window.localStorage.getItem("__carbon-theme") || "white";
    }

    return {
        theme,
    };

}) satisfies LayoutLoad;
