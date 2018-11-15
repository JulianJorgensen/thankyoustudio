import React, { Component } from 'react';
import { TweenLite } from 'gsap';
import styled from 'styled-components';
import throttle from 'lodash.throttle';
import { colors, fonts, easings } from 'utils/variables';

const Wrapper = styled.div`
  position: absolute;
  z-index: 99;
  left: 40px;
  bottom: 40px;
  width: 50vw;
  opacity: 0;
  transition: opacity 0.2s, left 0.4s ${easings.easeOutShine} 0.3s;
  color: ${props => props.contentColor};

  ${props => props.fontsLoaded && `
    opacity: 1;
  `}

  ${props => props.isActive && `
    left: 40px;
  `}

  ${props => props.isNext && `
    left: 100px;
    transition: none;
  `}
`

const Content = styled.div`
  opacity: 1;

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
  margin-left: -4px;
  font-weight: 800;
  font-family: ${fonts.primary};
  text-transform: uppercase;
  color: inherit;
`

const SubTitle = styled.h2`
  font-size: 26px;
  font-weight: 300;
  font-family: ${fonts.primary};
  margin-top: 6px;
  opacity: ${props => props.isNext ? '0' : '1'};
  transition: opacity 0.2s;
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

  componentDidUpdate(prevProps) {
    this.toggleScrollEventListener(prevProps);
  }

  toggleScrollEventListener(prevProps) {
    if (!this.headerEl) return;
    if (!prevProps) return;
    if (prevProps.isActive && this.props.isActive) return;
    if (prevProps.isNext && this.props.isNext) return;
    if (prevProps.isPrevious && this.props.isPrevious) return;

    if (this.props.isActive) {
      document.addEventListener('scroll', this.handleOnScroll);
    } else {
      this.headerAnimation = TweenLite.set(this.headerEl, {top: 0});
      document.removeEventListener('scroll', this.handleOnScroll);
    }
  }

  handleOnScroll() {
    if (this.props.isSliding) return;
    if (!this.headerEl) return;

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
    console.log('animate', scrollTop);
    this.headerAnimation = TweenLite.set(this.headerEl, {top: scrollTop/3});
  }

  render() {
    const { fontsLoaded, isActive, isNext, title, subtitle, contentColor } = this.props;

    return (
      <Wrapper isActive={isActive} isNext={isNext} fontsLoaded={fontsLoaded} contentColor={contentColor}>
        <Content isActive={isActive}>
          <Header innerRef={div => this.headerEl = div}>
            <Title>{title}</Title>
            <SubTitle isNext={isNext}>{subtitle}</SubTitle>
          </Header>
        </Content>
      </Wrapper>
    )
  }
}