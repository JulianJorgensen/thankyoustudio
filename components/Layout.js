import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Router, { withRouter } from 'next/router';
import { scroll } from 'react-scroll';
import FontFaceObserver from 'fontfaceobserver';
import Header from 'components/Header';
import Slider from 'components/Slider';
import * as actions from 'store/actions';
import { standAlonePages } from 'utils/variables';

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
    this.setUsePrevAsNextSlide = this.setUsePrevAsNextSlide.bind(this);
    this.scrollToTop = this.scrollToTop.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.toggleActiveSlide = this.toggleActiveSlide.bind(this);
  }

  componentWillMount() {
    const { dispatch, router } = this.props;
    const currentPage = router.pathname ? router.pathname.substr(1) : '';

    dispatch(actions.updateActiveSlide(currentPage));

    this.toggleActiveSlide(router.pathname);
  }

  componentDidMount() {
    this.initRouterEventListeners();
    window.addEventListener('scroll', this.handleScroll);

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
      const { dispatch, router, store } = this.props;

      const isStandAlonePage = standAlonePages.includes(url.substr(1));
      const urlExploded = url.split('/');
      let slug;

      switch(urlExploded[1]) {
        case 'work':
          if (urlExploded[2]) {
            slug = urlExploded[2];
          } else {
            slug = 'work';
          }
          break;
        default:
          slug = urlExploded[1];
      }

      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > 0) {
        this.scrollToTop();
      }

      clearTimeout(this.autoScroll);

      if (isStandAlonePage) {
        dispatch(actions.updateActiveSlide(slug));
        dispatch(actions.setHasMouseLeftNextSlide(true));

        if (!standAlonePages.includes(store.activeSlide.slug.toLowerCase())) {
          dispatch(actions.updatePrevSlide(store.activeSlide));
        }
      }

      if (!isStandAlonePage) {
        dispatch(actions.updateActiveSlide(slug));

        dispatch(actions.setAutoScroll(true));
        setTimeout(() => {
          this.setAutoScroll();
        }, SCROLL_DURATION);  
      }

      this.toggleActiveSlide(url);
      dispatch(actions.setHeaderSolid(false));
      this.setUsePrevAsNextSlide(url);

      return true;
    });

    // Server side route change
    Router.beforePopState(({ url, as: asUrl }) => {
      const { dispatch, router, store } = this.props;

      this.toggleActiveSlide(url);

      if (!standAlonePages.includes(url.substr(1))) {
        dispatch(actions.updateActiveSlide(url.substr(1)));
      }

      this.setUsePrevAsNextSlide();

      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 50);

      return true;
    })
  }

  setUsePrevAsNextSlide(url) {
    const { dispatch, store } = this.props;

    if (standAlonePages.includes(url ? url.substr(1) : '')) {
      dispatch(actions.setUsePrevAsNextSlide(true));
    } else {
      dispatch(actions.setUsePrevAsNextSlide(false));
    }
  }

  toggleActiveSlide(url) {
    const { dispatch } = this.props;

    if (standAlonePages.includes(url.substr(1))) {
      dispatch(actions.hideActiveSlide(true));
    } else {
      dispatch(actions.hideActiveSlide(false));
    }
  }

  scrollToTop() {
    this.props.dispatch(actions.setIsScrollNSliding());
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 480); // the number has to be less than the slider animation to prevent a flickering
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