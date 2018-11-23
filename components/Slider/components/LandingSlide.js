import React, { Component } from 'react';
import { connect } from 'react-redux';
import PlayIcon from 'assets/icons/FontAwesome/regular/play-circle.svg';
import CloseIcon from 'assets/icons/FontAwesome/regular/times.svg';
import styled from 'styled-components';
import * as actions from 'store/actions';
import { EASINGS, TIMINGS } from 'utils/variables';

const Wrapper = styled.div`
  position: absolute;
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

const Content = styled.div`
  position: absolute;
  right: 10vw;
  width: 90vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 1;
  transition: opacity 0.2s;

  ${props => props.hide && `
    opacity: 0;
  `}
`

const Logos = styled.div`
  display: flex;
  justify-content: center;
  height: 150px;
`

const Logo = styled.img`
  position: absolute;
  opacity: 0;
  transition: opacity 0.5s;

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

  svg {
    width: 40px;
    height: 40px;
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
  opacity: 0;
  transition: opacity 0.2s;

  ${props => props.fontsLoaded && `
    opacity: 1;
  `}
`

const LogoItems = [
  'http://cdn.thankyoustudio.com.s3.amazonaws.com/images/swatch-logo.png',
  'http://cdn.thankyoustudio.com.s3.amazonaws.com/images/ferrari-logo.png'
];

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
    const videoDuration = this.teaserVideoEl.duration;
    console.log('videoDuration', videoDuration);
    setTimeout(() => {
      this.setState({
        wipeTeaser: true
      })
    }, 5000);
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
        <FullReelWrapper show={playFullReel}>
          <FullReel ref={el => this.fullReelEl = el} playsInline>
            <source src="http://cdn.thankyoustudio.com.s3.amazonaws.com/videos/reel18.mp4" type="video/mp4" />
          </FullReel>
          <FullReelClose onClick={this.handleTogglePlayReel}><CloseIcon /></FullReelClose>
        </FullReelWrapper>

        <Content hide={playFullReel}>
          <LandingVideo wipe={wipeTeaser} ref={el => this.teaserVideoEl = el} playsInline autoPlay muted>
            <source src="http://cdn.thankyoustudio.com.s3.amazonaws.com/videos/Thankyou-landingpage_15.mp4" type="video/mp4" />
          </LandingVideo>

          <PlayReel onClick={this.handleTogglePlayReel} fontsLoaded={fontsLoaded}><PlayIcon /> Play full reel</PlayReel>
          <Statement fontsLoaded={fontsLoaded}>THANK YOU Studio is a full-service agency, busy designing and crafting beautiful digital products, brands, and experiences.</Statement>
        </Content>
      </Wrapper>  
    )
  }
}