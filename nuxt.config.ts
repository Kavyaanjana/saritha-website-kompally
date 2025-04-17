// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  ssr: true, // Enables SSR mode
  nitro: {
    preset: 'static' // Correct way to generate a static site in Nuxt 3
  },
    app: {
      baseURL: '/saritha-website-kompally/' 
    },
 

  css: [
    "bootstrap/dist/css/bootstrap.min.css",
    "@fortawesome/fontawesome-free/css/all.min.css",
    "~/assets/style.css"
  ],

  modules: ['@nuxt/icon']

})