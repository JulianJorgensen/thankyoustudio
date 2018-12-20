import React from 'react';
import Router from 'next/router';
import Link from 'components/Link';
import styled from 'styled-components';
import { breakpoint, LAYOUT } from 'utils/variables';

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  margin-top: 40px;
  margin-bottom: 20px;

  ${breakpoint.m `
    justify-content: flex-end;
  `}
`

const NavItem = styled.div`
  margin-right: 20px;
  font-size: 20px;

  &:last-child {
    margin-right: 0;
  }
`

export default () => (
  <Nav>
    {/* <NavItem onMouseEnter={() => Router.prefetch('/ventures')}><Link href="/ventures"><a>Ventures</a></Link></NavItem> */}
    <NavItem onMouseEnter={() => Router.prefetch('/work')}><Link href="/work"><a>Work</a></Link></NavItem>
    <NavItem onMouseEnter={() => Router.prefetch('/about')}><Link href="/about"><a>About</a></Link></NavItem>
    <NavItem onMouseEnter={() => Router.prefetch('/contact')}><Link href="/contact"><a>Contact</a></Link></NavItem>
  </Nav>
);