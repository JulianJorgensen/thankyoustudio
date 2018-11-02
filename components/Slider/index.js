import React, { Component } from 'react';
import { connect } from 'react-redux';
import Router from 'next/router';
import styled from 'styled-components';
import SlideItem from './components/SlideItem';
import Waypoint from 'react-waypoint';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import * as actions from 'store/actions';
import SlideItems from 'store/slideItems';

const Slider = styled.div`
  position: absolute;
  z-index: 98;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
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
  font-size: 80px;
  cursor: pointer;
  color: ${props => props.contentColor};
  transition: opacity 0.2s;
  pointer-events: auto;

  ${props => props.isHidden && `
    opacity: 0;
  `}
`

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
  }

  handleBackClick() {
    const { dispatch, store } = this.props;
    const prevSlide = SlideItems[store.activeSlide.index - 1];

    Router.push({
      pathname: '/' + prevSlide.slug.toLowerCase()
    }, prevSlide.slug ? '/work/' + prevSlide.slug.toLowerCase() : '/');
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
    const { activeSlide, prevSlide, activeSlideHidden, isScrollNSliding, usePrevAsNextSlide } = this.props.store;
    const { primaryContentIsAnimating } = this.state;

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
            isHidden={activeSlide.index === 0 || isScrollNSliding} 
            onClick={this.handleBackClick}
          >
            &lsaquo;
          </BackButton>
          <Slides isScrollNSliding={isScrollNSliding}>
            {
              SlideItems.map((SlideItemData, i) => {
                const isPrevious = activeSlide.index === i + 1;
                const isActive = activeSlide.index === i;
                let isNext;
                if (usePrevAsNextSlide) {
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
                    onCtaClickHandler={this.onCtaClick}
                    isPrevious={isPrevious}
                    isActive={isActive && !activeSlideHidden}
                    isNext={isNext}
                    isScrollNSliding={isScrollNSliding}
                    image={SlideItemData.image}
                    background={SlideItemData.background}
                    contentColor={SlideItemData.contentColor}
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
