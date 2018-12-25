import React, { Component } from 'react';
import { connect } from 'react-redux';
import dynamic from 'next/dynamic';
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

    this.handleOnVisibilityChange = this.handleOnVisibilityChange.bind(this);
    this.handlePause = this.handlePause.bind(this);
    this.handleOnStart = this.handleOnStart.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleOnReady = this.handleOnReady.bind(this);
  }

  componentDidMount() {
    console.log('mounted player!', this.props.store)
  }

  handleOnVisibilityChange(inView) {
    if (inView) return;

    this.handlePause();
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
        url='//cdn.thankyoustudio.com.s3.amazonaws.com/videos/reel_dec20.mp4'
        onReady={this.handleOnReady}
        onStart={this.handleOnStart}
        onPause={this.handlePause}
        onEnded={this.handleClose}
        playing={store.reel.isPlaying}
        preload="none"
        autoPlay={true}
      />
    )
  }
}