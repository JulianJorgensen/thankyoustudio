import React, { Component } from 'react';
import { connect } from 'react-redux';
import Router, { withRouter } from 'next/router'
import throttle from 'lodash.throttle';
import styled from 'styled-components';
import Headroom from 'react-headroom';
import { closeMobileNav, toggleMobileNav } from 'store/actions';
import Nav from './components/Nav';
import MobileNav from './components/MobileNav';
import Bars from './components/Bars';
import { breakpoint, LAYOUT } from 'utils/variables';

const Wrapper = styled.header`
  position: fixed;
  z-index: 99;
  width: 100%;
  pointer-events: none;
  opacity: 0;
  transition-property: color, transform;
  transition-duration: 0.6s;
  transition-timing-function: ease;
  color: ${props => props.color};
  padding: 30px ${LAYOUT.EDGE_MARGIN};

  ${props => props.hide && `
    transform: translateY(-100%);
  `}

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: white;
    transform: translateY(-100%);
    transition: transform 0.3s ease;
  }

  ${props => props.isSolid && `
    &:before {
      transform: translateY(0);
    }
  `}

  ${props => props.fontsloaded && `
    opacity: 1;
  `}
`

const SWITCH_TO_SOLID = 800;
const START_HEADER_ANIMATION = 400;

@withRouter
@connect((store) => ({
  store,
}))
export default class Header extends Component {
  constructor() {
    super();

    this.state = {};

    this.headerEl = null;
    this.headerAnimation = null;

    this.handleOnScroll = this.handleOnScroll.bind(this);
    this.setScrollDirection = throttle(this.setScrollDirection, 15);
    this.animateHeader = throttle(this.animateHeader, 15);
    this.setIsSolid = throttle(this.setIsSolid, 15);
  }

  componentDidMount() {
    document.addEventListener('scroll', this.handleOnScroll);
  }

  componentWillUpdate() {
    Router.onRouteChangeStart = url => {
      this.props.dispatch(closeMobileNav());
    }
  }

  handleMobileNavClick() {
    this.props.dispatch(toggleMobileNav());
  }

  handleOnScroll(e) {
    // Detect scroll direction
    this.setScrollDirection();
    
    this.setIsSolid();

    this.animateHeader();
  }

  setIsSolid() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > SWITCH_TO_SOLID) {
      this.setState({
        isSolid: true
      });
    } else {
      this.setState({
        isSolid: false
      });
    }
  }

  animateHeader(e) {
    if (!this.headerEl) return;

    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const { isSolid, direction, lastScrollPosition } = this.state;

    if (direction === "top" || (scrollTop < START_HEADER_ANIMATION) || scrollTop > 1000) {
      this.headerAnimation = TweenLite.to(this.headerEl, 0.5, { top: 0 });
    } else {
      this.headerAnimation = TweenLite.set(this.headerEl, { top: (-scrollTop+START_HEADER_ANIMATION)/2.5 });
    }
  }

  setScrollDirection() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const { lastScrollPosition } = this.state;
    if (!scrollTop) return;
    if (lastScrollPosition > scrollTop) {
      this.setState({
        direction: 'top',
        lastScrollPosition: scrollTop
      });
    } else {
      this.setState({
        direction: 'bottom',
        lastScrollPosition: scrollTop
      });
    }
  }

  render() {
    const { store, router, isMobile } = this.props;
    const { isSolid, direction } = this.state;
    const { activeSlide, slider, mobileNav, navColor } = store;

    let windowHeight;
    if (typeof(window) === 'object') {
      windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    }

    const page = router.asPath.split('/')[1];

    return (
      <Wrapper
        fontsloaded={store.fontsLoaded}
        color={navColor}
        scrollnsliding={slider.isScrollNSliding}
        isSolid={isSolid}
        hide={isSolid && direction === 'bottom'}
        ref={div => this.headerEl = div}
      >
        <Nav navColor={isSolid ? 'black' : navColor} page={page} mobileActive={mobileNav} />
        {/* <Bars navColor={isSolid ? 'black' : navColor} active={mobileNav} onClick={this.handleMobileNavClick.bind(this)} /> */}
        <MobileNav active={mobileNav} />
      </Wrapper>
    );
  }
}
