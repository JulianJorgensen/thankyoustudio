import React from 'react';
import styled from 'styled-components';
import { aspectRatio } from 'utils/styleUtils';

const Wrapper = styled.div`
  display: flex;
  margin: 20px 40px;
`

const Grid = styled.div`
  display: grid;
  width: 100%;

  ${props => props.cols == "2" && `
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  `}

  * {
    background-color: ${props => props.bgColor};
    ${props => props.ratio}
  }
`

export default ({ children, ratio, ...props }) => (
  <Wrapper {...props}>
    <Grid {...props} ratio={aspectRatio(ratio)}>
      {children}
    </Grid>
  </Wrapper>
)