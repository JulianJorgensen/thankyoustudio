import React, { Component } from 'react';
import Vimeo from '@u-wave/react-vimeo';
import styled from 'styled-components';

const Wrapper = styled.div`
`

const Video = styled(Vimeo)`
  width: 100%;
`

export default class VimeoVideo extends Component {
  render() {
    const { vimeoId, className, ...otherProps } = this.props;

    return (
      <Wrapper>
        <Video
          className={className}
          video={vimeoId}
          {...otherProps}
        />
      </Wrapper>
    )
  }
}
