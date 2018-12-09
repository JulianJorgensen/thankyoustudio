import React, { Component } from 'react';
import styled from 'styled-components';
import LazyShow from 'components/lazyShow';

const Image = styled.img`
  opacity: 0;
  transition: opacity 0.2s ease;

  ${props => props.loaded && `
    opacity: 1;
  `}
`

export default class ImageComponent extends Component {
  constructor() {
    super();

    this.state = {};
    this.handleImageLoaded = this.handleImageLoaded.bind(this);
  }

  handleImageLoaded() {
    this.setState({ loaded: true });
  }
  
  render() {
    const { delay, ...props } = this.props;

    return (
      <Image onLoad={this.handleImageLoaded} loaded={this.state.loaded} {...props} />
    )
  }
}
