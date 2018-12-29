import React from 'react';
import styled from 'styled-components';
import LazyShow from 'components/lazyShow';
import { breakpoint } from 'utils/variables';

const Video = styled.video`
  width: 100%;
`

export default ({ children, src, delay, ...props }) => {
  if (props.lazy) {
    return (
      <LazyShow bgColor="#fafafa" delay={delay}>
        <Video {...props} playsInline autoPlay loop>
          <source src={src} type="video/mp4" />
        </Video>
      </LazyShow>
    )
  }

  return (
    <Video {...props} autoPlay playsInline loop>
      <source src={src} type="video/mp4" />
    </Video>
  )
}
