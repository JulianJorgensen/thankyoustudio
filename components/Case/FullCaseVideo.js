import React from 'react';
import styled from 'styled-components';
import LazyShow from 'components/lazyShow';
import Vimeo from 'components/Vimeo';

const StyledVimeo = styled(Vimeo)`
  width: 100%;
`

export default ({ children, ...props }) => (
  <LazyShow delay={500} fadeIn>
    <StyledVimeo {...props} />
  </LazyShow>
)
