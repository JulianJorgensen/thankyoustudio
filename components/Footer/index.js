import React, { Component } from 'react';
import styled from 'styled-components';
import { wrapper, container } from 'utils/styles';
import { fonts, colors } from 'utils/variables';
import Logo from 'assets/icons/julian-jorgensen-logo.svg';
import SignatureImage from 'assets/images/julian-signature.png';
import GithubIcon from 'assets/icons/FontAwesome/brands/github.svg';
import LinkedInIcon from 'assets/icons/FontAwesome/brands/linkedin-in.svg';
import AngelListIcon from 'assets/icons/FontAwesome/brands/angellist.svg';

const Wrapper = styled.footer`
  ${wrapper()}
  font-family: ${fonts.primary};
  font-weight: 500;
  background: radial-gradient(circle at 80%, ${colors.curiousBlue} 20%, ${colors.catalinaBlue} 100%);
  padding: 80px 0;
`

const Container = styled.div`
  ${container()}
`

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 30px;
  margin-bottom: 30px;
  border-bottom: 2px solid black;
`

const BottomRow = styled.div`
  display: flex;
  justify-content: space-between;
`

const Signature = styled.div`
  img {
    position: absolute;
    margin-top: -20px;
    margin-left: -10px;
    height: 108px;
    width: 196px;
  }
`

const Nav = styled.nav`
  display: flex;
`

const NavItem = styled.a`
  text-transform: uppercase;
  margin-left: 20px;
  padding: 6px 10px;

  ${props => props.border && `
    border: 1px solid black;
    border-radius: 4px;
  `}
`

const SocialMedia = styled.div`
  display: flex;

  a {
    margin-left: 15px;
    opacity: 0.6;
    transition: all 0.2s;

    &:hover {
      opacity: 1;
    }
  }

  svg {
    height: 30px;
  }
`

const Copyright = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  font-style: italic;
  text-transform: uppercase;
  opacity: 0.2;

  svg {
    height: 25px;
    width: 28px;
  }
`

export default class Footer extends Component {
  state = {};

  render() {
    return (
      <Wrapper>
        <Container>
          <TopRow>
            <Signature><img src={SignatureImage} alt='Julian signature' height='108' width='196' /></Signature>
            <Nav>
              <NavItem href='/frontend-ux'>Frontend & UX</NavItem>
              <NavItem href='/consulting'>Consulting</NavItem>
              <NavItem href='/about'>About</NavItem>
              <NavItem href='/portfolio'>Portfolio</NavItem>
              <NavItem href='/faq'>Faq</NavItem>
              <NavItem href='/contact' border>Contact</NavItem>
            </Nav>
          </TopRow>
          <BottomRow>
            <Copyright><Logo /> Julian Jorgensen &copy; 2018</Copyright>
            <SocialMedia>
              <a href="https://github.com/julianjorgensen" target="new" data-tip="See my Github" data-effect="solid"><GithubIcon /></a>
              <a href="https://www.linkedin.com/in/julianjorgensen" target="new" data-tip="See my LinkedIn" data-effect="solid"><LinkedInIcon /></a>
              <a href="https://angel.co/julianjorgensen" target="new" data-tip="See my Angel profile" data-effect="solid"><AngelListIcon /></a>      
            </SocialMedia>
          </BottomRow>
        </Container>
      </Wrapper>
    );
  }
}
