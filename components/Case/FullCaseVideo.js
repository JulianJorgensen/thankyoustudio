import React from 'react';
import styled from 'styled-components';
import LazyShow from 'components/lazyShow';
import Vimeo from 'components/Vimeo';
import { breakpoint } from 'utils/variables';

const Wrapper = styled(LazyShow)`
  padding: 20px 0 0;
  display: flex;
  justify-content: center;
  width: 100%;

  ${breakpoint.up('m')`
    padding: 20px 20px 0;
  `}
`

const StyledVimeo = styled(Vimeo)`
  width: 100%;
`

export default ({ children, ...props }) => (
  <Wrapper delay={500}>
    <StyledVimeo {...props} />
  </Wrapper>
)
