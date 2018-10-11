import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import SlideHeader from 'components/SlideHeader';
import PlaceholderImg from 'assets/images/model2.png';

const Wrapper = styled.section`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: black;
`

const Placeholder = styled.img`
  position: absolute;
  right: 100px;
  top: 50%;
  transform: translateY(-50%);
  width: 400px;
`

@connect()
export default class WorkSlide extends Component {
  render() {
    return (
      <Wrapper>
        <SlideHeader
          title="Our thinking"
          lead="Design thinking is at the core of everything we do. The result is always fresh, vibrant and relevant."
          cta="Read more"
          href="/work"
          white
        >
        </SlideHeader>
        <Placeholder src={PlaceholderImg} />
      </Wrapper>
    );
  }
}
