import React from 'react';
import styled from 'styled-components';
import Vimeo from 'components/Vimeo';

const StyledVimeo = styled(Vimeo)`
  width: 100%;

  > * {
    width: 100%;
  }
`

export default ({ children, ...props }) => (
  <StyledVimeo {...props} muted />
)
