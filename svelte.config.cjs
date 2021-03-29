// const node = require('@sveltejs/adapter-node')

const static = require('@sveltejs/adapter-static')
const pkg = require('./package.json')

// /** @type {import('@sveltejs/kit').Config} */
module.exports = {
  kit: {
    // By default, `npm run build` will create a standard Node app.
    // You can create optimized builds for different platforms by
    // specifying a different adapter
    adapter: static(),

    // hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
	prerender: {
			crawl: true,
			enabled: true,
			force: true,
		},

    vite: {
      ssr: {
        noExternal: Object.keys(pkg.dependencies || {}),
      },
    },
  },
}