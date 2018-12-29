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
  }

  handleOnClick() {
    const { dispatch, href, store } = this.props;
    const hrefExploded = href.split('/');
    const isHome = href === '/';
    const isCase = (hrefExploded[1] === 'work' && hrefExploded[2]);
    const slug = isCase ? hrefExploded[2] : hrefExploded[1];
    const isSliderActive = !store.condenseSlider;

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

    // UPDATE PAGE ROUTE
    let routeChangeTimeout = 0;
    if (isCase && isSliderActive) {
      routeChangeTimeout = store.isMobile ? TIMINGS.MOBILE.CHANGE_CASE_CONTENT : TIMINGS.CHANGE_CASE_CONTENT;
    }

    setTimeout(() => {
      Router.push({
        pathname: `/${slug}`
      }, isCase ? `/work/${slug}` : `/${slug}`);
    }, routeChangeTimeout);


    // SET IS SCROLLING FALSE
    let setIsSlidingTimeout = 0;
    if (isCase && isSliderActive) {
      setIsSlidingTimeout = store.isMobile ? TIMINGS.MOBILE.SET_IS_SLIDING_FALSE : TIMINGS.SET_IS_SLIDING_FALSE;
    }

    setTimeout(() => {
      dispatch(actions.setIsSliding(false));
    }, setIsSlidingTimeout);

  }

  render() {
    return (
      <Wrapper className={this.props.className} onClick={this.handleOnClick}>{this.props.children}</Wrapper>
    )
  }
}