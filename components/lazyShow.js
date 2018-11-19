import React, { Component } from 'react';
import styled from 'styled-components';
import Observer from 'react-intersection-observer';

const StyledObserver = styled(Observer)`
  transform: translateY(${props => props.inview ? '0' : '100px'});
  transition: transform 1s;
`

export default class LazyShow extends Component {
  constructor() {
    super();

    this.state = {};
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  componentDidMount() {
      require('intersection-observer');
      this.setState({
        loaded: true
      });
  }

  handleOnChange(inView) {
    if (!inView) return;

    this.setState({
      inView
    });
  }

  render() {
    const { children, ...props } = this.props;

    if (!this.state.loaded) return <div></div>;

    return (
      <StyledObserver inview={this.state.inView ? 1 : 0} {...props} tag="div" onChange={this.handleOnChange}>
        {children}
      </StyledObserver>
    )
  }
}
