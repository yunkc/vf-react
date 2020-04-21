import React from 'react'
import PropTypes from 'prop-types'
import { createVF } from '@vf.js/launcher'

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <main ref={ el => this.el = el}>hello react</main>
  }

  componentDidMount() {
    createVF({
      src: this.props.src,
      container: this.el
    }, player => {
      player.onReady = this.props.onReady
      player.onError = this.props.onError
      player.onDispose = this.props.onDispose
      player.onMessage = this.props.onMessage
      player.onSceneCreate = this.props.onSceneCreate
      this.props.vfCreated && this.props.vfCreated(player)
    }, err => {
      this.props.vfCreateErr && this.props.vfCreateErr(err)
    })
  }
}

App.propTypes = {
  src: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  debug: PropTypes.bool,
  bgcolor: PropTypes.string,
  wmode: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  logAdvancedTrace: PropTypes.bool,
  language: PropTypes.string,
  frameRate: PropTypes.number,
  scaleMode: PropTypes.string,
  play: PropTypes.bool,
  id: PropTypes.string,
  loop: PropTypes.bool,
  menu: PropTypes.bool,
  quality: PropTypes.string,
  align: PropTypes.string,
  vfvars: PropTypes.object,
  orientation: PropTypes.string,
  maxTouches: PropTypes.number,
  showFPS: PropTypes.bool,
  vfCreated: PropTypes.func,
  vfCreateErr: PropTypes.func,
  onReady: PropTypes.func,
  onError: PropTypes.func,
  onMessage: PropTypes.func,
  onDispose: PropTypes.func,
  onSceneCreate: PropTypes.func,
}
