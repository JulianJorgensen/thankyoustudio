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

    this.startReadyTimeout = this.startReadyTimeout.bind(this);
    this.handlePause = this.handlePause.bind(this);
    this.handleOnStart = this.handleOnStart.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleOnReady = this.handleOnReady.bind(this);
  }

  componentDidMount() {
    console.log('mounted player!', this.props.store)
    this.startReadyTimeout();
  }

  startReadyTimeout() {
    setTimeout(() => {
      this.handleOnReady();
    }, 3000);
  }

  handlePause() {
    this.handleClose();
  }

  handleOnStart() {
    console.log('on start');
  }

  handleClose() {
    const { dispatch } = this.props;
    dispatch(actions.landingVideoPlaying(false));
  }

  handleOnReady() {
    console.log('handleOnReady')
    const { dispatch } = this.props;
    dispatch(actions.landingVideoReady(true));
  }

  render() {
    const { store } = this.props;

    return (
      <ReactPlayer
        url='http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4'
        // onReady={this.handleOnReady}
        // onStart={this.handleOnStart}
        // onPause={this.handlePause}
        onEnded={this.handleClose}
        playing={true}
        muted
      />
    )
  }
}