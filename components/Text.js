import React from 'react';
import styled from 'styled-components';
import LazyShow from 'components/lazyShow';
import { breakpoint } from 'utils/variables';

const Wrapper = styled.div`
  ${breakpoint.up('m')`
    grid-column-start: ${props => props.columnStart};
  `}
`

const Text = styled.div`
  display: flex;
  align-items: center;
  font-size: 25px;
  font-weight: bold;
  padding: 10px 6px;

  ${breakpoint.up('m')`
    padding: 0;
    font-size: 35px;
  `}

  ${props => props.intro && `
    display: block;
    align-items: flex-end;
  `}

  ${props => props.intro && breakpoint.up('m')`
    padding: 290px 40px 10px;
    column-count: 2;
    column-gap: 60px;
  `}
`

export default ({ children, columnStart, ...props }) => (
  <Wrapper columnStart={columnStart}>
    <LazyShow delay={200}>
      <Text {...props}>
        {children}
      </Text>
    </LazyShow>
  </Wrapper>
)