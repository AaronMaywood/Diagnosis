// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxtjs/tailwindcss', "@pinia/nuxt"],
  app: {
    baseURL: '/Diagnosis/',
    // 一般的なWebサーバーへデプロイする場合
    // baseURL: '/javascript/diagnosis/',
    // buildAssetsDir: '/javascript/diagnosis/_nuxt/',
  },
})