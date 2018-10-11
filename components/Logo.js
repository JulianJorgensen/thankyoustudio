import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  font-weight: bold;
  font-size: 30px;
  letter-spacing: -1px;
  -webkit-font-smoothing: subpixel-antialiased;
`

const Small = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translate(100%, -393%);
  line-height: 0.3em;
  font-size: 0.3em;
`

export default (props) => (
  <Wrapper {...props}>THANK YOU<Small>&reg;</Small></Wrapper>
);
