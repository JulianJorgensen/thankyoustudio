import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
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
  margin-bottom: 16px;
  cursor: pointer;

  transform: translateY(-50px);
  opacity: 0;
  transition: all 1s ${easings.easeOutShine};

  ${props => props.active && `
    transform: translateY(0);
    opacity: 1;
  `}

  :nth-child(1) {
    transition-delay: 0s;
  }

  :nth-child(2) {
    transition-delay: 0.1s;
  }

  :nth-child(3) {
    transition-delay: 0.2s;
  }
`

export default (props) => (
  <Wrapper {...props}>
    <Nav>
      <Link href='/about' scroll={false}><NavItem active={props.active}>About</NavItem></Link>
      <Link href='/work' scroll={false}><NavItem active={props.active}>Work</NavItem></Link>
      <Link href='/contact' scroll={false}><NavItem active={props.active}>Contact</NavItem></Link>
    </Nav>
  </Wrapper>
);
