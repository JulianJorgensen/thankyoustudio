import React, { Component } from 'react';
import { connect } from 'react-redux';
import dynamic from 'next/dynamic';
import PlayIcon from 'assets/icons/FontAwesome/regular/play-circle.svg';
import CloseIcon from 'assets/icons/FontAwesome/regular/times.svg';
import styled from 'styled-components';
import * as actions from 'store/actions';
import { breakpoint, EASINGS, TIMINGS } from 'utils/variables';

const Reel = dynamic(import('components/Reel'));

const Wrapper = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 70vh;
  width: 100%;
  background-color: white;
  color: black;

  ${breakpoint.up('m')`
    position: absolute;
    top: 0;
    right: 0;
    height: 100vh;
    padding-right: 10vw;
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
    right: 10vw;
    width: 90vw;
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
      fill: black;
    }
  }

  opacity: 0;
  transition: opacity 0.2s;

  ${props => props.fontsLoaded && `
    opacity: 1;
  `}
`

const CloseReel = styled.div`
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

const Teaser = styled.video`
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  min-height: 102vh;
  min-width: 100vw;

  ${breakpoint.up('m')`
    display: block;
  `}
`

@connect((store) => ({
  store,
}))
export default class LandingSlide extends Component {
  constructor() {
    super();
    this.state = {};

    this.teaserEl = null;
    this.handleOnPlayClick = this.handleOnPlayClick.bind(this);
    this.handleCloseReel = this.handleCloseReel.bind(this);
  }

  componentDidMount(newProps) {
    this.teaserEl.play();
  }

  componentWillUpdate(newProps) {
    if (newProps.isActive) {
      this.teaserEl.play();
    } else {
      this.teaserEl.pause();
    }
  }

  handleOnPlayClick() {
    const { dispatch } = this.props;

    this.teaserEl.pause();

    dispatch(actions.landingVideoPlaying(true));
    this.setState({
      playReel: true
    });
  }

  handleCloseReel() {
    const { dispatch } = this.props;

    this.teaserEl.play();

    dispatch(actions.landingVideoPlaying(false));
    this.setState({
      playReel: false
    });
  }

  render() {
    const { store } = this.props;
    const { playReel } = this.state;

    return (
      <Wrapper>
        <Inner hide={playReel}>
          <Content>
            <PlayReel onClick={this.handleOnPlayClick} fontsLoaded={store.fontsLoaded}><PlayIcon /> Play reel</PlayReel>
            <Statement fontsLoaded={store.fontsLoaded}>THANK YOU is a full-service agency, busy designing and crafting beautiful digital products, brands, and experiences.</Statement>
          </Content>
          <Teaser ref={el => this.teaserEl = el} muted autoPlay loop>
            <source src="http://cdn.thankyoustudio.com.s3.amazonaws.com/videos/THANK%20YOU%20teaser.mp4" type="video/mp4" />
          </Teaser>
        </Inner>

        <Reel play={playReel} />
        {playReel && <CloseReel onClick={this.handleCloseReel}><CloseIcon /></CloseReel>}
      </Wrapper>  
    )
  }
}