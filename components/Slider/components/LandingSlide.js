import React, { Component } from 'react';
import { connect } from 'react-redux';
import PlayIcon from 'assets/icons/FontAwesome/regular/play-circle.svg';
import CloseIcon from 'assets/icons/FontAwesome/regular/times.svg';
import styled from 'styled-components';
import * as actions from 'store/actions';
import { EASINGS, TIMINGS } from 'utils/variables';

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding-right: 10vw;
  background-color: black;
  color: white;
`

const LandingVideo = styled.video`
  position: absolute;
  z-index: 2;
  left: 0;
  top: 0;
  height: 100%;
  transition: transform 0.8s ease-in;

  ${props => props.wipe && `
    transform: translateX(100%);
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
  position: absolute;
  right: 10vw;
  width: 90vw;
  height: 100%;
  opacity: 1;
  transition: opacity 0.2s;

  ${props => props.hide && `
    opacity: 0;
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
  width: 600px;
  margin-top: 80px;
  text-align: center;
  font-size: 28px;
  font-weight: light;
  opacity: 0.7;
`

@connect()
export default class LandingSlide extends Component {
  constructor() {
    super();

    this.state = {};
    this.fullReelEl = null;
    this.teaserVideoEl = null;
    this.handleTogglePlayReel = this.handleTogglePlayReel.bind(this);
  }

  componentDidMount() {
    this.playTeaser();
  }

  playTeaser() {
    this.teaserVideoEl.onloadedmetadata = () => {
      let videoDuration = this.teaserVideoEl.duration;
      this.teaserVideoEl.play();

      setTimeout(() => {
        this.setState({
          wipeTeaser: true
        })
      }, (videoDuration*1000)-600);
    };
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
    const { fontsLoaded } = this.props;
    const { playFullReel, wipeTeaser } = this.state;

    return (
      <Wrapper>
        <LandingVideo poster="http://cdn.thankyoustudio.com.s3.amazonaws.com/images/ferrari-placeholder.jpg" wipe={wipeTeaser} ref={el => this.teaserVideoEl = el} playsInline muted>
          <source src="http://cdn.thankyoustudio.com.s3.amazonaws.com/videos/Thankyou-landingpage_15.mp4" type="video/mp4" />
        </LandingVideo>

        <Inner hide={playFullReel}>
          <LandingVideo poster="http://cdn.thankyoustudio.com.s3.amazonaws.com/images/ferrari-placeholder.jpg" wipe={wipeTeaser} ref={el => this.teaserVideoEl = el} playsInline muted>
            <source src="http://cdn.thankyoustudio.com.s3.amazonaws.com/videos/Thankyou-landingpage_15.mp4" type="video/mp4" />
          </LandingVideo>

          <Content show={wipeTeaser}>
            <PlayReel onClick={this.handleTogglePlayReel} fontsLoaded={fontsLoaded}><PlayIcon /> Play full reel</PlayReel>
            <Statement fontsLoaded={fontsLoaded}>THANK YOU is a full-service agency, busy designing and crafting beautiful digital products, brands, and experiences.</Statement>
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