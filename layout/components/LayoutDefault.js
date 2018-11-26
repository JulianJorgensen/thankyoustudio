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
export default class Layout extends Component {
  constructor() {
    super();

    this.initRouterEventListeners = this.initRouterEventListeners.bind(this);
    this.setAutoScroll = this.setAutoScroll.bind(this);
    this.scrollToTop = this.scrollToTop.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.setActiveSlideToPrevious = this.setActiveSlideToPrevious.bind(this);
  }

  componentWillMount() {
    const { dispatch, router } = this.props;
    const url = router.asPath;
    const urlExploded = url.split('/');
    const currentPage = router.pathname.substr(1);

    // set video is playing
    if (url === '/') {
      dispatch(actions.landingVideoPlaying(true));

      setTimeout(() => {
        dispatch(actions.landingVideoPlaying(false));
      }, TIMINGS.FULL_SCREEN_VIDEO_DURATION)
    }

    // update slide if its a case (or landing page)
    const isCase = (url === '/' || (urlExploded[1] === 'work' && urlExploded[2]));
    if (isCase) {
      dispatch(actions.updateActiveSlide(currentPage));
    }
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
    }, TIMINGS.SET_IS_SLIDING_FALSE)

    dispatch(actions.setHeaderSolid(false));
  }

  routeChangeDefault() {
    const { dispatch, store } = this.props;

    dispatch(actions.condenseSlider(true));
    dispatch(actions.setHasMouseLeftNextSlide(true));

    this.setActiveSlideToPrevious();
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

  setIsSliding(isSliding) {
    this.props.dispatch(actions.setIsSliding(isSliding));
  }

  scrollToTop() {
    this.props.dispatch(actions.setIsScrollNSliding());
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, TIMINGS.SCROLL_TO_TOP);
  }

  setAutoScroll() {
    this.autoScroll = setTimeout(() => {
      const { store } = this.props;
      if (store.autoScroll) {
        scroll.scrollTo(150, {
          duration: TIMINGS.SCROLL_DURATION,
          smooth: true
        });
      }
    }, TIMINGS.SET_AUTO_SCROLL_TIMEOUT);
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