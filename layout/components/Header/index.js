import React, { Component } from 'react';
import { connect } from 'react-redux';
import Router, { withRouter } from 'next/router'
import styled from 'styled-components';
import Headroom from 'react-headroom';
import { closeMobileNav, toggleMobileNav } from 'store/actions';
import Nav from './components/Nav';
import MobileNav from './components/MobileNav';
import Bars from './components/Bars';
import { breakpoint, LAYOUT } from 'utils/variables';

const StyledHeadroom = styled(Headroom)`
  position: fixed;
  z-index: 99;
  width: 100%;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.1s;

  ${props => props.fontsloaded && `
    opacity: 1;
  `}

  .headroom {
    background-color: transparent;
    transition: all 0.3s;
    transition-delay: 0.2s;
    display: flex;
    align-items: center;  
    justify-content: space-between;
    pointer-events: none;

    ${breakpoint.down('m')`
      padding: 20px ${LAYOUT.MOBILE_EDGE_MARGIN};
    `}

    ${breakpoint.up('m')`
      padding: ${props => props.fixed ? '20px' : '40px'} ${LAYOUT.EDGE_MARGIN};
    `}
  }

  ${props => props.scrollnsliding && `
    .headroom {
      background-color: transparent;
      transition: all 0s;
    }
  `}

  ${props => props.fixed && `
    .headroom {
      background-color: ${props.color === 'white' ? 'black' : 'white'};
      transition-delay: 0.6s;

      ${props.scrollnsliding && `
        background-color: transparent;
        transition-delay: 0s;
        transition-duration: 0s;
        padding: 20px 40px;
      `}
    }
  `}
`

@withRouter
@connect((store) => ({
  store,
}))
export default class Header extends Component {
  constructor() {
    super();

    this.state = {};
    this.handleOnUnpin = this.handleOnUnpin.bind(this);
    this.handleOnPin = this.handleOnPin.bind(this);
    this.handleOnUnfix = this.handleOnUnfix.bind(this);
  }

  componentWillUpdate() {
    Router.onRouteChangeStart = url => {
      this.props.dispatch(closeMobileNav());
    }
  }

  handleMobileNavClick() {
    this.props.dispatch(toggleMobileNav());
  }

  handleOnUnpin() {
    this.setState({
      onPinned: false,
      fixed: true
    });
  }

  handleOnPin() {
    this.setState({
      onPinned: true,
      fixed: true
    });
  }

  handleOnUnfix() {
    this.setState({
      fixed: false
    });
  }

  render() {
    const { store, router } = this.props;
    const { fixed } = this.state;
    const { activeSlide, slider, mobileNav, navColor } = store;

    let windowHeight;
    if (typeof(window) === 'object') {
      windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    }

    const page = router.asPath.split('/')[1];

    return (
      <StyledHeadroom 
        onUnpin={this.handleOnUnpin}
        onPin={this.handleOnPin}
        onUnfix={this.handleOnUnfix}
        pinStart={300}
        fixed={fixed}
        color={navColor}
        scrollnsliding={slider.isScrollNSliding}
        fontsloaded={store.fontsLoaded}
      >
        <Nav navColor={navColor} page={page} mobileActive={mobileNav} />
        <Bars navColor={navColor} active={mobileNav} onClick={this.handleMobileNavClick.bind(this)} />
        <MobileNav active={mobileNav} />
      </StyledHeadroom>
    );
  }
}
