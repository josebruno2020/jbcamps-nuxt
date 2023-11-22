// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '~/assets/css/global.css',
    'vuetify/lib/styles/main.sass',
    '@mdi/font/css/materialdesignicons.min.css'
  ],
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    "nuxt-bootstrap-icons",
    '@nuxtjs/google-fonts',
    '@nuxtjs/i18n'
  ],
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },

  googleFonts: {
    families: {
      'Roboto': [100, 400, 500, 700]
    }
  },

  i18n: {
    vueI18n: './i18n/config.ts',
    defaultLocale: 'en',
    locales: ['en', 'pt'],
    strategy: 'prefix',
    detectBrowserLanguage: false
  }
})