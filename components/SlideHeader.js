import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';
import Cta from 'components/Cta';
import { colors, fonts } from 'utils/variables';

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 160px;
  transform: translateY(-50%);
  width: 500px;

  ${props => props.white && `
    color: white;
  `}

  ${media.lessThan('medium')`
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  `}
`

const Title = styled.h2`
  font-family: ${fonts.primary};
  font-size: 70px;
  color: ${props => props.white ? 'white' : 'black'};
  text-transform: uppercase;
`

export default ({ title, lead, cta, href, white, children }) => (
  <Wrapper white={white}>
    <Title white={white}>{ title }</Title>
    <p>{ lead }</p>
    <Cta white={white} label="Read more" href={href} />
    {children}
  </Wrapper>
);
