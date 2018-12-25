import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import LowerleftContent from 'components/Slider/components/LowerLeftContent';
import CloseIcon from 'assets/icons/FontAwesome/regular/times.svg';
import PlayMaskSvg from 'assets/svgs/play-mask.svg';
import Logo from 'components/Logo';
import * as actions from 'store/actions';
import { breakpoint, LAYOUT, EASINGS, TIMINGS } from 'utils/variables';
import ClientCarousel from './components/ClientCarousel';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: ${LAYOUT.MOBILE.HERO_HEIGHT};
  width: 100%;
  background-color: white;
  color: white;

  ${breakpoint.up('m')`
    position: absolute;
    top: 0;
    right: 0;
    height: 100vh;
  `}
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
    width: 100%;
  `}
`

const Content = styled.div`
  position: relative;
  z-index: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;

  ${breakpoint.up('m')`
    width: 90%;
  `}
`

const PlayReel = styled.div`
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
  pointer-events: auto;

  ${props => props.hide && `
    opacity: 0;
    pointer-events: none;
  `}

  ${breakpoint.m `
    display: flex;
  `}
`

const PlayText = styled.div`
  display: none;
  position: absolute;
  bottom: 0;
  opacity: 0;
  transform: translateY(100%);
  transition: all 0.3s ease;
  width: 200px;
  text-align: center;
  color: black;

  ${PlayReel}:hover & {
    opacity: 1;
    transform: translateY(140%);
  }

  ${breakpoint.m `
    display: block;
    width: 100%;
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

const StyledLogo = styled(Logo)`
  font-size: inherit;
`

const Teaser = styled.video`
  width: 100%;
`

const PlayReelMask = styled(PlayMaskSvg)`
  position: absolute;
  height: 100%;
  width: 100%;
  transform: scale(1.02);
  transition: transform 0.2s ease;
  pointer-events: auto;

  ${PlayReel}:hover & {
    transform: scale(1.1);
  }
`

const ReactPlayerMobile = styled.div`
  * {
    pointer-events: auto;
  }
  div {
    position: absolute;
    top: 0;
    padding-bottom: 56.25%;  
    height: 0;
  }
`

@connect((store) => ({
  store,
}))
export default class LandingSlide extends Component {
  constructor() {
    super();

    this.closeReel = this. closeReel.bind(this);
    this.playReel = this.playReel.bind(this);
  }

  playReel() {
    const { dispatch } = this.props;
    dispatch(actions.landingVideoPlaying(true));
  }

   closeReel() {
    const { dispatch } = this.props;
    dispatch(actions.landingVideoPlaying(false));
  }

  render() {
    const { store, ...props } = this.props;

    return (
      <Wrapper>
        <Inner hide={store.isLandingVideoPlaying}>
          <LowerleftContent
            preTitle={<StyledLogo />}
            title={<ClientCarousel isActive={props.isActive} />}
            titleAlt="You're welcome"
            teaserText="Our work is always authentic at heart, meaningful in spirit and crafted for impact."
            isActive={props.isActive}
            isLanding
            fontsLoaded
            // whiteContent
            // fadeToBlack
          />
          {/* <SlideVideo
            video="//cdn.thankyoustudio.com/videos/Homepage_cover_2.mp4"
            isActive={props.isMobile || props.isActive}
            isDirty
          /> */}
          <Content>
              <PlayReel
                onMouseEnter={!store.isMobile && this.handleLoadPlayer}
                onClick={this.playReel}
                fontsLoaded={store.fontsLoaded}
                hide={!props.isActive}
              >
                  <PlayReelMask />
                  <Teaser autoPlay playsInline muted loop>
                    <source src="http://cdn.thankyoustudio.com.s3.amazonaws.com/videos/reel_cover_square.mp4" type="video/mp4" />
                  </Teaser>
              </PlayReel>
          </Content>
        </Inner>
      </Wrapper>
    )
  }
}