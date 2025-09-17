import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { VTreeview } from 'vuetify/labs/VTreeview'

// Light theme to match screenshot design
const lightTheme = {
  dark: false,
  colors: {
    background: '#FFFFFF',
    surface: '#FFFFFF',
    'surface-bright': '#FFFFFF',
    'surface-light': '#F5F5F5',
    'surface-variant': '#E0E0E0',
    'on-surface-variant': '#212121',
    primary: '#1976D2',
    'primary-darken-1': '#1565C0',
    secondary: '#757575',
    'secondary-darken-1': '#616161',
    error: '#B00020',
    info: '#0288D1',
    success: '#2E7D32',
    warning: '#F57C00',
    // OSINT-specific colors
    'case-status': '#2E7D32',
    evidence: '#F57C00',
    entity: '#7B1FA2',
  },
}

export default createVuetify({
  components: {
    ...components,
    VTreeview,
  },
  directives,
  theme: {
    defaultTheme: 'light',
    themes: {
      light: lightTheme,
    },
  },
  defaults: {
    VBtn: {
      variant: 'flat',
      style: 'text-transform: none;',
    },
    VCard: {
      elevation: 2,
    },
    VTextField: {
      variant: 'outlined',
      density: 'comfortable',
    },
    VSelect: {
      variant: 'outlined',
      density: 'comfortable',
    },
    VTextarea: {
      variant: 'outlined',
      density: 'comfortable',
    },
  },
})
