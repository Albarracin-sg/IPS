/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                nunito: ["Nunito", "sans-serif"],
            },
            screens: {
                're': {'min': '1366px', 'max': '1536px'},
            },
        },
    },
    plugins: [],
}
