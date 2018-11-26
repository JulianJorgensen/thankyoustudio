import React, { Component } from 'react';
import Link from 'components/Link';
import media from 'utils/mediaQueries';
import styled from 'styled-components';
import NavItem from './NavItem';
import Logo from 'components/Logo';

const Wrapper = styled.div`
  color: ${props => props.navColor};
  transition: color 0.2s;

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
  line-height: 30px;
`

export default class Nav extends Component {
  render() {
    const { navColor, page, mobileActive } = this.props;
    return (
      <Wrapper navColor={navColor} mobileActive={mobileActive}>
        <Link href="/"><NavItem navColor={navColor} anchor={<StyledLogo />} logo /></Link>
        <Link href="/work"><NavItem active={page === 'work'} navColor={navColor} anchor="Work" /></Link>
        <Link href="/about"><NavItem active={page === 'about'} navColor={navColor} anchor="About" /></Link>
        <Link href="/contact"><NavItem active={page === 'contact'} navColor={navColor} anchor="Contact" /></Link>
      </Wrapper>
    )
  }
}