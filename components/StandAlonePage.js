import React, { Component } from 'react';
import { connect } from 'react-redux';
import Footer from 'components/Footer';
import styled from 'styled-components';

const Wrapper = styled.div`
  overflow: hidden;

  ${props => props.isScrollNSliding && `
    position: fixed !important;
    z-index: 10;
    top: 0;
    opacity: 1;
    transition: width 0.5s !important;
  `}
`

@connect((store) => ({
  store,
}))
export default class AboutPage extends Component {
  render() {
    const { children } = this.props;
    const { slider, fontsLoaded } = this.props.store;

    return (
      <Wrapper fontsLoaded={fontsLoaded} isScrollNSliding={slider.isScrollNSliding} className='stand-alone-page'>
        {children}
        <Footer />
      </Wrapper>
    )
  }
}