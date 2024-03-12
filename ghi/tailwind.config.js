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
                    primary: '#4f46e5',
                    secondary: '#c4b5fd',
                    accent: '#0ea5e9',
                    neutral: '#991b1b',
                    'base-100': '#9ca3af',
                    info: '#67e8f9',
                    success: '#22c55e',
                    warning: '#fbbf24',
                    error: '#881337',
                },
            },
        ],
    },
}
