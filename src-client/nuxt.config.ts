// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  nitro: {
    preset: import.meta.resolveSync('elysiajs-nuxt/preset'),
  },
  vite: {
    server: {
      origin: 'http://localhost:3000',
    }
  }
})
