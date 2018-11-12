import React, { Component } from 'react';
import { connect } from 'react-redux';
import Router, { withRouter } from 'next/router';
import styled from 'styled-components';
import SlideItem from './components/SlideItem';
import Waypoint from 'react-waypoint';
import ChevronLeftIcon from 'assets/icons/FontAwesome/regular/chevron-left.svg';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import * as actions from 'store/actions';
import SlideItems from 'store/slideItems';
import { standAlonePages } from 'utils/variables';

const Slider = styled.div`
  position: absolute;
  z-index: 98;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  // overflow: hidden;
  pointer-events: none;
`

const Slides = styled.div`
  position: relative;
  width: inherit;
  height: inherit;
  pointer-events: none;
`

const BackButton = styled.div`
  position: absolute;
  top: 50%;
  left: 30px;
  z-index: 5;
  cursor: pointer;
  transition: opacity 0.2s;
  pointer-events: auto;

  ${props => props.isHidden && `
    opacity: 0;
  `}

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

    // set is sliding (we need to have certain styles for a slide when sliding)
    this.setIsSliding(true);
    setTimeout(() => {
      this.setIsSliding(false);
    }, 500)

    // change to the actual new url
    Router.push({
      pathname: '/' + nextSlide.slug.toLowerCase()
    }, nextSlide.slug ? '/work/' + nextSlide.slug.toLowerCase() : '/');
  }

  setIsSliding(isSliding) {
    this.setState({
      isSliding
    });
  }

  handleNextMouseLeave() {
    const { dispatch, router } = this.props;
    const isStandAlonePage = standAlonePages.includes(router.pathname.substr(1));

    dispatch(actions.setHasMouseLeftNextSlide(true));

    // if (isStandAlonePage) return;

    // let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    // if (scrollTop === 0) {
    //   scroll.scrollTo(150, {
    //     duration: 700,
    //     smooth: true
    //   });
    // }
    // dispatch(actions.setAutoScroll(false));
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
    const { activeSlide, prevSlide, activeSlideHidden, slider, usePrevAsNextSlide, hasMouseLeftNextSlide, fontsLoaded } = this.props.store;

    if (!activeSlide) return (
      <div></div>
    );

    return (
      <Waypoint
        onEnter={this.waypointEnter}
        onLeave={this.waypointLeave}
        topOffset='50%'
      >
        <Slider>
          <BackButton 
            contentColor={activeSlide.contentColor} 
            isHidden={activeSlide.index === 0 || slider.isScrollNSliding} 
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
                    isActive={isActive && !activeSlideHidden}
                    isNext={isNext}
                    isScrollNSliding={slider.isScrollNSliding}
                    image={SlideItemData.image}
                    background={SlideItemData.background}
                    contentColor={SlideItemData.contentColor}
                    hasMouseLeftNextSlide={hasMouseLeftNextSlide}
                    onMouseOut={isNext ? this.handleNextMouseLeave : ()=>{return}}
                    isActiveSlideHidden={activeSlideHidden}
                    fontsLoaded={fontsLoaded}
                    isSliding={this.state.isSliding}
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
