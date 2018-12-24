import React from 'react';
import styled from 'styled-components';
import ChevronRight from 'assets/icons/FontAwesome/solid/chevron-right.svg';
import Link from 'components/Link';

const appleBlue = '#0070c9';
const appleBlueDarkTheme = '#6bf';

const Wrapper = styled.div`
  display: inline-flex;
  align-items: center;
  pointer-events: auto;
`

const Text = styled.div`
  position: relative;
  color: ${appleBlue};
  font-weight: bold;
  pointer-events: auto;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    opacity: 0;
    height: 2px;
    width: 100%;
    background-color: ${appleBlue};
  }

  ${Wrapper}:hover &:after {
    opacity: 1;
  }

  ${props => props.whiteContent && `
    color: ${appleBlueDarkTheme};

    &:after {
      background-color: ${appleBlueDarkTheme};
    }
  `}
`

const Arrow = styled.div`
  width: 15px;
  height: 15px;
  margin-left: 3px;
  path {
    fill: ${props => props.whiteContent ? appleBlueDarkTheme : appleBlue};
  }

  ${props => props.down && `
    transform: rotate(90deg);
  `}
`

export default ({ children, ...props}) => (
  <Wrapper {...props}>
    <Text whiteContent={props.whiteContent}>{children}</Text>
    <Arrow whiteContent={props.whiteContent} down={props.downArrow}><ChevronRight /></Arrow>
  </Wrapper>
);
