import React, { Component } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import media from 'utils/mediaQueries';
import InstagramIcon from 'assets/icons/FontAwesome/brands/instagram.svg';
import VimeoIcon from 'assets/icons/FontAwesome/brands/vimeo.svg';
import FacebookIcon from 'assets/icons/FontAwesome/brands/facebook.svg';
import Logo from 'components/Logo';
import Cta from 'components/Cta';

const Wrapper = styled.footer`
  background-color: black;
  color: white;
  width: 100%;
  padding: 80px 40px;

  ${media.tablet`
    display: flex;
    justify-content: space-between;
    height: 300px;
  `}
`

const LeftCol = styled.div`
  position: relative;
`

const RightCol = styled.div`
`


const Nav = styled.nav`
  display: flex;
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
  padding-left: 80px;
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
  position: absolute;
  left: 0;
  top: 0;
  transform: rotate(-90deg) translateX(-100%);
  transform-origin: left top;
`

const Locations = styled.div`
  opacity: 0.6;
  margin-bottom: 20px;

  ${media.tablet`
    text-align: right;
  `}
`

const Location = styled.div`
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0;
  }
`

const SocialMediaIcons = styled.div`
  display: flex;
  align-items: center;

  svg {
    width: 30px;
    height: 30px;
    margin-left: 15px;
    path {
      fill: white;
    }
  }

  ${media.tablet`
    justify-content: flex-end;
  `}
`

export default class Footer extends Component {
  state = {};

  render() {
    return (
      <Wrapper>
        <LeftCol>
          <StyledLogo />
          <ContactUs>
            <Headline>Got a project?</Headline>
            <Subheadline>Let's talk</Subheadline>
            <Cta href="/contact" label="Contact us" white />
          </ContactUs>
        </LeftCol>
        <RightCol>
          <Nav>
            <NavItem><Link href="/about"><a>About</a></Link></NavItem>
            <NavItem><Link href="/work"><a>Work</a></Link></NavItem>
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
        </RightCol>
      </Wrapper>
    );
  }
}
