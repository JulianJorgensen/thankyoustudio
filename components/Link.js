import React, { Component } from 'react';
import Router from 'next/router';
import { connect } from 'react-redux';
import styled from 'styled-components';
import SlideItems from 'store/slideItems';
import * as actions from 'store/actions';
import { TIMINGS } from 'utils/variables';

const Wrapper = styled.div`
  cursor: pointer;
`

@connect((store) => ({
  store,
}))
export default class Link extends Component {
  constructor() {
    super();
    this.handleOnClick = this.handleOnClick.bind(this);
    this.setActiveSlideToPrevious = this.setActiveSlideToPrevious.bind(this);
  }

  handleOnClick() {
    const { dispatch, href } = this.props;
    const hrefExploded = href.split('/');
    const isHome = href === '/';
    const isCase = (hrefExploded[1] === 'work' && hrefExploded[2]);
    const slug = isCase ? hrefExploded[2] : hrefExploded[1];

    if (isCase) dispatch(actions.updateActiveSlide(slug));
    if (isHome) dispatch(actions.updateActiveSlide('/'));

    dispatch(actions.setIsScrollNSliding());
    dispatch(actions.setIsSliding(true));

    if (isCase || isHome) {
      dispatch(actions.condenseSlider(false));
      dispatch(actions.setHeaderSolid(false));
    } else {
      dispatch(actions.condenseSlider(true));
      dispatch(actions.setHasMouseLeftNextSlide(true));
    }

    setTimeout(() => {
      window.scrollTo(0, 0);
    }, TIMINGS.SCROLL_TO_TOP);

    setTimeout(() => {
      Router.push({
        pathname: `/${slug}`
      }, isCase ? `/work/${slug}` : `/${slug}`);

      dispatch(actions.setIsSliding(false));
    }, isCase ? TIMINGS.SET_IS_SLIDING_FALSE : 50);
  }

  setActiveSlideToPrevious() {
    const { dispatch, store } = this.props;
    let prevSlide;
    
    if (!store.activeSlide) return;

    if (store.activeSlide.index === 0) {
      prevSlide = SlideItems[SlideItems.length - 1];
    } else {
      prevSlide = SlideItems[store.activeSlide.index - 1];
    }

    dispatch(actions.updateActiveSlide(prevSlide.slug));
  }

  render() {
    return (
      <Wrapper className={this.props.className} onClick={this.handleOnClick}>{this.props.children}</Wrapper>
    )
  }
}