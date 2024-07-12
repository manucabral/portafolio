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
            pr: '#1E192E',
            se: '#3368A3',
        },
    },
    plugins: [],
}
