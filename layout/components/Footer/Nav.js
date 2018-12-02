import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { breakpoint, LAYOUT } from 'utils/variables';

const Nav = styled.nav`
  display: flex;
  margin-top: 40px;
  margin-bottom: 20px;
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
    <NavItem><Link href="/ventures"><a>Ventures</a></Link></NavItem>
    <NavItem><Link href="/work"><a>Work</a></Link></NavItem>
    <NavItem><Link href="/about"><a>About</a></Link></NavItem>
    <NavItem><Link href="/contact"><a>Contact</a></Link></NavItem>
  </Nav>
);