import type { Preview } from '@storybook/react'
import './../src/global.css'
/* import '@bat-ui/ui/css-theme'
import '@bat-ui/ui/styles' */

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  }
}

export default preview
