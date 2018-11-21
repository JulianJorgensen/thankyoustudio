import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Router, { withRouter } from 'next/router';
import { animateScroll as scroll } from 'react-scroll';
import Swipeable from 'react-swipeable';
import FontFaceObserver from 'fontfaceobserver';
import Header from 'components/Header';
import * as actions from 'store/actions';
import { TIMINGS } from 'utils/variables';
import withAnalytics from 'utils/withAnalytics';

const Wrapper = styled.div`
`

@withRouter
@withAnalytics
@connect((store) => ({
  store,
}))
export default class LayoutMobile extends Component {
  constructor() {
    super();

    this.initRouterEventListeners = this.initRouterEventListeners.bind(this);
    this.scrollToTop = this.scrollToTop.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }


  componentDidMount() {
    this.initFontObserver();
  }

  initFontObserver() {
    const font = new FontFaceObserver('Helvetica Neue')

    font.load().then(() => {
      this.props.dispatch(actions.confirmFontsLoaded());
    });
  }

  handleSwipedLeft() {
    alert("You Swiped left")
  }

  handleSwipedRight() {
    alert("You Swiped right")
  }

  scrollToTop() {
    this.props.dispatch(actions.setIsScrollNSliding());
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, TIMINGS.SCROLL_TO_TOP);
  }

  render() {
    const { children } = this.props;

    return (
      <Wrapper>
        <Header />
        <Swipeable
          onSwipedRight={this.handleSwipedRight}
          onSwipedLeft={this.handleSwipedLeft}
        >
          {children}
        </Swipeable>
      </Wrapper>
    )
  }
}