const { tailwindConfig } = require("@storefront-ui/react/tailwind-config");
/** @type {import('tailwindcss').Config} */
module.exports = {
    presets: [tailwindConfig, require("@relume_io/relume-tailwind")],
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./node_modules/@storefront-ui/react/**/*.{js,mjs}",
        "./node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
};
