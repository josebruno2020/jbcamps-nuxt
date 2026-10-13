import { createVuetify, type ThemeDefinition } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const customDark: ThemeDefinition = {
  dark: true,
  colors: {
    background: '#161210',
    surface: '#1f1a17',
    'surface-variant': '#2a2420',
    primary: '#26a69a',
    secondary: '#f0b27a',
    'on-surface': '#f5ede6'
  },
}

export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({
    ssr: true,
    components,
    directives,
    defaults: {
      VCard: { rounded: 'xl' },
      VBtn: { rounded: 'pill' },
      VChip: { rounded: 'pill' }
    },
    theme: {
      defaultTheme: 'customDark',
      themes: {
        customDark
      }
    }
  })

  nuxtApp.vueApp.use(vuetify)
})