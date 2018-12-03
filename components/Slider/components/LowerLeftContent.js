import React, { Component } from 'react';
import { TweenLite } from 'gsap';
import styled from 'styled-components';
import throttle from 'lodash.throttle';
import { FONTS, EASINGS } from 'utils/variables';
import media from 'utils/mediaQueries';
import ChevronDown from 'assets/icons/FontAwesome/regular/chevron-down.svg';
import Text from 'components/Typography/Text';

const Wrapper = styled.div`
  position: absolute;
  z-index: 99;
  left: 40px;
  bottom: 60px;
  width: 100%;
  max-width: calc(100vw - 40px);
  opacity: 0;
  color: ${props => props.contentColor};

  ${props => props.fontsLoaded && `
    opacity: 1;
  `}

  ${media.tablet`
    width: 50vw;
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
  font-size: 60px;
  line-height: 55px;
  margin-top: 16px;
  margin-bottom: -20px;
  margin-left: -4px;
  font-weight: 800;
  font-family: ${FONTS.PRIMARY};
  text-transform: uppercase;
  color: inherit;
  opacity: ${props => props.isNext ? '0.6' : '1'};

  ${media.tablet`
    font-size: 70px;
    line-height: 70px;
  `}
`

const TeaserText = styled(Text)`
  margin: 14px 0 0;
  opacity: ${props => props.hide || props.isNext ? '0.3' : '1'};
  transition: opacity 0.2s;
  max-width: 40vw;
`

const StyledChevronDown = styled(ChevronDown)`
  position: absolute;
  width: 30px;
  height: 30px;
  opacity: ${props => props.hide ? '0' : '1'};

  path {
    fill: white;
  }
`

export default class LowerLeftContent extends Component {
  constructor(props){
    super(props);

    this.state = {};

    this.headerEl = null;
    this.headerAnimation = null;

    this.handleOnScroll = this.handleOnScroll.bind(this);
    this.updateHeaderStyles = throttle(this.updateHeaderStyles, 15);
    this.removeScrollEventListener = this.removeScrollEventListener.bind(this);
  }

  componentDidMount() {
    this.toggleScrollEventListener();
  }

  componentDidUpdate(prevProps) {
    if (!this.headerEl || !prevProps) return;

    if (prevProps.isNext && this.props.isNext) return;
    if (prevProps.isPrevious && this.props.isPrevious) return;

    this.toggleScrollEventListener(prevProps);
  }

  componentWillUnMount() {
    this.removeScrollEventListener();
  }

  toggleScrollEventListener(prevProps) {
    if (this.props.isActive) {
      document.addEventListener('scroll', this.handleOnScroll);
    } else {
      this.removeScrollEventListener();
    }
  }

  removeScrollEventListener() {
    if (!this.headerEl) return;
    this.headerAnimation = TweenLite.set(this.headerEl, {top: 0});
    document.removeEventListener('scroll', this.handleOnScroll);
  }

  handleOnScroll() {
    if (this.props.isSliding) return;
    if (!this.headerEl) return;

    this.updateHeaderStyles();
  }

  updateHeaderStyles() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 1000) return;

    if (scrollTop > 80) {
      this.setState({ scrolledDown: true });
    } else {
      this.setState({ scrolledDown: false });
    }
    if (!this.headerEl) return;

    if (this.props.fadeToBlack) {
      this.headerAnimation = TweenLite.set(this.headerEl, {
        top: scrollTop/2.7,
        color: this.props.fadeToBlack ? `rgb(${255-scrollTop/3}, ${255-scrollTop/3}, ${255-scrollTop/3})` : ''
      });
    } else {
      this.headerAnimation = TweenLite.set(this.headerEl, {
        top: scrollTop/2.7
      });
    }
  }

  render() {
    const { fontsLoaded, isActive, isNext, title, teaserText, contentColor } = this.props;
    const { scrolledDown } = this.state;

    return (
      <Wrapper isActive={isActive} isNext={isNext} fontsLoaded={fontsLoaded} contentColor={contentColor}>
        <Content isActive={isActive}>
          <Header ref={div => this.headerEl = div}>
            <Title isNext={isNext}>{title}</Title>
            <TeaserText bold isNext={isNext}>{teaserText}</TeaserText>
          </Header>
          {isActive && <StyledChevronDown hide={scrolledDown} />}
        </Content>
      </Wrapper>
    )
  }
}