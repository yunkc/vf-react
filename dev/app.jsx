import React from 'react'
import { render } from 'react-dom'
import App from '../src/main'
import vfjson from './index.json'

render(<App src={vfjson}/>, document.querySelector('#app'))
