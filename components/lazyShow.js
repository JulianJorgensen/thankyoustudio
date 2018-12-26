import React, { Component } from 'react';
import styled from 'styled-components';
import dynamic from 'next/dynamic';
import { breakpoint } from 'utils/variables';

const Observer = dynamic(import('react-intersection-observer'), {
  ssr: false,
  loading: () => <div>loading!...</div>
});

const Wrapper = styled.div`
  width: 100%;
  opacity: 0;
  transition: transform 0.75s, opacity 0.75s;
  transition-delay: ${props => props.delay}ms;

  ${breakpoint.down('m')`
    transform: ${props => props.animateFromLeft ?
      'translateX(-60px)' :
      'translateY(60px)'
    };
  `}

  ${breakpoint.up('m')`
    transform: ${props => props.animateFromLeft ?
      'translateX(-60px)' :
      'translateY(60px)'
    };
  `}

  &&& {
    ${props => props.inview && `
      transform: translate(0, 0);
      opacity: 1;
    `}

    ${props => props.bgColor && `
      background-color: ${props.bgColor};
    `}

    ${props => props.noAnimation && `
      transform: none;
      opacity: 1;
      transition-property: none;
      transition-delay: 0;
    `}
  }
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