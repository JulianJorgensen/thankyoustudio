import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import SlideHeader from 'components/SlideHeader';

const Wrapper = styled.section`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: white;
`

@connect()
export default class VenturesSlide extends Component {
  render() {
    return (
      <Wrapper>
        <SlideHeader
          title="Our ventures"
          lead="Design thinking is at the core of everything we do. The result is always fresh, vibrant and relevant."
          cta="Read more"
          href="/team"
        >
        </SlideHeader>
      </Wrapper>
    );
  }
}
