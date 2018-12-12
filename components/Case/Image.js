import React, { Component } from 'react';
import styled from 'styled-components';
import LazyShow from 'components/lazyShow';
import { breakpoint } from 'utils/variables';

const Image = styled.img`
  opacity: 0;
  transition: opacity 0.2s ease;

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
    const { children, delay, ...props } = this.props;

    if (props.lazy) {
      return (
        <LazyShow delay={delay}>
          <Image onLoad={this.handleImageLoaded} loaded={this.state.loaded} {...props}>
            {children}
          </Image>
        </LazyShow>
      )
    }
  
    return (
      <Image loaded={this.state.loaded} {...props}>
        {children}
      </Image>
    )
  }
}
