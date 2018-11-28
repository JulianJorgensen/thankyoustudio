import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 320px 40px 200px;
  display: flex;

  ${props => props.dark && `
    background-color: black;
    color: white;
  `}
`

const LeftCol = styled.div`
  width: 50%;
`

const RightCol = styled.div`
  width: 50%;
`

export default ({ children, ...props }) => (
  <Wrapper {...props}>
    <LeftCol>
      {children}
    </LeftCol>
    <RightCol>
    </RightCol>
  </Wrapper>
)
