import React, { Component } from 'react';
import styled from 'styled-components';
import dynamic from 'next/dynamic';

const Observer = dynamic(import('react-intersection-observer'), {
  ssr: false
});


const Wrapper = styled.div`
  transform: translateY(${props => props.inview ? '0' : '100px'});
  opacity: ${props => props.inview ? '1' : '0'};
  transition: transform 1s, opacity 1s;
  transition-delay: ${props => props.delay}ms;
`

export default class LazyShow extends Component {
  constructor() {
    super();

    this.state = {};
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  componentDidMount() {

    this.setState({
      loaded: true
    });
  }

  handleOnChange(inView) {
    this.setState({
      inView
    });
  }

  render() {
    const { children, ...props } = this.props;

    if (!this.state.loaded) return <div></div>;

    return (
      <Wrapper {...props} inview={this.state.inView ? 1 : 0}>
        <Observer {...props} tag="div" onChange={this.handleOnChange} triggerOnce={true}>
          {children}
        </Observer>
      </Wrapper>
    )
  }
}
