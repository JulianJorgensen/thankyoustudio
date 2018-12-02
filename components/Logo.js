import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  font-weight: bold;
  font-size: 30px;
  letter-spacing: -1px;
  -webkit-font-smoothing: subpixel-antialiased;
  user-select: none;
`

const Small = styled.div`
  display: block;
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translate(100%, -68%);
  line-height: 100%;
  font-size: 0.3em;
`

export default (props) => (
  <Wrapper {...props}>THANK YOU<Small>&reg;</Small></Wrapper>
);
