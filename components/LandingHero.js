import React, { Component } from 'react';
import { connect } from 'react-redux';
import PlayIcon from 'assets/icons/FontAwesome/regular/play-circle.svg';
import CloseIcon from 'assets/icons/FontAwesome/regular/times.svg';
import styled from 'styled-components';
import * as actions from 'store/actions';
import { breakpoint, EASINGS, TIMINGS } from 'utils/variables';

const Wrapper = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 70vh;
  width: 100%;
  background-color: black;
  color: white;

  ${breakpoint.up('m')`
    position: absolute;
    top: 0;
    right: 0;
    height: 100vh;
    padding-right: 10vw;
  `}
`

const LandingVideo = styled.video`
  position: absolute;
  z-index: 2;
  left: 0;
  top: 0;
  height: 70vh;
  transition: transform 0.8s ease-in;

  ${props => props.wipe && `
    transform: translateX(100%);
  `}

  ${breakpoint.up('m')`
    height: 100vh;
  `}
`

const FullReelWrapper = styled.div`
  display: none;

  ${props => props.show && `
    display: block;
  `}
`

const FullReelClose = styled.div`
  position: absolute;
  right: 40px;
  top: 40px;
  z-index: 200;
  cursor: pointer;
  svg {
    width: 50px;
    height: 50px;
  }
`

const FullReel = styled.video`
  position: absolute;
  min-height: 100%;
  min-width: 100vw;
`

const Inner = styled.div`
  height: 100%;
  opacity: 1;
  transition: opacity 0.2s;

  ${props => props.hide && `
    opacity: 0;
  `}

  ${breakpoint.up('m')`
    position: absolute;
    right: 10vw;
    width: 90vw;
  `}
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  opacity: 0;
  transition: opacity 0.2s;

  ${props => props.show && `
    opacity: 1;
  `}
`

const PlayReel = styled.div`
  display: flex;
  align-items: center;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
  font-size: 26px;

  svg {
    width: 50px;
    height: 50px;
    margin-right: 15px;
    path {
      fill: white;
    }
  }

  opacity: 0;
  transition: opacity 0.2s;

  ${props => props.fontsLoaded && `
    opacity: 1;
  `}
`

const Statement = styled.div`
  max-width: 80%;
  margin-top: 80px;
  text-align: center;
  font-size: 22px;
  font-weight: light;
  opacity: 0.7;

  ${breakpoint.up('m')`
    font-size: 28px;
    width: 600px;
  `}
`

@connect((store) => ({
  store,
}))
export default class LandingSlide extends Component {
  constructor() {
    super();

    this.state = {};
    this.fullReelEl = null;
    this.teaserVideoEl = null;
    this.playTeaser = this.playTeaser.bind(this);
    this.handleTogglePlayReel = this.handleTogglePlayReel.bind(this);
  }
  
  playTeaser(el) {
    console.log('this.teaserVideoEl', this.teaserVideoEl)
      let videoDuration = this.teaserVideoEl.duration;
      this.teaserVideoEl.play();

      setTimeout(() => {
        this.setState({
          wipeTeaser: true
        })
      }, (videoDuration*1000)-600);
  }

  handleTogglePlayReel() {
    const { dispatch } = this.props;

    if (!this.state.playFullReel) {
      this.fullReelEl.play();
      dispatch(actions.landingVideoPlaying(true));
    } else {
      this.fullReelEl.pause();
      dispatch(actions.landingVideoPlaying(false));
    }

    this.setState({
      playFullReel: !this.state.playFullReel
    });
  }

  render() {
    const { store } = this.props;
    const { playFullReel, wipeTeaser } = this.state;

    return (
      <Wrapper>
        <LandingVideo poster="http://cdn.thankyoustudio.com.s3.amazonaws.com/images/ferrari-placeholder.jpg" wipe={wipeTeaser} ref={el => this.teaserVideoEl = el} playsInline muted>
          <source src="http://cdn.thankyoustudio.com.s3.amazonaws.com/videos/Thankyou-landingpage_15.mp4" type="video/mp4" />
        </LandingVideo>

        <Inner hide={playFullReel}>
          <LandingVideo
            poster="http://cdn.thankyoustudio.com.s3.amazonaws.com/images/ferrari-placeholder.jpg"
            wipe={wipeTeaser}
            ref={el => this.teaserVideoEl = el}
            onLoadedMetadata={(el) => this.playTeaser(el)}
            playsInline
            muted
          >
            <source src="http://cdn.thankyoustudio.com.s3.amazonaws.com/videos/Thankyou-landingpage_15.mp4" type="video/mp4" />
          </LandingVideo>

          <Content show={wipeTeaser}>
            <PlayReel onClick={this.handleTogglePlayReel} fontsLoaded={store.fontsLoaded}><PlayIcon /> Play full reel</PlayReel>
            <Statement fontsLoaded={store.fontsLoaded}>THANK YOU is a full-service agency, busy designing and crafting beautiful digital products, brands, and experiences.</Statement>
          </Content>
        </Inner>

        <FullReelWrapper show={playFullReel}>
          <FullReel ref={el => this.fullReelEl = el} playsInline>
            <source src="http://cdn.thankyoustudio.com.s3.amazonaws.com/videos/reel18.mp4" type="video/mp4" />
          </FullReel>
          <FullReelClose onClick={this.handleTogglePlayReel}><CloseIcon /></FullReelClose>
        </FullReelWrapper>
      </Wrapper>  
    )
  }
}