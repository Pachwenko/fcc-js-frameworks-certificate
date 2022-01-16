/* eslint-disable global-require */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}'],
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
