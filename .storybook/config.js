import { configure, addParameters } from '@storybook/react'

// import LiveEdit, { setOptions } from 'storybook-addon-react-live-edit'

// setOptions({ theme: 'darcula', presets: ['react'] })

// setAddon(LiveEdit)

// automatically import all files ending in *.stories.js
// addParameters({
//   options: {
//     sortStoriesByKind: true
//   }
// })

const req = require.context('../stories', true, /\.stories\.js$/)
function loadStories () {
  req.keys().forEach(filename => {
    console.log('TCL: loadStories -> filename', filename)
    return req(filename)
  })
  console.log('TCL: loadStories -> req', req)
}

configure(loadStories, module)
