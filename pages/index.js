import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Fullpage, Slide } from 'fullpage-react';
import MarqueeSlider from 'components/MarqueeSlider';
import AboutSlide from 'components/AboutSlide';
import WorkSlide from 'components/WorkSlide';
import TeamSlide from 'components/TeamSlide';
import VenturesSlide from 'components/VenturesSlide';
import Dots from 'components/Dots';
import * as actions from 'store/actions';

const changeFullpageSlide = Fullpage;

const fullPageOptions = {
  // for mouse/wheel events
  // represents the level of force required to generate a slide change on non-mobile, 10 is default
  scrollSensitivity: 5,

  // for touchStart/touchEnd/mobile scrolling
  // represents the level of force required to generate a slide change on mobile, 10 is default
  touchSensitivity: 5,
  scrollSpeed: 500,
  hideScrollBars: true,
  enableArrowKeys: true,
};

@connect((store) => ({
  store,
}))
export default class Homepage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeSlide: 0,
    };
    this.onSlideChangeStart = this.onSlideChangeStart.bind(this);
    this.onSlideChangeEnd = this.onSlideChangeEnd.bind(this);
    this.goToSlide = this.goToSlide.bind(this);
  }

  componentWillMount() {
    const { dispatch } = this.props;

    dispatch(actions.activateMarqueeSlider());
    dispatch(actions.switchToLightContent());
  }

  onSlideChangeStart(name, props, state, newState) {
    this.setState({
      isScrolling: true,
      ...newState,
    });

    this.switchSiteColor(props, newState);
    
    const { dispatch } = this.props;
    if (newState.activeSlide > 0) {
      dispatch(actions.deactivateMarqueeSlider());
    } else {
      dispatch(actions.activateMarqueeSlider());
    }
  }

  onSlideChangeEnd(name, props, state, newState) {
    this.setState({
      isScrolling: false,
      ...newState,
    });
  }

  goToSlide(slideId) {
    changeFullpageSlide.bind(null, slideId);
  }

  switchSiteColor(props, newState) {
    const { dispatch, store } = this.props;

    let lightContent = props.slides[newState.activeSlide].props.lightContent;

    if (newState.activeSlide === 0) {
      lightContent = store.marquee ? store.marquee.lightContent : lightContent;
    }

    if (lightContent) {
      dispatch(actions.switchToLightContent());
    } else {
      dispatch(actions.switchToDarkContent());
    }
  }

  render() {
    const { activeSlide, isScrolling } = this.state;

    const slides = [
      <Slide lightContent>
        <MarqueeSlider />
      </Slide>,
      <Slide><AboutSlide /></Slide>,
      <Slide lightContent><WorkSlide /></Slide>,
      <Slide><TeamSlide /></Slide>,
      <Slide><VenturesSlide /></Slide>,
    ];
    fullPageOptions.slides = slides;

    return (
      <div>
        <Fullpage
          onSlideChangeStart={this.onSlideChangeStart}
          onSlideChangeEnd={this.onSlideChangeEnd}
          {...fullPageOptions}
        />
        <Dots hide={activeSlide === 0} isScrolling={isScrolling} activeSlide={activeSlide} handleDotClick={this.goToSlide} />
      </div>
    );
  }
}
