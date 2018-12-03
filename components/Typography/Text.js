import React from 'react';
import styled from 'styled-components';
import { breakpoint } from 'utils/variables';

const Wrapper = styled.div`
  font-size: 24px;
  font-weight: ${props => props.bold ? 'bold' : ''};

  ${breakpoint.up('m')`
    font-size: 30px;
  `}
`

export default ({ children, ...props }) => (
  <Wrapper {...props}>
    {children}
  </Wrapper>
)