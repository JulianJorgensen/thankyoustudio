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

const Reel = dynamic(import('components/Reel'));

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 70vh;
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
  opacity: 0;
  transition: opacity 0.2s;

  ${props => props.fontsLoaded && `
    opacity: 1;
  `}

  svg {
    width: 170px;
    height: 170px;
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: scale(1.2);
  }
`

const PlayText = styled.div`
  position: absolute;
  bottom: 0;
  opacity: 0;
  transform: translateY(100%);
  transition: all 0.3s ease;

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

const Teaser = styled.video`
  position: absolute;
  top: 0;
  left: 50%;
  height: 70vh;
  transform: translateX(-50%);

  ${breakpoint.up('m')`
    height: auto;
    min-height: 102vh;
    min-width: 100vw;
  `}
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

    if (newProps.isActive && this.state.pauseTeaser) {
      this.setState({
        pauseTeaser: false
      });
    }

    if (wasActive) {
      this.setState({
        pauseTeaser: true
      });
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
      pauseTeaser: true
    });
  }

  handleCloseReel() {
    const { dispatch, isActive } = this.props;

    if (isActive) {
      this.setState({
        pauseTeaser: false
      });
    }

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
            title={<ClientCarousel />}
            titleAlt="You're welcome"
            teaserText="THANK YOU is a full-service agency, busy designing and crafting beautiful digital products, brands, and experiences."
            isActive
            fontsLoaded
            whiteContent
            fadeToBlack
          />
          <Content>
            <PlayReel onMouseEnter={this.handleLoadPlayer} onClick={this.handleOnPlayClick} fontsLoaded={store.fontsLoaded}><PlayIcon /> <PlayText>Play reel</PlayText></PlayReel>
            <SlideVideo
                video="http://cdn.thankyoustudio.com.s3.amazonaws.com/videos/Ferrari_landing_2.mp4"
                isDirty
                isActive={props.isActive}
              />
          </Content>
        </Inner>

        {loadPlayer && <Reel play={playReel} />}
        {playReel && <CloseReel onClick={this.handleCloseReel}><CloseIcon /></CloseReel>}
      </Wrapper>
    )
  }
}