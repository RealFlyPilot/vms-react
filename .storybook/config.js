import { configure } from '@storybook/react'

// import LiveEdit, { setOptions } from 'storybook-addon-react-live-edit'

// setOptions({ theme: 'darcula', presets: ['react'] })

// setAddon(LiveEdit)

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.js$/)
function loadStories () {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
