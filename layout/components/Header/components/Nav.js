import React, { Component } from 'react';
import Router from 'next/router';
import Link from 'components/Link';
import styled from 'styled-components';
import NavItem from './NavItem';
import Logo from 'components/Logo';

const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  user-select: none;
  pointer-events: auto;

  ${props => props.mobileActive && `
    position: relative;
    z-index: 100;
    color: white;
  `}
`

const StyledLogo = styled(Logo)`
  font-size: 30px;
  margin-right: 7px;

  * {
    transform: translate(100%, 15%);
  }
`

export default class Nav extends Component {
  render() {
    const { navColor, page, mobileActive } = this.props;
    return (
      <Wrapper mobileActive={mobileActive}>
        <Link href="/"><NavItem navColor={navColor} anchor={<StyledLogo />} logo /></Link>
        <Link href="/work"><NavItem onMouseEnter={() => Router.prefetch('/work')} active={page === 'work'} navColor={navColor} anchor="Work" /></Link>
        <Link href="/about"><NavItem onMouseEnter={() => Router.prefetch('/about')} active={page === 'about'} navColor={navColor} anchor="About" /></Link>
        <Link href="/contact"><NavItem onMouseEnter={() => Router.prefetch('/contact')} active={page === 'contact'} navColor={navColor} anchor="Contact" /></Link>
      </Wrapper>
    )
  }
}