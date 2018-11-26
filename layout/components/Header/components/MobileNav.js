import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { FONTS, EASINGS } from 'utils/variables';

const Wrapper = styled.nav`
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  height: 0;
  width: 100%;
  transform: translateY(-100%);
  background-color: gray;
  transition: all 0.4s ${EASINGS.EASE_IN_OUT_QUAD};
  text-align: center;
  display: flex;
  align-items: center;
  font-family: ${FONTS.PRIMARY};
  overflow: hidden;

  ${props => props.active && `
    height: 80vh;
    transform: translateY(0);
    background-color: black;
  `}
`

const Nav = styled.nav`
  color: white;
  list-style-type: none;
  text-align: left;
  font-size: 30px;
  pointer-events: auto;
  padding: 40px;
`

const NavItem = styled.li`
  margin-bottom: 16px;
  cursor: pointer;

  transform: translateY(-50px);
  opacity: 0;
  transition: all 1s ${EASINGS.EASE_OUT_SHINE};

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
