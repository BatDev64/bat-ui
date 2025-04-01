import type { Preview } from '@storybook/react'
import './../src/global.css'
import { withThemeByDataAttribute } from '@storybook/addon-themes'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  }
}

export default preview

export const decorators = [
  withThemeByDataAttribute({
    themes: {
      light: 'light', // Clase CSS para el tema claro
      dark: 'dark' // Clase CSS para el tema oscuro
    },
    defaultTheme: 'light', // Tema predeterminado,
    attributeName: 'data-theme'
  })
]
