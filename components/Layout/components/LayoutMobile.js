import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Router, { withRouter } from 'next/router';
import Swipeable from 'react-swipeable';
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
export default class Layout extends Component {
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
          <Header />
          {children}
        </Wrapper>
        <style jsx global>{`
          .fade-enter {
            transition-property: transform;
            transform: translateX(300px);
            position: fixed !important;
            top: 0;
            z-index: 3;
          }

          .fade-enter-active {
            position: fixed !important;
            transition-duration: ${TIMINGS.DEFAULT_PAGE_WRAPPER};
            transform: translateX(0px);
          }

          .fade-exit {
            transition: transform ${TIMINGS.DEFAULT_PAGE_WRAPPER};
            transform: translateX(0px);
            z-index: 2;
          }

          .fade-exit-active {
            transform: translateX(-100px);
          }
        `}
        </style>
      </Swipeable>
    )
  }
}