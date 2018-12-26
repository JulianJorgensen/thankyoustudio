import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import LowerleftContent from 'components/Slider/components/LowerLeftContent';
import Logo from 'components/Logo';
import { breakpoint, LAYOUT, EASINGS, TIMINGS } from 'utils/variables';
import ClientCarousel from './components/ClientCarousel';
import PlayReelButton from './components/PlayReelButton';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: ${LAYOUT.MOBILE.HERO_HEIGHT};
  min-height: 500px;
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

const StyledLogo = styled(Logo)`
  font-size: inherit;
`

@connect((store) => ({
  store,
}))
export default class LandingSlide extends Component {
  render() {
    const { store, ...props } = this.props;

    return (
      <Wrapper>
        <Inner hide={store.reel.isPlaying}>
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
          <Content>
            <PlayReelButton isActive={store.isMobile ? store.reel.isLoading : props.isActive} />
          </Content>
        </Inner>
      </Wrapper>
    )
  }
}