import React, { Component } from 'react';
import media from 'styled-media-query';
import styled from 'styled-components';
import NavItem from './NavItem';
import Logo from 'components/Logo';

const Wrapper = styled.div`
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

export default class Nav extends Component {
  render() {
    const { contentColor, page } = this.props;
    return (
      <Wrapper contentColor={contentColor}>
        <NavItem contentColor={contentColor} anchor={<StyledLogo />} href="/" logo />
        <NavItem active={page === 'about'} contentColor={contentColor} anchor="About" href="/about" />
        <NavItem active={page === 'work'} contentColor={contentColor} anchor="Work" href="/work" />
        <NavItem active={page === 'contact'} contentColor={contentColor} anchor="Contact" href="/contact" />
      </Wrapper>
    )
  }
}