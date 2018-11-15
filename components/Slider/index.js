import React, { Component } from 'react';
import { connect } from 'react-redux';
import Router, { withRouter } from 'next/router';
import styled from 'styled-components';
import SlideItem from './components/SlideItem';
import Waypoint from 'react-waypoint';
import ChevronLeftIcon from 'assets/icons/FontAwesome/regular/chevron-left.svg';
import { animateScroll as scroll } from 'react-scroll'
import * as actions from 'store/actions';
import SlideItems from 'store/slideItems';

const Slider = styled.div`
  position: absolute;
  width: ${props => props.isCondensed ? '0%' : '100%'};
  overflow-y: ${props => props.isCondensed ? 'hidden' : 'visible'};
  top: 0;
  right: 0;
  transition: width 0.5s;
  height: 100vh;
  pointer-events: none;
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
@withRouter
@connect((store) => ({
  store,
}))
export default class FancySlider extends Component {
  constructor() {
    super();
    this.state = {};

    this.handleBackClick = this.handleBackClick.bind(this);
    this.waypointEnter = this.waypointEnter.bind(this);
    this.waypointLeave = this.waypointLeave.bind(this);
    this.handleNextMouseLeave = this.handleNextMouseLeave.bind(this);
    this.triggerNextClick = this.triggerNextClick.bind(this);
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
    const prevSlide = SlideItems[store.activeSlide.index - 1];

    dispatch(actions.setHasMouseLeftNextSlide(true));
    dispatch(actions.setAutoScroll(false));

    if (prevSlide) {
      Router.push({
        pathname: '/' + prevSlide.slug.toLowerCase()
      }, prevSlide.slug ? '/work/' + prevSlide.slug.toLowerCase() : '/');
    }
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

  waypointEnter() {
    const { dispatch } = this.props;
    dispatch(actions.setHeaderSolid(false));
  }

  waypointLeave() {
    const { dispatch } = this.props;

    dispatch(actions.setHeaderSolid(true));
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
      navColor
    } = this.props.store;

    if (!activeSlide) return (
      <div></div>
    );

    return (
      <Waypoint
        onEnter={this.waypointEnter}
        onLeave={this.waypointLeave}
        topOffset='50%'
      >
        <Slider isCondensed={condenseSlider} isScrollNSliding={slider.isScrollNSliding}>
          <BackButton 
            contentColor={navColor}
            hide={activeSlide.index === 0 || isSliding || slider.isScrollNSliding || !hasMouseLeftNextSlide}
            onClick={this.handleBackClick}
          >
            <ChevronLeftIcon />
          </BackButton>
          <Slides isScrollNSliding={slider.isScrollNSliding}>
            {
              SlideItems.map((SlideItemData, i) => {
                const isPrevious = activeSlide.index === i + 1;
                const isActive = activeSlide.index === i;
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
                    isActive={isActive}
                    isCondensed={condenseSlider}
                    isNext={isNext}
                    isScrollNSliding={slider.isScrollNSliding}
                    isSliding={isSliding}
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
      </Waypoint>
    );
  }
}
