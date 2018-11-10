import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  opacity: 0;
  transition: opacity 0.3s ease-in;
  width: 100%;
  height: inherit;

  ${props => props.sliderVideo && `
    position: absolute;
    width: 100vw;
    right: 0;
    pointer-events: none;
  `}

  ${props => props.ready && `
    opacity: 1;
  `}
`

const Video = styled.video`
  width: 100%;

  ${props => props.sliderVideo && `
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    min-width: 100%;
    min-height: 100vh;
    pointer-events: none;
    overflow: hidden;

    iframe {
      width: 100vw;
      height: 56.25vw; /* Given a 16:9 aspect ratio, 9/16*100 = 56.25 */
      min-height: 100vh;
      min-width: 177.77vh; /* Given a 16:9 aspect ratio, 16/9*100 = 177.77 */
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  `}

  ${props => props.responsive && `
    iframe {
      width: 100%;
      height: 56.25vw; /* Given a 16:9 aspect ratio, 9/16*100 = 56.25 */
    }
  `}
`

export default class VideoComponent extends Component {
  constructor() {
    super();

    this.state = {};

    this.handleOnReady = this.handleOnReady.bind(this);
  }

  handleOnReady() {
    this.setState({
      ready: true,
    });
  }

  render() {
    const { vimeoId, isActive, className, sliderVideo, ...otherProps } = this.props;
    const { ready } = this.state;

    return (
      <Wrapper ready={ready} sliderVideo={sliderVideo}>
        <Video
          className={className}
          video={vimeoId}
          muted={true}
          onLoaded={this.handleOnReady}
          paused={!isActive}
          sliderVideo={sliderVideo}
          {...otherProps}
        />
      </Wrapper>
    )
  }
}
