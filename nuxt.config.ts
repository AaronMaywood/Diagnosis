// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxtjs/tailwindcss', "@pinia/nuxt"],
  app: {
    baseURL: '/diagnosis/',
    // baseURL: '/javascript/diagnosis/',
    // buildAssetsDir: '/javascript/diagnosis/_nuxt/',
  },
})