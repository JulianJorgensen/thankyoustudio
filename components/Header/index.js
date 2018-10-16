import React, { Component } from 'react';
import { connect } from 'react-redux';
import Router, { withRouter } from 'next/router'
import NavItem from './components/NavItem';
import Logo from 'components/Logo';
import styled from 'styled-components';
import media from 'styled-media-query';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { closeMobileNav, toggleMobileNav } from 'store/actions';
import MobileNav from './components/MobileNav';
import Headroom from 'react-headroom';
import * as actions from 'store/actions';

const StyledHeadroom = styled(Headroom)`
  position: fixed;
  z-index: 99;
  width: 100%;

  .headroom {
    display: flex;
    align-items: center;
    padding: 40px;
    background-color: transparent;
    width: 100%;
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
    this.handleOnNavClick = this.handleOnNavClick.bind(this);
  }

  componentWillUpdate() {
    Router.onRouteChangeStart = url => {
      this.props.dispatch(closeMobileNav());
    }
  }

  handleMobileNavClick() {
    this.props.dispatch(toggleMobileNav());
  }

  handleOnNavClick(section) {
    const { dispatch, store } = this.props;

    if (store.activeSlide.index !== 0) {
      dispatch(actions.setNextSlideIndex(store.activeSlide.index));
      dispatch(actions.updateActiveSlide('ThankYou'));
    }

    let scrollOptions = {};

    if (store.activeSlide.index === 0) {
      scrollOptions = {
        duration: 500,
        smooth: "easeOutQuad",
      }
    }

    setTimeout(() => {
      scroller.scrollTo(section.toLowerCase(), scrollOptions);
    }, 100);
  }

  render() {
    const { store, router: { pathname, asPath } } = this.props;

    if (!store.activeSlide) return (
      <div></div>
    );

    return (
        <StyledHeadroom
          onPin={() => this.setState({ pinned: true })}
          onUnpin={() => this.setState({ pinned: false })}
          downTolerance={50}
        >
            <Nav contentColor={store.activeSlide.contentColor}>
              <NavItem contentColor={store.activeSlide.contentColor} anchor={<StyledLogo />} logo handleOnClick={this.handleOnNavClick} />
              <NavItem contentColor={store.activeSlide.contentColor} anchor="About" handleOnClick={this.handleOnNavClick} />
              <NavItem contentColor={store.activeSlide.contentColor} anchor="Work" handleOnClick={this.handleOnNavClick} />
              <NavItem contentColor={store.activeSlide.contentColor} anchor="Contact" handleOnClick={this.handleOnNavClick} />
            </Nav>
            <Bars active={store.mobileNav} onClick={this.handleMobileNavClick.bind(this)} />
            <MobileNav active={store.mobileNav} />
        </StyledHeadroom>
    );
  }
}
