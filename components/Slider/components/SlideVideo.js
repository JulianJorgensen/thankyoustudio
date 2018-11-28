import React, { Component } from 'react';
import styled from 'styled-components';
import { EASINGS, TIMINGS } from 'utils/variables';
import media from 'utils/mediaQueries';

const Wrapper = styled.video`
  position: absolute;
  right: 0;
  width: 100vw;
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
      <Wrapper ref={el => this.videoEl = el} muted>
        <source src={props.video} type="video/mp4" />
      </Wrapper>
    )
  }
}