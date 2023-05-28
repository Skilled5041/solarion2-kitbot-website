import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vitest/config";

const production = process.env.NODE_ENV === "production";

export default defineConfig({
    plugins: [sveltekit()],

    test: {
        include: ["src/**/*.{test,spec}.{js,ts}"],
    },

    css: {
        preprocessorOptions: {
            scss: {
                additionalData: "@use \"src/variables.scss\" as *;",
            },
        },
    },
    optimizeDeps: {include: ["@carbon/charts"]},

    ssr: {
        noExternal: production ? ["@carbon/charts", "carbon-components"] : [],
    }
});
