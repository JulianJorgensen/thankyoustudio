import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import SlideItem from './components/SlideItem';
import Waypoint from 'react-waypoint';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import * as actions from 'store/actions';

const Slider = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: black;
`

const Slides = styled.div`
  position: relative;
  width: inherit;
  height: inherit;

  ${props => props.isScrollNSliding && `
    position: fixed !important;
    z-index: 9;
    right: -15px;
  `}
`

const BackButton = styled.div`
  position: absolute;
  top: 50%;
  left: 30px;
  z-index: 5;
  font-size: 80px;
  cursor: pointer;
  color: ${props => props.contentColor};

  ${props => props.hidden && `
    display: none;
  `}
`

const SlideItems = [
  {
    id: "ThankYou",
    title: "Welcome",
    subtitle: "Design. Experiences. Culture.",
    vimeoId: "197893849",
    background: "black",
    contentColor: "white",
    landingSlide: true,
  },
  {
    id: "Copenhagen",
    title: "Copenhagen",
    subtitle: "Design. Experiences. Culture.",
    background: "white",
    contentColor: "black",
    image: 'https://thankyoustudio.com/wp-content/uploads/2017/01/thumb_03.jpg'
  },
  {
    id: "Swatch",
    title: "Swatch",
    subtitle: "Design. Experiences. Culture.",
    vimeoId: "294132083",
    background: "black",
    contentColor: "white",
  },
  {
    id: "Ferrari",
    title: "Ferrari",
    subtitle: "Design. Experiences. Culture.",
    background: "black",
    contentColor: "white",
    image: 'https://thankyoustudio.com/wp-content/uploads/2016/10/framegrabs3-1448383495270-1920.jpg'
  },
  {
    id: "Onea",
    title: "Onea",
    subtitle: "Design. Experiences. Culture.",
    background: "black",
    contentColor: "white",
    image: 'https://thankyoustudio.com/wp-content/uploads/2017/05/thumb-1.jpg'
  },

];

@connect((store) => ({
  store,
}))
export default class FancySlider extends Component {
  constructor() {
    super();
    this.state = {};

    this.setScrollNSliding = this.setScrollNSliding.bind(this);
    this.handleBackClick = this.handleBackClick.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.onSlideClick = this.onSlideClick.bind(this);
    this.initScrolls = this.initScrolls.bind(this);
    this.setAutoScroll = this.setAutoScroll.bind(this);
  }

  componentDidMount() {
    this.registerScrollEvents();
  }

  componentWillUnmount() {
    this.setAutoScroll(false);
  }

  registerScrollEvents() {
    Events.scrollEvent.register('end', () => {
      this.setScrollNSliding(false);
    });
  }

  setAutoScroll(autoScroll) {
    const { store } = this.props;

    // scroll down a bit to show there's more
    if (!autoScroll) {
      clearTimeout(this.autoScroll);
      return;
    }

    // set the autoscroll using timeout
    this.autoScroll = setTimeout(() => {
      if (this.props.store.autoScroll) {
        scroll.scrollTo(150, {
          smooth: true
        });
      }
    }, 2500);
  }

  handleScroll() {
    clearTimeout(this.autoScroll);
  }

  setScrollNSliding(scrollNSliding) {
    this.props.dispatch(actions.setIsScrollNSliding(scrollNSliding));
  }

  onSlideClick(target) {
    const { dispatch, store } = this.props;

    if (store.nextSlideIndex === SlideItems.length-1) {
      this.setState({
        primaryContentIsAnimating: true
      });

      setTimeout(() => {
        this.setState({
          primaryContentIsAnimating: false
        });
      }, 400);
    }

    dispatch(actions.setNextSlideIndex(false));
    dispatch(actions.updateActiveSlide({
      key: target.key,
      id: target.id,
      contentColor: target.contentColor
    }));

    // reset timeout after slide change
    clearTimeout(this.autoScroll);

    this.initScrolls();
  }

  initScrolls() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 0) {
      this.setScrollNSliding(true);
      scroll.scrollToTop({
        duration: 500,
        delay: 100,
        smooth: 'easeInQuint'
      });
      setTimeout(() => {
        this.setAutoScroll(true);
      }, 300);
    } else {
      this.setAutoScroll(true);
    }
  }

  handleBackClick() {
    const { dispatch, store } = this.props;
    const prevSlide = SlideItems[store.activeSlide.key-1];
    const prevSlideIndex = SlideItems.findIndex(x => x.id==prevSlide.id);

    dispatch(actions.updateActiveSlide({
      key: prevSlideIndex,
      id: prevSlide.id,
      contentColor: prevSlide.contentColor
    }));

    this.initScrolls();
  }

  onCtaClick() {
    scroll.scrollTo(window.innerHeight);
  }

  render() {
    const { activeSlide, isScrollNSliding, nextSlideIndex } = this.props.store;
    const { primaryContentIsAnimating } = this.state;

    return (
      <Waypoint
        onLeave={this.handleScroll}
        topOffset='99%'
      >
        <Slider>
          <BackButton contentColor={activeSlide.contentColor} hidden={activeSlide.key === 0} onClick={this.handleBackClick}>&lsaquo;</BackButton>
          <Slides isScrollNSliding={isScrollNSliding}>
            {
              SlideItems.map((SlideItemData, i) => {
                const isPrevious = activeSlide.key === i + 1;
                const isActive = activeSlide.key === i;
                let isNext;

                if (nextSlideIndex) {
                  isNext = nextSlideIndex === i;
                } else {
                  isNext = i === 0 ? activeSlide.key === SlideItems.length-1 : activeSlide.key === i - 1;  

                  if (i === 0 && primaryContentIsAnimating) {
                    isNext = false;
                  }
                }

                return (
                  <SlideItem
                    key={`i-${SlideItemData.id}`}
                    id={SlideItemData.id}
                    title={SlideItemData.title}
                    subtitle={SlideItemData.subtitle}
                    vimeoId={SlideItemData.vimeoId}
                    onCtaClickHandler={this.onCtaClick}
                    onClickHandler={() => this.onSlideClick({
                      ...SlideItemData,
                      key: i
                    })}
                    isPrevious={isPrevious}
                    isActive={isActive}
                    isNext={isNext}
                    image={SlideItemData.image}
                    background={SlideItemData.background}
                    landingSlide={SlideItemData.landingSlide}
                    contentColor={SlideItemData.contentColor}
                  />
                )
              })
            }
          </Slides>
        </Slider>
      </Waypoint>
    );
  }
}
