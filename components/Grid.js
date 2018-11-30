import React from 'react';
import styled from 'styled-components';
import { aspectRatio } from 'utils/styleUtils';
import { breakpoint, LAYOUT } from 'utils/variables';

const Wrapper = styled.div`
  display: flex;
  margin: ${LAYOUT.MOBILE.EDGE_MARGIN};

  ${breakpoint.up('m')`
    margin: 20px 40px;
  `}
`

const Grid = styled.div`
  display: grid;
  width: 100%;

  ${props => props.cols == "2" && `
    grid-template-columns: 1fr 1fr;
    grid-gap: ${LAYOUT.MOBILE.EDGE_MARGIN};
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
  <Wrapper>
    <Grid {...props} ratio={aspectRatio(ratio)}>
      {children}
    </Grid>
  </Wrapper>
)