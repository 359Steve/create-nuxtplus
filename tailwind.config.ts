/** @type {import('tailwindcss').Config} */

export default {
    content: [
        './app/pages/**/*.{vue,js,ts}',
        './app/components/**/*.{vue,js,ts}',
        './app/layouts/**/*.{vue,js,ts}',
        './app/app.vue',
        './nuxt.config.ts',
    ],
    theme: {
        extend: {},
    },
};
