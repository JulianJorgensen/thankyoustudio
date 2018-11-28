import React from 'react';
import styled from 'styled-components';
import Vimeo from 'components/Vimeo';

const Wrapper = styled.div`
  padding: 200px 0;
  display: flex;
  justify-content: center;
`

const StyledVimeo = styled(Vimeo)`
  iframe {
    width: 100vw;
    height: 50vw;
  }
`

export default ({ children, ...props }) => (
  <Wrapper>
    <StyledVimeo {...props} />
  </Wrapper>
)
