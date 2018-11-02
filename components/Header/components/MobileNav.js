import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Locations from 'components/Locations';
import Logo from 'components/Logo';
import { fonts, easings } from 'utils/variables';

const Wrapper = styled.nav`
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  height: 50vh;
  width: 100%;
  padding: 40px;
  transform: translateY(-100%);
  background-color: gray;
  transition: all 0.4s ${easings.easeInOutQuad};
  text-align: center;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-family: ${fonts.primary};

  ${props => props.active && `
    transform: translateY(0);
    background-color: black;
  `}
`

const Nav = styled.nav`
  color: white;
  list-style-type: none;
  text-align: left;
  font-size: 30px;
`

const NavItem = styled.li`
  margin-bottom: 12px;
  cursor: pointer;
`

export default (props) => (
  <Wrapper {...props}>
    <Nav>
      <Link href='/' scroll={false}><NavItem><Logo /></NavItem></Link>
      <Link href='/about' scroll={false}><NavItem>About</NavItem></Link>
      <Link href='/work' scroll={false}><NavItem>Work</NavItem></Link>
      <Link href='/contact' scroll={false}><NavItem>Contact</NavItem></Link>
    </Nav>

    <Locations />
  </Wrapper>
);
