import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled, { injectGlobal } from 'styled-components';
import Router, { withRouter } from 'next/router';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import Header from 'components/Header';
import Slider from 'components/Slider';
import SlideItems from 'store/slideItems';
import * as actions from 'store/actions';
import HelveticaNeueRoman from 'fonts/37BC46_0_0.woff2';
import HelveticaNeueBold from 'fonts/37BC46_1_0.woff2';

injectGlobal`
  @font-face {
    font-family: 'Helvetica Neue';
    src: url(${HelveticaNeueRoman}) format('woff2'),
        url(${HelveticaNeueBold}) format('woff');
  }
`

const Wrapper = styled.div`
`

const standAlonePages = [
  'about',
  'work',
  'contact'
];

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
  }

  componentDidUpdate(oldProps) {
    const { router } = this.props;

    if (oldProps.router.pathname !== router.pathname) {
      window.addEventListener('scroll', this.handleScroll);
    }  
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    clearTimeout(this.autoScroll);
    window.removeEventListener('scroll', this.handleScroll);
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

      clearTimeout(this.autoScroll);
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > 0) {
        this.scrollToTop();
      }

      if (isStandAlonePage) {
        dispatch(actions.updateActiveSlide(slug));

        console.log('store.activeSlide.slug', store.activeSlide.slug.toLowerCase());
        if (!standAlonePages.includes(store.activeSlide.slug.toLowerCase())) {
          dispatch(actions.updatePrevSlide(store.activeSlide));
        }
      } else {
        dispatch(actions.updateActiveSlide(slug));
      }

      this.setAutoScroll();
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

    console.log('new url', url);
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
    scroll.scrollToTop({
      duration: 500,
      delay: 50,
      smooth: 'easeInQuint'
    });
  }

  setAutoScroll() {
    const { store } = this.props;

    console.log('setting autoScroll timeout');
    this.autoScroll = setTimeout(() => {
      if (store.autoScroll) {
        scroll.scrollTo(150, {
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