import React from 'react';
import styled from 'styled-components';
import { breakpoint } from 'utils/variables';

const Wrapper = styled.div`
  font-size: 16px;
  font-weight: ${props => props.bold ? 'bold' : ''};
  max-width: 500px;

  ${breakpoint.up('s')`
    font-size: 18px;
  `}

  ${breakpoint.up('m')`
    font-size: 22px;
  `}
`

export default ({ children, ...props }) => (
  <Wrapper {...props}>
    {children}
  </Wrapper>
)