import React from 'react';
import styled from 'styled-components';
import LazyShow from 'components/lazyShow';
import Vimeo from 'components/Vimeo';
import { breakpoint, LAYOUT } from 'utils/variables';

const StyledVimeo = styled(Vimeo)`
  width: 100%;
`

export default ({ children, ...props }) => (
  <LazyShow delay={500}>
    <StyledVimeo {...props} />
  </LazyShow>
)
