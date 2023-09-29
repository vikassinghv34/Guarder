/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/components/**/*.{js,ts,jsx,tsx,mdx}'],
  content: ['./src/components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    // screens: {
    //   tablet: '575px',
    // },
    screens: {
      tablet: '575px',
      sm: '576px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '992px',
      // => @media (min-width: 1024px) { ... }

      xl: '1200px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1400px',
      // => @media (min-width: 1536px) { ... }
    },

    extend: {},
  },
  plugins: [],
};

