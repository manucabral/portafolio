/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Helvetica', 'Arial', 'sans-serif'],
            },
        },
        colors: {
            trans: 'transparent',
            curr: 'currentColor',
            wh: 'white',
            bl: '#000',
            pr: '#1E192E',
            se: '#4B2840',
            te: {
                100: '#E1382E',
                200: '#67659B',
                300: '#F8F0A7',
                400: '#989CB5',
                500: '#131420',
            },
        },
    },
    plugins: [],
}
