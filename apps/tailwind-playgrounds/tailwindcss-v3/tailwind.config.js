import OptimusUiTailwind from '@bdspark/sparkng-tailwindcss';

/** @type {import('tailwindcss').Config} */
export default {
    content: ['index.html'],
    theme: {
        extend: {
            colors: {}
        }
    },
    plugins: [OptimusUiTailwind]
};
