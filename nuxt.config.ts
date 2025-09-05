// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-29',
  devtools: { enabled: true },
  build: {
    transpile: ['vuetify'],
  },

  modules: [
    // '@nuxtjs/tailwindcss',
    'nuxt-swiper',
    '@pinia/nuxt',
    '@nuxtjs/google-fonts',

    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    }


  ],

  swiper: {
    enableComposables: true,
    bundled: true
  },


  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },

  //
  googleFonts: {
    families: {
      Manrope: [200, 300, 400, 500, 600, 700],
    },
    display: 'swap',
    preload: true
  },
  //

  css: [
    'vuetify/styles',
    '@fortawesome/fontawesome-free/css/all.css'
  ],

  runtimeConfig: {
    public: {
      tmdbToken: process.env.TMDB_API_TOKEN,
      tmdbKey: process.env.TMDB_API_KEY,
    }
  }
})
