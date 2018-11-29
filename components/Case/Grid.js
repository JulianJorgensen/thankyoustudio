import React from 'react';
import styled from 'styled-components';
import LazyShow from 'components/lazyShow';
import { aspectRatio } from 'utils/styleUtils';
import { breakpoint } from 'utils/variables';

const Wrapper = styled.div`
  display: flex;
  margin: 10px 0;

  ${breakpoint.up('m')`
    margin: 20px 40px;
  `}
`

const Grid = styled.div`
  display: grid;
  width: 100%;

  ${props => props.cols == "2" && `
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
  `}

  ${props => props.cols == "2" && breakpoint.up('m')`
    grid-gap: 20px;
  `}

  * {
    background-color: ${props => props.bgColor};
    ${props => props.ratio}
  }
`

export default ({ children, ratio, ...props }) => (
  <LazyShow delay={200}>
    <Wrapper>
      <Grid {...props} ratio={aspectRatio(ratio)}>
        {children}
      </Grid>
    </Wrapper>
  </LazyShow>
)