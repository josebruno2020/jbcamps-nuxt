import { createVuetify, type ThemeDefinition } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import colors from 'vuetify/util/colors'

const customDark: ThemeDefinition = {
  dark: true,
  colors: {
    surface: '#00050d'
  },
}

export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({
    ssr: true,
    components,
    directives,
    theme: {
      defaultTheme: 'customDark',
      themes: {
        customDark
      }
    }
  })

  nuxtApp.vueApp.use(vuetify)
})