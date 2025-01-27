/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            animation: {
                gradient: "gradient 8s linear infinite",
                "star-movement-bottom":
                    "star-movement-bottom linear infinite alternate",
                "star-movement-top":
                    "star-movement-top linear infinite alternate",
            },
            keyframes: {
                gradient: {
                    "0%": { backgroundPosition: "0% 50%" },
                    "50%": { backgroundPosition: "100% 50%" },
                    "100%": { backgroundPosition: "0% 50%" },
                },
                "star-movement-bottom": {
                    "0%": { transform: "translate(0%, 0%)", opacity: "1" },
                    "100%": { transform: "translate(-100%, 0%)", opacity: "0" },
                },
                "star-movement-top": {
                    "0%": { transform: "translate(0%, 0%)", opacity: "1" },
                    "100%": { transform: "translate(100%, 0%)", opacity: "0" },
                },
            },
            colors: {
                text: "#363636",
                background: "#fbfbfe",
                primary: "#680d28",
                secondary: "#f26e6e",
                accent: "#da5e5e",
            },
            fontFamily: {
                heading: "Barlow Condensed",
                body: "Montserrat",
            },
            fontSize: {
                xs: "0.550rem",
                sm: "0.750rem",
                base: "1rem",
                xl: "1.333rem",
                "2xl": "1.777rem",
                "3xl": "2.369rem",
                "4xl": "3.158rem",
                "5xl": "4.210rem",
            },
            fontWeight: {
                normal: "400",
                bold: "700",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
    presets: [require("@relume_io/relume-tailwind")],
};
