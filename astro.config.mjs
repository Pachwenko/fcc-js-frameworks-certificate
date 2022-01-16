export default ({
  buildOptions: {
    site: 'https://fcc-js-frameworks-certificate.patrickmccartney.dev'
  },
  renderers: ['@astrojs/renderer-react', '@astrojs/renderer-svelte'],
  devOptions: {
    tailwindConfig: './tailwind.config.js',
  },
  vite: {
    build: {
      minifiy: 'esbuild',
      reportCompressedSize: true
    }
  }
});