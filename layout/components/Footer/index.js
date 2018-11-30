import React, { Component } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import media from 'utils/mediaQueries';
import InstagramIcon from 'assets/icons/FontAwesome/brands/instagram.svg';
import VimeoIcon from 'assets/icons/FontAwesome/brands/vimeo.svg';
import FacebookIcon from 'assets/icons/FontAwesome/brands/facebook.svg';
import Logo from 'components/Logo';
import Cta from 'components/Cta';
import { breakpoint, LAYOUT } from 'utils/variables';

const Wrapper = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
  color: white;
  width: 100%;
  padding: 80px ${LAYOUT.MOBILE.EDGE_MARGIN};

  ${breakpoint.up('m')`
    padding: 80px ${LAYOUT.EDGE_MARGIN};
    flex-direction: row;
    justify-content: space-between;
  `}
  `

const Details = styled.div`
  text-align: center;
  ${breakpoint.up('m')`
    text-align: right;
  `}
`

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

const ContactUs = styled.div`
  text-align: center;
  ${breakpoint.up('m')`
    text-align: left;
  `}
`

const Headline = styled.div`
  font-size: 30px;
`

const Subheadline = styled.div`
  font-size: 30px;
  opacity: 0.6;
  margin-bottom: 20px;
`

const StyledLogo = styled(Logo)`
  margin: 60px 0 30px;
  display: flex;
  justify-content: center;

  // position: absolute;
  // left: 0;
  // top: 0;
  // transform: rotate(-90deg) translateX(-100%);
  // transform-origin: left top;
`

const Locations = styled.div`
  display: flex;
  justify-content: center;
  opacity: 0.6;
  margin-bottom: 20px;
`

const Location = styled.div`
  margin-right: 10px;

  &:last-child {
    margin-right: 0;
  }
`

const SocialMediaIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 30px;
    height: 30px;
    margin-left: 15px;
    path {
      fill: white;
    }
  }
`

export default class Footer extends Component {
  state = {};

  render() {
    return (
      <Wrapper>          
          <ContactUs>
            <Headline>Got a project?</Headline>
            <Subheadline>Let's talk</Subheadline>
            <Cta white href="/contact" label="Contact us" />
          </ContactUs>
          <Details>
            <StyledLogo />
            <Nav>
              <NavItem><Link href="/ventures"><a>Ventures</a></Link></NavItem>
              <NavItem><Link href="/work"><a>Work</a></Link></NavItem>
              <NavItem><Link href="/about"><a>About</a></Link></NavItem>
              <NavItem><Link href="/contact"><a>Contact</a></Link></NavItem>
            </Nav>
            <Locations>
              <Location>Copenhagen</Location>
              <Location>Reykjavik</Location>
              <Location>San Francisco</Location>
            </Locations>
            <SocialMediaIcons>
              <Link href="/privacy"><a>Privacy</a></Link>
              <a href="http://www.instagram.com/explore/tags/thankyouculture/" target="new"><InstagramIcon /></a>
              <a href="http://vimeo.com/thankyoustudio/" target="new"><VimeoIcon /></a>
              <a href="http://facebook.com/thankyoustudio/" target="new"><FacebookIcon /></a>
            </SocialMediaIcons>
          </Details>
      </Wrapper>
    );
  }
}
