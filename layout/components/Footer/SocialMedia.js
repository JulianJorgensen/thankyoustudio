import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { breakpoint, LAYOUT } from 'utils/variables';
import InstagramIcon from 'assets/icons/FontAwesome/brands/instagram.svg';
import VimeoIcon from 'assets/icons/FontAwesome/brands/vimeo.svg';
import FacebookIcon from 'assets/icons/FontAwesome/brands/facebook.svg';

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

  ${breakpoint.up('m')`
    justify-content: flex-end;
  `}
`

export default () => (
  <SocialMediaIcons>
    <Link href="/privacy"><a>Privacy</a></Link>
    <a href="http://www.instagram.com/explore/tags/thankyouculture/" target="new"><InstagramIcon /></a>
    <a href="http://vimeo.com/thankyoustudio/" target="new"><VimeoIcon /></a>
    <a href="http://facebook.com/thankyoustudio/" target="new"><FacebookIcon /></a>
  </SocialMediaIcons>
);