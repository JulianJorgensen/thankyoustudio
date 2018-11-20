import React from 'react';
import styled from 'styled-components';
import media from 'utils/mediaQueries';

const Wrapper = styled.div`
  position: relative;
  z-index: 100;
  width: 40px;
  height: 30px;
  cursor: pointer;
  pointer-events: auto;

  ${media.tablet`
    pointer-events: none;
    margin-bottom: 8px;
    height: 40px;
  `}

  &:after,
  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 6px;
    height: 3px;
    width: 30px;
    background-color: ${props => props.navColor};
    transition: all 0.3s ease;

    ${media.tablet`
      display: none;
    `}
  }

  &:before {
    transform: translateY(4px);
  }
  &:after {
    transform: translateY(-4px);
  }

  ${props => props.active && `
    &:after,
    &:before {
      background-color: white;
    }
    &:before {
      transform: rotate(45deg) translateY(0);
    }
    &:after {
      transform: rotate(-45deg) translateY(0);
    }
  `}
`
export default (props) => (
  <Wrapper {...props} />
);
