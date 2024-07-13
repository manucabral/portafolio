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
            se: '#3368A3',
            te: {
                100: '#E1382E',
                200: '#67659B',
                300: '#5B455F',
                400: '#322C3F',
                500: '#7D587D',
            },
        },
    },
    plugins: [],
}
