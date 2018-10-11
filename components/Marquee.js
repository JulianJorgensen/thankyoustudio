import React, { Component } from 'react';
import { connect } from 'react-redux';
import Video from 'components/Video';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  height: 80vh;
  width: 100%;
  font-size: 60px;
  text-transform: uppercase;
  background-color: black;
  overflow: hidden;
`

const StyledVideo = styled(Video)`
  position: relative;
  opacity: 0.6;
`

const Title = styled.h1`
  position: absolute;
  z-index: 3;
  bottom: 15vh;
  left: 95px;
`

@connect((store) => ({
  store,
}))
export default class Marquee extends Component {
  render () {
    const { vimeoId, title } = this.props;

    return (
      <Wrapper>
        <Title>{title}</Title>
        <StyledVideo vimeoId={vimeoId} background fullWidth />
      </Wrapper>
    )
  }
}
