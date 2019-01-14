import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'store/actions';

import ReactPlayer from 'react-player/lib/players/FilePlayer.js';

@connect((store) => ({
  store,
}))
export default class Reel extends Component {
  constructor() {
    super();
    this.state = {};
    this.video = {};

    this.handlePause = this.handlePause.bind(this);
    this.handleOnStart = this.handleOnStart.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleOnReady = this.handleOnReady.bind(this);
  }

  handlePause() {
    this.handleClose();
  }

  handleOnStart() {
  }

  handleClose() {
    const { dispatch } = this.props;
    dispatch(actions.landingVideoPlaying(false));
  }

  handleOnReady() {
    const { dispatch } = this.props;
    dispatch(actions.landingVideoReady(true));
  }

  render() {
    const { store } = this.props;

    return (
      <ReactPlayer
        url='//cdn.thankyoustudio.com/videos/reel_dec20.mp4'
        onReady={this.handleOnReady}
        onStart={this.handleOnStart}
        onPause={this.handlePause}
        onEnded={this.handleClose}
        playing={store.reel.isPlaying}
        config={{ attributes: { preload: store.isMobile ? 'none' : 'auto' }}}
      />
    )
  }
}