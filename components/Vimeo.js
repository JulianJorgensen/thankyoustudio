import React, { Component } from 'react';
import Vimeo from '@u-wave/react-vimeo';
import styled from 'styled-components';

const Wrapper = styled.div`
`

const Video = styled(Vimeo)`
  position: relative;
  width: 100%;
  overflow: hidden;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`

export default class VimeoVideo extends Component {
  render() {
    const { vimeoId, className, ...otherProps } = this.props;
    return (
      <Wrapper className={className}>
        <Video
          video={vimeoId}
          {...otherProps}
        />
      </Wrapper>
    )
  }
}
