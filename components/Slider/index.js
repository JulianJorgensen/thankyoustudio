import React, { Component } from 'react';
import { connect } from 'react-redux';
import throttle from 'lodash.throttle';
import Router, { withRouter } from 'next/router';
import { animateScroll as scroll } from 'react-scroll';
import styled from 'styled-components';
import SlideItem from './components/SlideItem';
import ChevronLeftIcon from 'assets/icons/FontAwesome/regular/chevron-left.svg';
import * as actions from 'store/actions';
import SlideItems from 'store/slideItems';
import media from 'utils/mediaQueries';
import { breakpoint, LAYOUT, EASINGS, TIMINGS } from 'utils/variables';

const Slider = styled.div`
  position: absolute;
  height: ${LAYOUT.MOBILE.HERO_HEIGHT};
  width: 100%;
  overflow-y: ${props => props.isCondensed ? 'hidden' : 'visible'};
  top: 0;
  left: 0;
  transition: left ${TIMINGS.SLIDER} ease-out;
  pointer-events: none;

  ${breakpoint.up('m')`
    height: 100vh;
  `}
  
  ${props => props.isCondensed && `
    left: 5%;
  `}
`

const Slides = styled.div`
  position: relative;
  width: 100%;
  height: inherit;
  pointer-events: none;
`

const BackButton = styled.div`
  display: none;
  position: absolute;
  top: 50%;
  left: 30px;
  z-index: 6;
  opacity: 1;
  cursor: pointer;
  pointer-events: auto;

  ${breakpoint.up('m') `
    display: ${props => props.hide ? 'none' : 'block'};
  `}

  svg {
    width: 30px;
    height: 30px;
    path {
      fill: ${props => props.contentColor};
      transition: fill 0.2s;
    }
  }
`

@withRouter
@connect((store) => ({
  store,
}))
export default class FancySlider extends Component {
  constructor() {
    super();
    this.state = {};

    this.handleBackClick = this.handleBackClick.bind(this);
    this.handleNextMouseLeave = this.handleNextMouseLeave.bind(this);
    this.triggerNextClick = this.triggerNextClick.bind(this);
    this.handleIsInViewChange = this.handleIsInViewChange.bind(this);
    this.handleOnKeyDown = throttle(this.handleOnKeyDown, 200).bind(this);
    this.handleOnKeyUp = this.handleOnKeyUp.bind(this);
  }

  componentDidMount() {
    this.addArrowKeyEvents();
    this.showNextSlide();
  }

  addArrowKeyEvents() {
    document.onkeydown = this.handleOnKeyDown;
    document.onkeyup = this.handleOnKeyUp;
  }

  async showNextSlide() {
    setTimeout(() => {
      this.setState({
        showNextSlide: true
      });
    }, 2000);
  }

  handleOnKeyUp(e) {
    this.setState({
      keyDown: false
    });
  }

  handleOnKeyDown(e) {
    e.preventDefault();
    const { store } = this.props;
    if (store.condenseSlider) return;
    if (this.state.keyDown) return;

    this.setState({
      keyDown: true
    });

    switch (e.keyCode) {
      case 37: // arrow left
        this.handleBackClick();
        break;
      case 38: // arrow up
        this.triggerFastScrollUp();
        break;
      case 39: // arrow right
        this.triggerNextClick();
        break;
      case 40: // arrow down
        this.triggerFastScrollDown();
        break;
    }
  }

  triggerFastScrollDown() {
    scroll.scrollMore(window.innerHeight, {
      duration: 700
    });
  }

  triggerFastScrollUp() {
    scroll.scrollMore(-window.innerHeight, {
      duration: 700
    });
  }

  handleBackClick() {
    const { dispatch, store } = this.props;

    if (!store.activeSlide) return;

    let prevSlide;
    if (store.activeSlide.index === 0) {
      prevSlide = SlideItems[SlideItems.length - 1];
    } else {
      prevSlide = SlideItems[store.activeSlide.index - 1];
    }

    dispatch(actions.setHasMouseLeftNextSlide(true));
    dispatch(actions.setAutoScroll(false));
    dispatch(actions.updateActiveSlide(prevSlide.slug.toLowerCase()));
    dispatch(actions.setIsSliding(true));

    setTimeout(() => {
      dispatch(actions.setIsSliding(false));

      // first push to new page after slide transition (to prevent janking)
      Router.push({
        pathname: '/' + prevSlide.slug.toLowerCase()
      }, prevSlide.slug ? '/work/' + prevSlide.slug.toLowerCase() : '/');
    }, TIMINGS.SET_IS_SLIDING_FALSE);
  }

  triggerNextClick() {
    const { dispatch, store } = this.props;

    if (!store.activeSlide) return;
    if (store.isSliding) return;

    let nextSlide;
    if (store.activeSlide.index === SlideItems.length - 1) {
      nextSlide = SlideItems[0];
    } else {
      nextSlide = SlideItems[store.activeSlide.index + 1];
    }

    if (!nextSlide) nextSlide = SlideItems[0];

    if (nextSlide.slug !== '') {
      dispatch(actions.setHasMouseLeftNextSlide(false));
    }

    dispatch(actions.updateActiveSlide(nextSlide.slug.toLowerCase()));
    dispatch(actions.setIsScrollNSliding());
    dispatch(actions.setIsSliding(true));
    dispatch(actions.setHeaderSolid(false));

    setTimeout(() => {
      window.scrollTo(0, 0);
    }, TIMINGS.SCROLL_TO_TOP);

    // set is sliding (we need to have certain styles for a slide when sliding)
    setTimeout(() => {
      // first push to new page after slide transition (to prevent janking)
      Router.push({
        pathname: '/' + nextSlide.slug.toLowerCase()
      }, nextSlide.slug ? '/work/' + nextSlide.slug.toLowerCase() : '/');  

      dispatch(actions.setIsSliding(false));
    }, TIMINGS.PAGE_TRANSITION_TIMEOUT)
  }

  handleNextMouseLeave() {
    const { dispatch, router } = this.props;

    dispatch(actions.setHasMouseLeftNextSlide(true));
  }

  handleIsInViewChange(inView) {
    const { dispatch } = this.props;
    if (inView) {
      dispatch(actions.setHeaderSolid(false));
    } else {
      dispatch(actions.setHeaderSolid(true));
    }
  }

  render() {
    const { 
      activeSlide,
      condenseSlider,
      prevSlide,
      slider,
      isSliding,
      usePrevAsNextSlide,
      hasMouseLeftNextSlide,
      fontsLoaded,
      navColor,
      reel,
      isMobile
    } = this.props.store;

    if (!activeSlide) return null;

    return (
        <Slider
          isCondensed={condenseSlider}
        >
          <BackButton
            contentColor={navColor}
            onClick={this.handleBackClick}
            hide={activeSlide.index === 0}
          >
            <ChevronLeftIcon />
          </BackButton>
          <Slides isScrollNSliding={slider.isScrollNSliding}>
            {
              SlideItems.map((SlideItemData, i) => {
                const isActive = activeSlide.index === i;

                // detect if is previous
                let isPrevious;
                if (activeSlide.index === 0) {
                  isPrevious = i === SlideItems.length - 1;
                } else {
                  isPrevious = activeSlide.index === i + 1;
                }

                // detect if was previous
                let wasPrevious;
                if (prevSlide) {
                  wasPrevious = i === prevSlide.index;
                } else {
                  wasPrevious = i === SlideItems.length - 1;
                }

                // detect if is next
                let isNext;
                if (usePrevAsNextSlide && prevSlide) {
                  isNext = prevSlide.index === i;
                } else {
                  isNext = ((activeSlide.index === i - 1) || (activeSlide.index === (SlideItems.length - 1) && i === 0));
                }

                return (
                  <SlideItem
                    key={`slide-item-${i}`}
                    slideItemData={SlideItemData}
                    onClickHandler={isNext ? this.triggerNextClick : () => {}}
                    isPrevious={isPrevious}
                    wasPrevious={wasPrevious}
                    isActive={isActive}
                    isCondensed={condenseSlider}
                    isNext={isNext}
                    isScrollNSliding={slider.isScrollNSliding}
                    isSliding={isSliding}
                    reel={reel}
                    hasMouseLeftNextSlide={hasMouseLeftNextSlide}
                    onMouseOut={isNext ? this.handleNextMouseLeave : ()=>{return}}
                    fontsLoaded={fontsLoaded}
                    showNextSlide={isNext && this.state.showNextSlide}
                    isFirstWorkSlide={i === 1}
                    isMobile={isMobile}
                  />
                )
              })
            }
          </Slides>
        </Slider>
    );
  }
}