import React from 'react'
import { render } from 'react-dom'
import VF from '../src/main'
import vfjson from './index.json'

class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return <div><VF src={vfjson}/></div>
  }
}

render(<App/>, document.querySelector('#app'))
