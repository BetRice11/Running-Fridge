/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {},
    },
    plugins: [require('daisyui')],
    daisyui: {
        themes: [
            {
                mytheme: {
                    primary: '#881337',

                    secondary: '#1c1917',

                    accent: '#0ea5e9',

                    neutral: '#f3f4f6',

                    'base-100': '#374151',

                    info: '#701a75',

                    success: '#15803d',

                    warning: '#a16207',

                    error: '#7f1d1d',
                },
            },
        ],
    },
}
