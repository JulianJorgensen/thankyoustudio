import React, { Component } from 'react';
import styled from 'styled-components';
import LazyShow from 'components/lazyShow';
import { breakpoint } from 'utils/variables';

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fafafafa;

  ${breakpoint.m`
    // background-color: ${props => props.bgColor ? props.bgColor : 'transparent'};  
  `}
`

const Image = styled.img`
  opacity: 0;
  transition: opacity 0.2s ease;
  width: ${props => props.inline ? 'auto' : '100%'};

  ${props => props.loaded && `
    opacity: 1;
  `}
`

export default class CaseImage extends Component {
  constructor() {
    super();

    this.state = {};
    this.handleImageLoaded = this.handleImageLoaded.bind(this);
  }

  handleImageLoaded() {
    this.setState({ loaded: true });
  }
  
  render() {
    const { children, delay, bgColor, ...props } = this.props;

    if (props.lazy) {
      return (
        <ImageWrapper bgColor={bgColor}>
          <LazyShow delay={delay}>
            <Image onLoad={this.handleImageLoaded} loaded={this.state.loaded} {...props}>
              {children}
            </Image>
         </LazyShow>
        </ImageWrapper>
      )
    }
  
    return (
      <ImageWrapper bgColor={bgColor}>
        <Image loaded={this.state.loaded} {...props}>
          {children}
        </Image>
      </ImageWrapper>
    )
  }
}