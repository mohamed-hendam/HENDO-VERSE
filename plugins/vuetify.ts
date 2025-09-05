import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    theme: {
      defaultTheme: 'dark',
      themes: {
        light: {
          dark: false,
          colors: {
            'bg8': '#f9f9f9',
            'bg6': '#ffffff',
            'bg10': '#f0f0f0',
            'bg12': '#e8e8e8',
            'bg15': '#cccccc',
            'gradient': '#E50000',

            'text': '#d00000',
            'main1': '#000000',
            'main60': '#666666',
            'main75': '#333333',
          },
        },
        dark: {
          dark: true,
          colors: {
            'bg8': '#141414',
            'bg6': '#0F0F0F',
            'bg10': '#1A1A1A',
            'bg12': '#1F1F1F',
            'bg15': '#262626',
            'gradient': '#7a001f',

            'text': '#E50000',
            'main1': '#FFFFFF',
            'main60': '#999999',
            'main75': '#BFBFBF',

          },
        },
      },
    },
  })
  app.vueApp.use(vuetify)
})