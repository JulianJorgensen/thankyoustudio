import React, { Component } from 'react';
import { TweenLite } from 'gsap/umd/TweenLite';
import styled from 'styled-components';
import throttle from 'lodash.throttle';
import { colors, fonts, easings } from 'utils/variables';

const Wrapper = styled.div`
  position: absolute;
  z-index: 1;
  left: 40px;
  bottom: 40px;
  width: 100vw;
  opacity: 0;
  transition: opacity 0.2s;

  ${props => props.fontsLoaded && `
    opacity: 1;
  `}
`

const Content = styled.div`
  opacity: 0.5;
  transition: opacity 0.5s ${easings.easeInOutCustom};

  ${props => props.isActive && `
    opacity: 1;
  `}
`

const Header = styled.div`
  position: relative;
`

const Title = styled.h1`
  font-size: 140px;
  line-height: 130px;
  margin-top: 16px;
  margin-bottom: -20px;
  font-weight: 800;
  font-family: ${fonts.primary};
  text-transform: uppercase;
  color: ${props => props.contentColor};
`

const SubTitle = styled.h2`
  font-size: 26px;
  color: ${colors.gray50};
  font-weight: 300;
  font-family: ${fonts.primary};
  margin-top: 6px;
`

const Cta = styled.a`
  position: relative;
  z-index: 2;
  cursor: pointer;
  font-size: 20px;
  color: ${props => props.contentColor};
  opacity: ${props => props.isActive && !props.hideCta ? '1' : '0'};
  transition: opacity 0.5s;
`

export default class LowerLeftContent extends Component {
  constructor(props){
    super(props);

    this.state = {};

    this.headerEl = null;
    this.headerAnimation = null;

    this.handleOnScroll = this.handleOnScroll.bind(this);
    this.updateHeaderPosition = throttle(this.updateHeaderPosition, 15);
  }

  componentDidMount() {
    this.toggleScrollEventListener();
  }

  componentDidUpdate() {
    this.toggleScrollEventListener();
  }

  toggleScrollEventListener() {
    if (this.props.isActive) {
      document.addEventListener('scroll', this.handleOnScroll);
    } else {
      // this.headerAnimation = TweenLite.to(this.headerEl, 3, {top: 0});
      document.removeEventListener('scroll', this.handleOnScroll);
    }
  }

  handleOnScroll() {
    if (this.props.isSliding) return;

    this.updateHeaderPosition();
  }

  updateHeaderPosition() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 1000) return;

    if (scrollTop > 80) {
      this.setState({ hideCta: true });
    } else {
      this.setState({ hideCta: false });
    }

    // this.headerAnimation = TweenLite.set(this.headerEl, {top: scrollTop/4});
  }

  render() {
    const { fontsLoaded, isActive, title, subtitle, onCtaClickHandler, contentColor } = this.props;
    const { hideCta } = this.state;

    return (
      <Wrapper fontsLoaded={fontsLoaded}>
        <Content isActive={isActive}>
          <Cta hideCta={hideCta} isActive={isActive} onClick={onCtaClickHandler} contentColor={contentColor}>&rsaquo; See project</Cta>
          <Header innerRef={div => this.headerEl = div}>
            <Title contentColor={contentColor}>{title}</Title>
            <SubTitle contentColor={contentColor}>{subtitle}</SubTitle>
          </Header>
        </Content>
      </Wrapper>
    )
  }
}