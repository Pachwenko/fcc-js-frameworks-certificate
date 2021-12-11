export default ({
  buildOptions: {
    site: 'https://pachwenko.github.io/fcc-js-frameworks-certificate/',
  },
  renderers: ['@astrojs/renderer-react', '@astrojs/renderer-svelte'],
  devOptions: {
    tailwindConfig: './tailwind.config.js',
  },
});
