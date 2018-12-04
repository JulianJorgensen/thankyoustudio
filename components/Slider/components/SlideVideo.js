import React, { Component } from 'react';
import styled from 'styled-components';
import { EASINGS, TIMINGS } from 'utils/variables';
import { breakpoint } from 'utils/variables';

const Wrapper = styled.div`
  position: absolute;
  overflow: hidden;
  right: 0;
  min-height: 102vh;
  min-width: 100vw;  
`

const Video = styled.video`
  min-height: 102vh;
  min-width: 100vw;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`

export default class SlideVideo extends Component {
  constructor(props){
    super(props);

    this.videoEl = null;
  }

  componentDidMount() {
    if (this.props.isActive) {
      this.videoEl.play();
    }
  }

  componentDidUpdate() {
    if (this.props.isActive) {
      this.videoEl.play();
    } else {
      this.videoEl.pause();
    }
  }

  render() {
    const { ...props } = this.props;

    return (
      <Wrapper>
        <Video ref={el => this.videoEl = el} muted loop>
          <source src={props.video} type="video/mp4" />
        </Video>
      </Wrapper>
    )
  }
}