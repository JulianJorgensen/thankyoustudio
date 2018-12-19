import React, { Component } from 'react';
import { connect } from 'react-redux';
import dynamic from 'next/dynamic';
import styled from 'styled-components';
import LowerleftContent from 'components/Slider/components/LowerLeftContent';
import PlayIcon from 'assets/icons/Play_button_black.svg';
import CloseIcon from 'assets/icons/FontAwesome/regular/times.svg';
import Logo from 'components/Logo';
import * as actions from 'store/actions';
import { breakpoint, EASINGS, TIMINGS } from 'utils/variables';
import ClientCarousel from './components/ClientCarousel';
import SlideVideo from 'components/Slider/components/SlideVideo';

const Reel = dynamic(import('./components/Reel'));

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100vh;
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

  ${props => props.hide && `
    opacity: 0;
    pointer-events: none;
  `}

  svg {
    width: 120px;
    height: 120px;
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: scale(1.2);
  }

  ${breakpoint.up('m')`
    svg {
      width: 170px;
      height: 170px;
      transition: transform 0.3s ease;
    }
  `}
`

const PlayText = styled.div`
  position: absolute;
  bottom: 0;
  opacity: 0;
  transform: translateY(100%);
  transition: all 0.3s ease;
  width: 200px;
  text-align: center;

  ${PlayReel}:hover & {
    opacity: 1;
    transform: translateY(140%);
  }
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

@connect((store) => ({
  store,
}))
export default class LandingSlide extends Component {
  constructor() {
    super();
    this.state = {};

    this.handleOnPlayClick = this.handleOnPlayClick.bind(this);
    this.handleCloseReel = this.handleCloseReel.bind(this);
    this.handleLoadPlayer = this.handleLoadPlayer.bind(this);
  }

  componentWillUpdate(newProps) {
    const { isActive, store } = this.props;
    const wasActive = (this.props.isActive && !newProps.isActive) || (!store.condenseSlider && newProps.store.condenseSlider);

    if (wasActive) {
      this.handleCloseReel();
    }
  }

  componentWillUnmount() {
    this.handleCloseReel();
  }

  handleOnPlayClick() {
    const { dispatch } = this.props;

    dispatch(actions.landingVideoPlaying(true));
    this.setState({
      playReel: true,
    });
  }

  handleCloseReel() {
    const { dispatch, isActive } = this.props;

    dispatch(actions.landingVideoPlaying(false));
    this.setState({
      playReel: false
    });
  }

  handleLoadPlayer() {
    this.setState({
      loadPlayer: true
    });
  }

  render() {
    const { store, ...props } = this.props;
    const { playReel, loadPlayer } = this.state;

    return (
      <Wrapper>
        <Inner hide={playReel}>
          <LowerleftContent
            preTitle={<StyledLogo />}
            title={<ClientCarousel isActive={props.isActive} />}
            titleAlt="You're welcome"
            teaserText="We are a full-service studio, designing and crafting exceptional digital products, brands and meaningful experiences."
            isActive={props.isActive}
            isLanding
            fontsLoaded
            // whiteContent
            // fadeToBlack
          />
          <SlideVideo
            video="https://cdn.thankyoustudio.com/videos/THANK%20YOU%20teaser.mp4"
            isActive={props.isMobile || props.isActive}
            isDirty
          />
          <Content>
            <PlayReel
              onMouseEnter={this.handleLoadPlayer}
              onClick={this.handleOnPlayClick}
              fontsLoaded={store.fontsLoaded}
              hide={!props.isActive}
            >
              <PlayIcon />
              <PlayText>Play reel</PlayText>
            </PlayReel>
          </Content>
        </Inner>

        {loadPlayer && <Reel play={playReel} onEnded={this.handleCloseReel} onPause={this.handleCloseReel} onStart={this.handleOnPlayClick} />}
        {playReel && <CloseReel onClick={this.handleCloseReel}><CloseIcon /></CloseReel>}
      </Wrapper>
    )
  }
}