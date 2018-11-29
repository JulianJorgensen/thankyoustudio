import React from 'react';
import styled from 'styled-components';
import LazyShow from 'components/lazyShow';
import Vimeo from 'components/Vimeo';

const Wrapper = styled(LazyShow)`
  padding: 200px 20px 0;
  display: flex;
  justify-content: center;
  width: 100%;
`

const StyledVimeo = styled(Vimeo)`
  width: 100%;
`

export default ({ children, ...props }) => (
  <Wrapper delay={700}>
    <StyledVimeo {...props} />
  </Wrapper>
)
