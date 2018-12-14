import React, { Component } from 'react';
import styled from 'styled-components';
import dynamic from 'next/dynamic';
import Observer from 'react-intersection-observer';

const Wrapper = styled.div`
  width: 100%;
  transform: ${props => props.animateFromLeft ?
    'translateX(-100px)' :
    'translateY(200px)'
  };
  opacity: ${props => props.fadeIn ? 0 : 1};
  transition: transform 1s, opacity 1s;
  transition-delay: ${props => props.delay}ms;
  
  ${props => props.bgColor && `
    background-color: ${props.bgColor};
  `}

  ${props => props.noAnimation && `
    transform: none;
    opacity: 1;
    transition-property: none;
    transition-delay: 0;
  `}

  ${props => props.inview && `
    transform: translate(0, 0);
    opacity: 1;
  `}
`

const StyledObserver = styled(Observer)`
  width: 100%;
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
    const { children, ...props } = this.props;
    const { inView, loaded } = this.state;

    if (!loaded) return null;

    return (
      <StyledObserver {...props} onChange={this.handleOnChange} triggerOnce={true}>
        <Wrapper {...props} inview={inView ? 1 : 0}>
          {inView && children}
        </Wrapper>
      </StyledObserver>
    )
  }
}