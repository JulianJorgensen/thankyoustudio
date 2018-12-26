import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import dynamic from 'next/dynamic';
import * as actions from 'store/actions';
import CloseIcon from 'assets/icons/FontAwesome/regular/times.svg';
import { breakpoint, EASINGS, TIMINGS } from 'utils/variables';

const Player = dynamic(import('./components/Player'), {
  ssr: false
});

const Observer = dynamic(import('react-intersection-observer'), {
  ssr: false
});

const Wrapper = styled.div`
  opacity: 0;
  position: fixed;
  top: 0;
  left: 0;
  transition: all 0.2s ease;
  background-color: black;
  z-index: 99;
  width: 100vw;
  height: 100vh;
  pointer-events: none;

  ${props => props.show && `
    opacity: 1;
    pointer-events: auto;
  `}
`

const Inner = styled.div`
  width: 0;
  height: 0;

  ${breakpoint.m `
    min-width: 100vw;
    min-height: 100vh;

    * {
      min-height: inherit;
      min-width: inherit;
    }

    video {
      object-fit: cover;
    }
  `}
`

const CloseReel = styled.div`
  position: absolute;
  right: 40px;
  top: 40px;
  z-index: 200;
  cursor: pointer;
  svg {
    width: 60px;
    height: 60px;

    path {
      fill: white;
    }
  }
`

@connect((store) => ({
  store,
}))
export default class Reel extends Component {
  constructor() {
    super();

    this.state = {};
    this.handleClose = this.handleClose.bind(this);
  }

  componentDidMount() {
    if (this.props.store.isMobile) {
      setTimeout(() => {
        console.log('is mobile and load player')
        this.setState({ loadPlayerTimeout: true });
      }, 2000);
    }
  }


  handleClose() {
    const { dispatch } = this.props;
    dispatch(actions.landingVideoPlaying(false));
  }

  render() {
    const { store } = this.props;

    return (
      <Observer onChange={this.handleOnVisibilityChange}>
        <Wrapper show={store.reel.isPlaying}>
          <Inner loading={store.reel.isLoading}>
            {/* {(store.reel.isLoading || this.state.loadPlayerTimeout) && <Player/>} */}
            <Player/>
          </Inner>
          <CloseReel onClick={this.handleClose}><CloseIcon /></CloseReel>
        </Wrapper>
      </Observer>
    )
  }
}