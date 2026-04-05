import { defineConfig } from 'astro/config'
import preact from '@astrojs/preact'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  site: 'https://withoutnicks.github.io/react-and-js-snippets/',
  integrations: [preact()],
  vite: {
    plugins: [tailwindcss()]
  }
})
