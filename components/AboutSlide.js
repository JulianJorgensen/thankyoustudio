import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import SlideHeader from 'components/SlideHeader';
import ZenImage from 'assets/images/zen-circle.png';

const Wrapper = styled.section`
  position: relative;
  width: 100vw;
  height: 100vh;
`

const Zen = styled.img`
  position: absolute;
  right: 100px;
  top: 50%;
  transform: translateY(-50%);
  width: 400px;
`

@connect()
export default class AboutSlide extends Component {
  render() {
    return (
      <Wrapper>
        <SlideHeader 
          title="What we do"
          lead="Design thinking is at the core of everything we do. The result is always fresh, vibrant and relevant."
          cta="Read more"
          href="/about"
        >
        </SlideHeader>
        <Zen src={ZenImage} />
      </Wrapper>
    );
  }
}
