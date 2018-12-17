import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TweenLite } from 'gsap';
import styled from 'styled-components';
import throttle from 'lodash.throttle';
import { animateScroll as scroll } from 'react-scroll';
import { breakpoint, HERO, LAYOUT, FONTS, TIMINGS } from 'utils/variables';
import media from 'utils/mediaQueries';
import ChevronDown from 'assets/icons/FontAwesome/regular/chevron-down.svg';
import Text from 'components/Typography/Text';

const Wrapper = styled.div`
  position: absolute;
  z-index: 98;
  left: ${LAYOUT.MOBILE.EDGE_MARGIN};
  bottom: 120px;
  width: 100%;
  max-width: calc(100vw - 40px);
  opacity: 0;
  color: ${props => props.whiteContent ? 'white' : 'black'};
  pointer-events: none;

  ${props => props.fontsLoaded && `
    opacity: 1;
  `}

  ${breakpoint.up('m')`
    width: 50vw;
    left: 40px;
    bottom: 60px;
  `}
`

const Content = styled.div`
  opacity: 1;
  pointer-events: none;

  ${props => props.isActive && `
    opacity: 1;
  `}
`

const Header = styled.div`
  position: relative;
`

const Title = styled.h1`
  position: absolute;
  top: 0;
  display: flex;
  align-items: flex-end;
  height: 80px;
  pointer-events: none;

  font-size: 40px;
  line-height: 40px;
  font-weight: 800;
  font-family: ${FONTS.PRIMARY};
  text-transform: uppercase;
  color: inherit;
  opacity: 1;
  transition-property: opacity, transform;
  transition-duration: 0.3s;
  transition-timing-function: ease;
  transform: translateY(-100%);

  ${props => props.hide && `
    opacity: 0;
    transform: translateX(-100px) translateY(-100%);
  `}

  ${breakpoint.up('m')`
    height: 150px;
    margin-left: -4px;
    font-size: 75px;
    line-height: 75px;
  `}
`

const TitleAlt = styled(Title)`
  position: absolute;
  opacity: 0;
  transform: translateX(100px) translateY(-100%);

  ${props => props.show && `
    opacity: 1;
    transform: translateX(0) translateY(-100%);
  `}
`

const TeaserText = styled(Text)`
  margin: 20px 0 10px;
  opacity: 1;
  transition: opacity 0.2s;
  pointer-events: none;

  ${breakpoint.up('m')`
    max-width: 40vw;
  `}
`

const StyledChevronDown = styled.div`
  position: absolute;
  width: 30px;
  height: 30px;
  opacity: ${props => props.hide ? '0' : '1'};
  cursor: pointer;
  pointer-events: auto;

  path {
    fill: ${props => props.whiteContent ? 'white' : 'black'};
  }
`

const PreTitle = styled(Title)`
  position: absolute;
  top: 0;
  transform: translateY(-150%);
  transition: opacity 0.3s ease;

  ${props => props.hide && `
    opacity: 0;
  `}
`

@connect((store) => ({
  store,
}))
export default class LowerLeftContent extends Component {
  constructor(props){
    super(props);

    this.state = {};

    this.headerEl = null;
    this.headerAnimation = null;

    this.handleOnScroll = this.handleOnScroll.bind(this);
    this.updateHeaderStyles = throttle(this.updateHeaderStyles, 15);
    this.removeScrollEventListener = this.removeScrollEventListener.bind(this);
    this.triggerScrollDown = this.triggerScrollDown.bind(this);
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

  toggleScrollEventListener() {
    if (this.props.isActive) {
      document.addEventListener('scroll', this.handleOnScroll);
    } else {
      this.removeScrollEventListener();
    }
  }

  removeScrollEventListener() {
    if (!this.headerEl) return;

    setTimeout(() => {
      this.headerAnimation = TweenLite.set(this.headerEl, {top: 0});
    }, TIMINGS.SET_IS_SLIDING_FALSE);

    document.removeEventListener('scroll', this.handleOnScroll);
  }

  handleOnScroll() {
    if (this.props.isSliding) return;
    if (!this.headerEl) return;

    this.updateHeaderStyles();
  }

  updateHeaderStyles() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    this.setState({
      scrollTop
    });
    if (this.props.store.isMobile && scrollTop > HERO.MOBILE.LOWER_LEFT_MAX_TOP_POSITION) return;
    if (scrollTop > HERO.LOWER_LEFT_MAX_TOP_POSITION) return;

    if (scrollTop > 80) {
      this.setState({ scrolledDown: true });
    } else {
      this.setState({ scrolledDown: false });
    }
    if (!this.headerEl) return;

    this.animateHeader();
  }

  animateHeader() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const { isMobile } = this.props.store;

    let movementSpeed = 2.5;
    let colorSwitchSpeed = isMobile ? 1.2 : 2;
    let colorSwitchOffset = 80;

    this.headerAnimation = TweenLite.set(this.headerEl, {
      top: scrollTop/movementSpeed
    });

    if (this.props.fadeToBlack) {
      this.headerAnimation = TweenLite.set(this.headerEl, {
        color: this.props.fadeToBlack && `rgb(${255-(scrollTop/colorSwitchSpeed - colorSwitchOffset)}, ${255-(scrollTop/colorSwitchSpeed - colorSwitchOffset)}, ${255-(scrollTop/colorSwitchSpeed - colorSwitchOffset)})`
      });
    }
  }

  triggerScrollDown() {
    scroll.scrollTo(window.innerHeight + 100, {
      smooth: "easeInOutQuint"
    });
  }

  render() {
    const { fontsLoaded, isActive, isNext, preTitle, title, titleAlt, teaserText, whiteContent } = this.props;
    const { scrolledDown } = this.state;

    return (
      <Wrapper isActive={isActive} isNext={isNext} fontsLoaded={fontsLoaded} whiteContent={whiteContent}>
        <Content isActive={isActive}>
          <Header ref={div => this.headerEl = div}>
            {preTitle && <PreTitle hide={scrolledDown}>{preTitle}</PreTitle>}
            <Title isNext={isNext} hide={titleAlt && scrolledDown}>{title}</Title>
            {titleAlt && <TitleAlt show={scrolledDown}>{titleAlt}</TitleAlt>}
            <TeaserText bold isNext={isNext}>{this.props.store.isMobile ? 'isMobile' : 'not mobile'} {this.state.scrollTop} {teaserText}</TeaserText>
          </Header>
          {isActive && 
            <StyledChevronDown 
              hide={scrolledDown}
              whiteContent={whiteContent}
              onClick={this.triggerScrollDown}
            >
              <ChevronDown />
            </StyledChevronDown>
          }
        </Content>
      </Wrapper>
    )
  }
}