/* eslint-disable global-require */
// tailwind.config.js
module.exports = {
  // mode: 'jit',
  content: ['./public/**/*.html', './src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}'],
  // more options here
  theme: {
    extend: {
      backgroundImage: {
        'diamond-pattern': "url('/overlapping-diamonds.svg')",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
