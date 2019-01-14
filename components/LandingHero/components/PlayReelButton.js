import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PlayMaskSvg from 'assets/svgs/reel-mask.svg';
import * as actions from 'store/actions';
import { breakpoint, LAYOUT, EASINGS, TIMINGS } from 'utils/variables';

const Wrapper = styled.div`
  position: relative;
  z-index: 4;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
  font-size: 26px;
  transition: opacity 0.2s;
  top: -56px; // this is a hack to compensate for mobile overlayed navigation
  max-width: 40vw;
  pointer-events: ${props => props.isActive ? 'auto' : 'none'};

  ${props => props.isLoading && `
  `}

  ${props => props.hide && `
    opacity: 0;
    pointer-events: none;
  `}

  ${breakpoint.m `
    display: flex;
  `}
`

const PlayText = styled.div`
  display: ${props => props.loading ? 'block' : 'none'};
  position: absolute;
  top: 0;
  opacity: 0;
  transform: translateY(-100%);
  transition: all 0.3s ease;
  width: 200px;
  text-align: center;
  color: black;

  ${Wrapper}:hover & {
    opacity: 1;
    transform: translateY(-150%);
  }

  ${breakpoint.m `
    display: block;
    width: 100%;
  `}
`

const PlayReelMask = styled(PlayMaskSvg)`
  position: absolute;
  height: 100%;
  width: 100%;
  transform: scale(1.01);
  transition: transform 0.2s ease;
  pointer-events: auto;

  #circle {
    visibility: hidden;
  }

  ${Wrapper}:hover & {
    transform: scale(1.09);
  }
`

const Teaser = styled.video`
  width: 100%;
`

@connect((store) => ({
  store,
}))
export default class PlayReelButton extends Component {
  constructor() {
    super();
    this.state = {};

    this.closeReel = this.closeReel.bind(this);
    this.playReel = this.playReel.bind(this);
    this.loadPlayer = this.loadPlayer.bind(this);
    this.handleOnPlayClick = this.handleOnPlayClick.bind(this);
  }


  // componentDidMount() {
  //   TweenLite.to("#triangle", 1, {morphSVG:"#circle"});
  // }

  handleOnPlayClick() {
    const { dispatch, store } = this.props;
    if (store.reel.isPlaying) return;

    this.setState({
      isLoading: true
    });

    // mobile needs different treatment because of ios restriction
    // it can only handle 1 timeout/interval
    // if (store.isMobile) {
    //   dispatch(actions.landingVideoPlaying(true));
    //   return;
    // }

    // desktop
    this.checkPlayerRef = setInterval(() => {
      // play the reel once the player is ready
      if (this.props.store.reel.isReady) {
        this.setState({
          isLoading: false
        });
        dispatch(actions.landingVideoPlaying(true));
        clearInterval(this.checkPlayerRef);
      }
    }, 200);
  }

  playReel() {
    const { dispatch } = this.props;
    dispatch(actions.landingVideoPlaying(true));
  }

  closeReel() {
    const { dispatch } = this.props;
    dispatch(actions.landingVideoPlaying(false));
  }

  loadPlayer() {
    const { dispatch } = this.props;
    dispatch(actions.landingVideoLoading(true));
  }

  render() {
    const { store, ...props } = this.props;

    return (
      <Wrapper
        onMouseEnter={!store.isMobile && this.loadPlayer}
        onClick={props.isActive && this.handleOnPlayClick}
        fontsLoaded={store.fontsLoaded}
        hide={!props.isActive}
        isLoading={this.state.isLoading}
      >
        <PlayText loading={this.state.isLoading}>{this.state.isLoading || store.reel.isPlaying ? 'Loading' : 'Play'} Reel</PlayText>
        <PlayReelMask alt="Play reel" />
        {props.isActive && 
          <Teaser autoPlay playsInline muted loop>
            <source src="//cdn.thankyoustudio.com.s3.amazonaws.com/videos/reel_cover_square.mp4" type="video/mp4" />
          </Teaser>
        }
      </Wrapper>
    )
  }
}