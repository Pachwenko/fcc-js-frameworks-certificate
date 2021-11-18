// Full Astro Configuration API Documentation:
// https://docs.astro.build/reference/configuration-reference

// @type-check enabled!
// VSCode and other TypeScript-enabled text editors will provide auto-completion,
// helpful tooltips, and warnings if your exported object is invalid.
// You can disable this by removing "@ts-check" and `@type` comments below.

// @ts-check
export default /** @type {import('astro').AstroUserConfig} */ ({
  // Enable the React renderer to support React JSX components.
  buildOptions: {
    site: 'https://pachwenko.github.io/fcc-js-frameworks-certificate/',
  },
  renderers: ['@astrojs/renderer-react', '@astrojs/renderer-svelte'],
  devOptions: {
    tailwindConfig: './tailwind.config.js',
  },
});
