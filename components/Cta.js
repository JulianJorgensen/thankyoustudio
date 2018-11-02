import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { colors, easings } from 'utils/variables';

const Wrapper = styled.button`
  position: relative;
  display: inline-block;
  text-align: center;
  padding-left: 60px;
  padding-right: 10px;
  margin-top: 5px;
  height: 45px;
  font-size: 18px;
  text-decoration: none;
  text-transform: uppercase;
  transition: all 0.2s ${easings.easeInOutQuad};
  border: 0;
  background-color: transparent;
  color: ${props => props.white ? 'white' : 'black'};

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-1px);
    height: 2px;
    width: 40px;
    background-color: ${props => props.white ? 'white' : 'black'};
    transition: all 0.2s ${easings.easeInOutQuad};
  }

  &:hover {
    padding-left: 35px;
    padding-right: 35px;
    color: ${props => props.white ? 'black' : 'white'};
    &:before {
      width: 100%;
      height: 100%;
      top: 0;
    }
  }
`

const Label = styled.span`
  position: relative;
  z-index: 2;
  user-select: none;
`

export default ({ label, href, ...props }) => (
  <Link scroll={false} href={href}><Wrapper {...props}><Label>{label}</Label></Wrapper></Link>
);
