/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        earth: {
          50:  '#faf6f0',
          100: '#f0e6d3',
          200: '#ddc9a8',
          300: '#c5a577',
          400: '#b08550',
          500: '#9a6d3a',
          600: '#7d5630',
          700: '#634229',
          800: '#4e3423',
          900: '#3e2b1f',
        },
        forest: {
          50:  '#f1f7f0',
          100: '#dcecd9',
          200: '#b8d9b3',
          300: '#8abf83',
          400: '#5ea357',
          500: '#3e8538',
          600: '#2d6a2a',
          700: '#245422',
          800: '#1e431d',
          900: '#193718',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Lora', 'Georgia', 'serif'],
      },
      typography: (theme) => ({
        earth: {
          css: {
            '--tw-prose-body': theme('colors.earth.900'),
            '--tw-prose-headings': theme('colors.earth.900'),
            '--tw-prose-links': theme('colors.forest.700'),
          },
        },
      }),
    },
  },
  plugins: [],
};
