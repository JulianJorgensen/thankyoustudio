import React, { Component } from 'react';
import { connect } from 'react-redux';
import Router, { withRouter } from 'next/router'
import NavItem from './components/NavItem';
import Logo from 'components/Logo';
import styled from 'styled-components';
import media from 'styled-media-query';
import Headroom from 'react-headroom';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { closeMobileNav, toggleMobileNav } from 'store/actions';
import MobileNav from './components/MobileNav';
import * as actions from 'store/actions';

const StyledHeadroom = styled(Headroom)`
  position: fixed;
  z-index: 99;
  width: 100%;

  .headroom {
    background-color: transparent;
    transition: all 0.3s;
    transition-delay: 0.2s;
    padding: 40px;
    display: flex;
    align-items: center;
  
    ${props => props.fixed && `
      padding: 20px 40px;
      background-color: ${props.color === 'white' ? 'black' : 'white'};
    `}

    ${props => props.scrolling && `
      padding: 40px;
      background-color: transparent;
      transition: all 0s;
    `}
  }
`

const Nav = styled.div`
  color: ${props => props.contentColor};
  transition: color 0.2s;

  display: flex;
  align-items: flex-end;

  svg path {
    fill: ${props => props.contentColor};
  }
`

const StyledLogo = styled(Logo)`
  font-size: 30px;
  line-height: 30px;
`

const Bars = styled.div`
  position: relative;
  z-index: 100;
  width: 40px;
  height: 40px;
  cursor: pointer;

  ${media.lessThan('medium')`
    display: none;
  `}

  &:after,
  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 6px;
    height: 3px;
    width: 30px;
    background-color: ${props => props.contentColor};
    transition: all 0.3s ease;
  }

  &:before {
    transform: translateY(4px);
  }
  &:after {
    transform: translateY(-4px);
  }

  ${props => props.active && `
    &:after,
    &:before {
      background-color: white;
    }
    &:before {
      transform: rotate(45deg) translateY(0);
    }
    &:after {
      transform: rotate(-45deg) translateY(0);
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
    const { store, router: { pathname, asPath } } = this.props;
    const { fixed } = this.state;

    const { activeSlide, isScrollNSliding, mobileNav } = store;

    let windowHeight;
    if (typeof(window) === 'object') {
      windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    }

    const contentColor = activeSlide ? activeSlide.contentColor : 'black';

    return (
      <StyledHeadroom 
        onUnpin={this.handleOnUnpin}
        onPin={this.handleOnPin}
        onUnfix={this.handleOnUnfix}
        pinStart={windowHeight ? windowHeight/1.8 : 300}
        fixed={fixed ? 'true' : ''}
        color={contentColor}
        scrolling={isScrollNSliding ? 'true' : 'false'}
      >
        <Nav contentColor={contentColor}>
          <NavItem contentColor={contentColor} anchor={<StyledLogo />} href="/" logo />
          <NavItem contentColor={contentColor} anchor="About" href="/about" />
          <NavItem contentColor={contentColor} anchor="Work" href="/work" />
          <NavItem contentColor={contentColor} anchor="Contact" href="/contact" />
        </Nav>
        <Bars active={mobileNav} onClick={this.handleMobileNavClick.bind(this)} />
        <MobileNav active={mobileNav} />
      </StyledHeadroom>
    );
  }
}
