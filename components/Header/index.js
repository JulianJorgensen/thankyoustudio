import React, { Component } from 'react';
import { connect } from 'react-redux';
import Router, { withRouter } from 'next/router'
import NavItem from './components/NavItem';
import Logo from 'components/Logo';
import styled from 'styled-components';
import media from 'styled-media-query';
import { closeMobileNav, toggleMobileNav } from 'store/actions';
import MobileNav from './components/MobileNav';

const Wrapper = styled.header`
  position: fixed;
  top: 40px;
  z-index: 99;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
`

const Nav = styled.div`
  color: ${props => props.lightContent ? 'white' : 'black'};
  transition: color 0.2s;

  display: flex;
  align-items: flex-end;

  svg path {
    fill: ${props => props.lightContent ? 'white' : 'black'}
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
    background-color: ${props => props.lightContent ? 'white' : 'black'};
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
  state = {};

  handleMobileNavClick() {
    this.props.dispatch(toggleMobileNav());
  }

  componentDidUpdate() {
    Router.onRouteChangeStart = url => {
      this.props.dispatch(closeMobileNav());
    }
  }

  render() {
    const { store, router: { pathname, asPath } } = this.props;
    let barsLightContent;

    if (store.marquee && store.marquee.active) {
      barsLightContent = !store.lightContent
    } else {
      barsLightContent = store.lightContent;
    }

    return (
      <Wrapper>
        <Nav lightContent={store.lightContent || store.mobileNav}>
          <NavItem lightContent={store.lightContent} anchor={<StyledLogo />} href="/" logo />
          <NavItem lightContent={store.lightContent} active={pathname === '/about'} anchor="About" href="/about" />
          <NavItem lightContent={store.lightContent} active={pathname === '/work' || asPath.substring(0,5) === '/work' } anchor="Work" href="/work" />
          <NavItem lightContent={store.lightContent} active={pathname === '/team'} anchor="Team" href="/team" />
          <NavItem lightContent={store.lightContent} active={pathname === '/contact'} anchor="Contact" href="/contact" />
        </Nav>
        <Bars lightContent={barsLightContent} active={store.mobileNav} onClick={this.handleMobileNavClick.bind(this)} />
        <MobileNav active={store.mobileNav} />
      </Wrapper>
    );
  }
}
