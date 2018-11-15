import React, { Component } from 'react';
import Router, { withRouter } from 'next/router';
import styled from 'styled-components';

const Wrapper = styled.div`
  cursor: pointer;
`

@withRouter
export default class Link extends Component {
  constructor() {
    super();
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {
    console.log('pushing route', this.props.href);
    Router.push({
      pathname: this.props.href
    });
  }

  render() {
    return (
      <Wrapper onClick={this.handleOnClick}>{this.props.children}</Wrapper>
    )
  }
}