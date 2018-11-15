import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Router, { withRouter } from 'next/router';
import { animateScroll as scroll } from 'react-scroll';
import FontFaceObserver from 'fontfaceobserver';
import Header from 'components/Header';
import Slider from 'components/Slider';
import * as actions from 'store/actions';

const Wrapper = styled.div`
`

const SCROLL_DURATION = 400;

@withRouter
@connect((store) => ({
  store,
}))
export default class Layout extends Component {
  constructor() {
    super();

    this.initRouterEventListeners = this.initRouterEventListeners.bind(this);
    this.setAutoScroll = this.setAutoScroll.bind(this);
    this.scrollToTop = this.scrollToTop.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentWillMount() {
    const { dispatch, router } = this.props;
    const currentPage = router.pathname ? router.pathname.substr(1) : '';

    dispatch(actions.updateActiveSlide(currentPage));
  }

  componentDidMount() {
    this.initRouterEventListeners();
    window.addEventListener('scroll', this.handleScroll);

    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 150);

    this.initFontObserver();
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

  initFontObserver() {
    const font = new FontFaceObserver('Helvetica Neue')

    font.load().then(() => {
      this.props.dispatch(actions.confirmFontsLoaded());
    });
  }

  initRouterEventListeners() {
    // Client side route change
    Router.router.events.on('routeChangeStart', (url) => {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > 0) {
        this.scrollToTop();
      }

      const urlExploded = url.split('/');
      const isCase = (url === '/' || (urlExploded[1] === 'work' && urlExploded[2]));

      if (isCase) {
        this.routeChangeCase(url);
      } else {
        this.routeChangeDefault();
      }

      return true;
    });

    // Server side route change
    Router.beforePopState(({ url, as: asUrl }) => {
      const { dispatch, router, store } = this.props;

      console.log('beforePopState');
      // if (!standAlonePages.includes(url.substr(1))) {
      //   dispatch(actions.updateActiveSlide(url.substr(1)));
      // }

      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 50);

      return true;
    })
  }

  routeChangeCase(url) {
    const { dispatch } = this.props;
    let slug = url.split('/')[2];

    dispatch(actions.condenseSlider(false));
    dispatch(actions.updateActiveSlide(slug));

    // set is sliding (we need to have certain styles for a slide when sliding)
    this.setIsSliding(true);
    setTimeout(() => {
      this.setIsSliding(false);
    }, 500)

    dispatch(actions.setHeaderSolid(false));
  }

  routeChangeDefault() {
    const { dispatch, store } = this.props;

    console.log('route change default');

    dispatch(actions.condenseSlider(true));
    dispatch(actions.setHasMouseLeftNextSlide(true));
  }

  setIsSliding(isSliding) {
    this.props.dispatch(actions.setIsSliding(isSliding));
  }

  scrollToTop() {
    this.props.dispatch(actions.setIsScrollNSliding());
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 495); // the number has to be less than the slider animation to prevent a flickering
  }

  setAutoScroll() {
    this.autoScroll = setTimeout(() => {
      const { store } = this.props;
      if (store.autoScroll) {
        scroll.scrollTo(150, {
          duration: SCROLL_DURATION,
          smooth: true
        });
      }
    }, 6000);
  }

  render() {
    const { children } = this.props;

    return (
      <Wrapper id="top">
        <Header />
        <Slider />
        {children}
      </Wrapper>
    )
  }
}