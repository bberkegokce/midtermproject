/** @type {import('tailwindcss').Config} */
export default {
content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./*.{js,ts,jsx,tsx}" // Dosyaların root'ta kalmışsa diye önlem
],
theme: {
    extend: {},
},
plugins: [],
}