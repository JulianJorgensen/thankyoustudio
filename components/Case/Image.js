import React from 'react';
import styled from 'styled-components';
import LazyShow from 'components/lazyShow';
import { breakpoint } from 'utils/variables';

const Image = styled.img`
`

export default ({ children, delay, ...props }) => {
  if (props.lazy) {
    return (
      <LazyShow delay={delay}>
        <Image {...props}>
          {children}
        </Image>
      </LazyShow>
    )
  }

  return (
    <Image {...props}>
      {children}
    </Image>
  )
}
