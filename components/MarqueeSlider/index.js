import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import SlideItem from './components/SlideItem';
import { switchMarqueeToLightContent, switchMarqueeToDarkContent } from 'store/actions';

const Slider = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`

const Slides = styled.div`
  position: relative;
  width: inherit;
  height: inherit;
`

@connect()
export default class MarqueeSlider extends Component {
  state = {
    activeSlide: 1,
  }

  onSlideClick({ slide, lightContent }) {
    const { dispatch } = this.props;

    if (lightContent) {
      dispatch(switchMarqueeToLightContent());
    } else {
      dispatch(switchMarqueeToDarkContent());
    }

    this.setState({
      isTouched: true,
      activeSlide: slide,
    });
  }

  render() {
    const { activeSlide, isTouched } = this.state;
  
    return (
      <Slider>
        <Slides>
          <SlideItem 
            title="Swatch"
            subtitle="Design. Experiences. Culture."
            hrefId="swatch"
            vimeoId="294132083"
            onClickHandler={() => this.onSlideClick({
              slide: 1,
              lightContent: true
            })}
            isPrevious={activeSlide === 2}
            isActive={activeSlide === 1}
            isNext={activeSlide === 4}
            background={"black"}
            landingSlide
            lightContent={true}
          />
          <SlideItem
            title="Copenhagen"
            subtitle="Lorem ipsum"
            onClickHandler={() => this.onSlideClick({
              slide: 2,
              lightContent: false
            })}
            isPrevious={activeSlide === 3}
            isActive={activeSlide === 2}
            isNext={activeSlide === 1}
            background={"white"}
            image={'https://thankyoustudio.com/wp-content/uploads/2017/01/thumb_03.jpg'}
          />
          <SlideItem 
            title="Ferrari"
            subtitle="Lorem ipsum"
            onClickHandler={() => this.onSlideClick({
              slide: 3,
              lightContent: true
            })}
            isPrevious={activeSlide === 4}
            isActive={activeSlide === 3}
            isNext={activeSlide === 2}
            background={"linear-gradient(to bottom right, rgb(160, 160, 160), rgb(120, 120, 120))"}
            image={'https://thankyoustudio.com/wp-content/uploads/2016/10/framegrabs3-1448383495270-1920.jpg'}
            lightContent
          />
          <SlideItem 
            title="ONEA"
            subtitle="sub"
            onClickHandler={() => this.onSlideClick({
              slide: 4,
              lightContent: true
            })}
            isPrevious={activeSlide === 1 && isTouched}
            isActive={activeSlide === 4}
            isNext={activeSlide === 3}
            background={"black"}
            image={'https://thankyoustudio.com/wp-content/uploads/2017/05/thumb-1.jpg'}
            lightContent
          />
        </Slides>
      </Slider>
    );
  }
}
