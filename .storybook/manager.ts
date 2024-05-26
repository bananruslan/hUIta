import { addons } from '@storybook/manager-api'
import { create } from '@storybook/theming/create'

addons.setConfig({
  theme: create({
    base: 'dark',
    brandTitle: 'hUIta',
    brandUrl: 'https://example.com',
    brandImage: '/huita.svg',
    brandTarget: '_self'
  })
})
