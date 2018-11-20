import React, { Component } from 'react';
import { connect } from 'react-redux';
import Router, { withRouter } from 'next/router';
import styled from 'styled-components';
import Observer from 'react-intersection-observer';
import { animateScroll as scroll } from 'react-scroll'

import SlideItem from './components/SlideItem';
import ChevronLeftIcon from 'assets/icons/FontAwesome/regular/chevron-left.svg';
import * as actions from 'store/actions';
import SlideItems from 'store/slideItems';
import media from 'utils/mediaQueries';
import { TIMINGS } from 'utils/variables';

const Slider = styled.div`
  position: absolute;
  width: ${props => props.isCondensed ? '0%' : '100%'};
  overflow-y: ${props => props.isCondensed ? 'hidden' : 'visible'};
  top: 0;
  right: 0;
  transition: width ${TIMINGS.SLIDER};
  height: 100vw;
  pointer-events: none;

  ${media.tablet`
    height: 100vh;
  `}
`

const Slides = styled.div`
  position: relative;
  width: 100%;
  height: inherit;
  pointer-events: none;
`

const BackButton = styled.div`
  position: absolute;
  top: 50%;
  left: 30px;
  z-index: 5;
  opacity: ${props => props.hasMouseLeftNextSlide ? '1' : '0'};
  cursor: pointer;
  pointer-events: auto;

  svg {
    width: 40px;
    height: 40px;
    path {
      fill: ${props => props.contentColor};
      transition: fill 0.2s;
    }
  }
`

const ShowNextSlideZone = styled.div`
  position: fixed;
  z-index: 1000;
  top: 0;
  right: 0;
  height: 100vh;
  width: 10vw;
  pointer-events: auto;
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
  }

  componentDidMount() {
    this.addArrowKeyEvents();
  }

  addArrowKeyEvents() {
    document.onkeydown = (e) => {
      switch (e.keyCode) {
        case 37:
          this.handleBackClick();
          break;
        case 39:
          this.triggerNextClick();
          break;
      }
    };
  }

  handleBackClick() {
    const { dispatch, store } = this.props;
    let prevSlide;
    if (store.activeSlide.index === 0) {
      prevSlide = SlideItems[SlideItems.length - 1];
    } else {
      prevSlide = SlideItems[store.activeSlide.index - 1];
    }

    dispatch(actions.setHasMouseLeftNextSlide(true));
    dispatch(actions.setAutoScroll(false));

    Router.push({
      pathname: '/' + prevSlide.slug.toLowerCase()
    }, prevSlide.slug ? '/work/' + prevSlide.slug.toLowerCase() : '/');
  }

  triggerNextClick() {
    const { dispatch, store } = this.props;
    let nextSlide
    if (store.activeSlide.index === SlideItems.length - 1) {
      nextSlide = SlideItems[0];
    } else {
      nextSlide = SlideItems[store.activeSlide.index + 1];
    }

    if (store.usePrevAsNextSlide) {
      nextSlide = store.prevSlide;
    }

    if (!nextSlide) nextSlide = SlideItems[0];

    if (nextSlide.slug !== '') {
      dispatch(actions.setHasMouseLeftNextSlide(false));
    }

    // change to the actual new url
    Router.push({
      pathname: '/' + nextSlide.slug.toLowerCase()
    }, nextSlide.slug ? '/work/' + nextSlide.slug.toLowerCase() : '/');
  }

  handleNextMouseLeave() {
    const { dispatch, router } = this.props;

    dispatch(actions.setHasMouseLeftNextSlide(true));
  }

  onCtaClick() {
    scroll.scrollTo(window.innerHeight);
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
      isLandingVideoPlaying
    } = this.props.store;

    if (!activeSlide) return (
      <div></div>
    );

    return (
      <Observer
        onChange={this.handleIsInViewChange}
        tag="div"
      >
        <Slider isCondensed={condenseSlider} isScrollNSliding={slider.isScrollNSliding}>
          <BackButton 
            contentColor={navColor}
            show={hasMouseLeftNextSlide}
            onClick={this.handleBackClick}
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
                    key={`i-${SlideItemData.slug}`}
                    slug={SlideItemData.slug}
                    title={SlideItemData.title}
                    subtitle={SlideItemData.subtitle}
                    vimeoId={SlideItemData.vimeoId}
                    onClickHandler={isNext ? this.triggerNextClick : () => {}}
                    onCtaClickHandler={this.onCtaClick}
                    isPrevious={isPrevious}
                    wasPrevious={wasPrevious}
                    isActive={isActive}
                    isCondensed={condenseSlider}
                    isNext={isNext}
                    isScrollNSliding={slider.isScrollNSliding}
                    isSliding={isSliding}
                    isLandingVideoPlaying={isLandingVideoPlaying}
                    image={SlideItemData.image}
                    background={SlideItemData.background}
                    contentColor={SlideItemData.whiteContent ? 'white' : 'black'}
                    hasMouseLeftNextSlide={hasMouseLeftNextSlide}
                    onMouseOut={isNext ? this.handleNextMouseLeave : ()=>{return}}
                    fontsLoaded={fontsLoaded}
                  />
                )
              })
            }
          </Slides>
        </Slider>
      </Observer>
    );
  }
}
