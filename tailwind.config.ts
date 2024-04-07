import type { Config } from 'tailwindcss';

const config: Config = {
    content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            colors: {
                text: '#222a2a',
                background: {
                    50: '#FFFFFF',
                    100: '#FEFDFB',
                    200: '#FCFAF7',
                    300: '#FCFAF7',
                    400: '#FBF8F4',
                    500: '#FAF6F0',
                    600: '#E2CAA7',
                    700: '#C99F5E',
                    800: '#916B30',
                    900: '#493518',
                    950: '#261C0D',
                },
                primary: '#4C9C2D',
                secondary: {
                    50: '#FFF4F0',
                    100: '#FFEDE5',
                    200: '#FFD7C7',
                    300: '#FFC5AD',
                    400: '#FFB294',
                    500: '#FF9E78',
                    600: '#FF692E',
                    700: '#E04000',
                    800: '#942A00',
                    900: '#4D1600',
                    950: '#240A00',
                },
                accent: {
                    50: '#FFFBF0',
                    100: '#FFF8E0',
                    200: '#FFF1C2',
                    300: '#FFE89E',
                    400: '#FFE180',
                    500: '#FFDB61',
                    600: '#FFC91A',
                    700: '#D1A000',
                    800: '#8F6D00',
                    900: '#473700',
                    950: '#241B00',
                },
            },
        },
    },
    plugins: [],
};
export default config;
