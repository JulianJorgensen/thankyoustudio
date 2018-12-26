import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Router, { withRouter } from 'next/router';
import { animateScroll as scroll } from 'react-scroll';
import Header from 'layout/components/Header';
import Slider from 'components/Slider';
import * as actions from 'store/actions';
import SlideItems from 'store/slideItems';
import { TIMINGS } from 'utils/variables';

const Wrapper = styled.div`
`

@withRouter
@connect((store) => ({
  store,
}))
export default class LayoutDesktop extends Component {
  constructor() {
    super();

    this.initRouterEventListeners = this.initRouterEventListeners.bind(this);
    this.scrollToTop = this.scrollToTop.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    this.initRouterEventListeners();
    window.addEventListener('scroll', this.handleScroll);
  }

  componentDidUpdate(oldProps) {
    const { router } = this.props;

    if (oldProps.router.pathname !== router.pathname) {
      window.addEventListener('scroll', this.handleScroll);
    }  
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    clearTimeout(this.autoScroll);
  }

  handleScroll() {
    window.removeEventListener('scroll', this.handleScroll);

    // prevent autoscroll
    clearTimeout(this.autoScroll);
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
      const { dispatch, router, store } = this.props;
      const urlExploded = asUrl.split('/');
      const isCase = (asUrl === '/' || (urlExploded[1] === 'work' && urlExploded[2]));

      if (isCase && store.condenseSlider) {
        dispatch(actions.condenseSlider(false));
      }

      if (isCase && !store.condenseSlider) {
        dispatch(actions.updateActiveSlide(url.substr(1)));
      }

      this.props.dispatch(actions.setIsSliding(true));
      setTimeout(() => {
        this.props.dispatch(actions.setIsSliding(false));
      }, TIMINGS.SET_IS_SLIDING_FALSE)

      // scroll to top
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 50);

      return true;
    })
  }

  setIsSliding(isSliding) {
    this.props.dispatch(actions.setIsSliding(isSliding));
  }

  scrollToTop() {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, TIMINGS.SCROLL_TO_TOP);
  }

  render() {
    const { children } = this.props;

    return (
      <Wrapper>
        <Header />
        <Slider />
        {children}
      </Wrapper>
    )
  }
}