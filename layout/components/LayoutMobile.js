import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Router, { withRouter } from 'next/router';
import Swipeable from 'react-swipeable';
import Header from 'layout/components/Header';
import Slider from 'components/Slider';
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
  }

  componentDidMount() {
    this.initRouterEventListeners();
  }

  initRouterEventListeners() {
    // Client side route change
    Router.router.events.on('routeChangeStart', (url, err) => {

      setTimeout(() => {
        window.scrollTo(0, 0);
      }, TIMINGS.SCROLL_TO_TOP);

      return true;
    });

    // Server side route change
    Router.beforePopState(({ url, as: asUrl }) => {
      // window.scrollTo(0, 0);
      return true;
    })
  }

  handleSwipedLeft() {
    // alert("You Swiped left")
  }

  handleSwipedRight() {
    // alert("You Swiped right")
  }

  render() {
    const { children } = this.props;

    return (
      <Swipeable
        onSwipedRight={this.handleSwipedRight}
        onSwipedLeft={this.handleSwipedLeft}
      >
        <Wrapper>
          <Header isMobile={true} />
          <Slider />
          {children}
        </Wrapper>
        <style jsx global>{`
          .fade-enter {
            transition-property: opacity;
            position: fixed !important;
            z-index: 9;
            opacity: 0;
          }

          .fade-enter-active {
            position: fixed !important;
            transition-duration: ${TIMINGS.DEFAULT_PAGE_WRAPPER};
            opacity: 1;
          }

          .fade-exit {
            transition: opacity ${TIMINGS.DEFAULT_PAGE_WRAPPER};
            z-index: 2;
            opacity: 1;
          }

          .fade-exit-active {
            opacity: 0;
          }
        `}
        </style>
      </Swipeable>
    )
  }
}