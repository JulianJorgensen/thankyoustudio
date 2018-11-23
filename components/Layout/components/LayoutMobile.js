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

  initRouterEventListeners() {
    // Client side route change
    Router.router.events.on('routeChangeStart', (url, err) => {

      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > 0) {
        this.scrollToTop();
      }

      return true;
    });

    // Server side route change
    Router.beforePopState(({ url, as: asUrl }) => {
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 50);

      return true;
    })
  }

  handleSwipedLeft() {
    alert("You Swiped left")
  }

  handleSwipedRight() {
    alert("You Swiped right")
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
      </Swipeable>
    )
  }
}