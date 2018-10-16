import React, { Component } from 'react';
import dynamic from 'next/dynamic';
import { connect } from 'react-redux';
import styled from 'styled-components';

const ThankYou = dynamic(import('content/ThankYou'));
const Swatch = dynamic(import('content/Swatch'));
const Copenhagen = dynamic(import('content/CopenhagenDistellery'));
const Ferrari = dynamic(import('content/Ferrari'));
const Onea = dynamic(import('content/Onea'));

const Wrapper = styled.div`
  position: relative;
  z-index: 2;
  background-color: ${props => props.isScrollNSliding ? 'black' : 'white'};
  transition: background-color 0.4s ease;
`

const Content = styled.div`
  position: absolute;
  opacity: 0;
  transform: translateX(0%);
  transition: all 0.4s ease-in;
  background-color: white;

  ${props => props.isPrevious && `
    opacity: 0;
    transform: translateX(-5%);
  `}

  ${props => props.isActive && `
    opacity: 1;
    transition-delay: 0.4s;
    z-index: 1;
  `}

  ${props => props.hasNextSlideIndex && `
    transform: translateX(0%) !important;
    transition: none !important;
  `}
`

@connect((store) => ({
  store,
}))
export default class BelowFold extends Component {
  render() {
    let { store: { prevSlide, activeSlide, isScrollNSliding, nextSlideIndex } } = this.props;

    if (!activeSlide) return (
      <div></div>
    );

    if (!prevSlide) {
      prevSlide = {
        index: 0
      };
    }

    const checkSlide = (name) => {
      if (nextSlideIndex && activeSlide.index === 0) {
        return activeSlide.slug === name;
      }

      if (prevSlide) {
        return prevSlide.slug === name || activeSlide.slug === name;
      }

      return activeSlide.slug === name;
    };

    return (
      <Wrapper id="more" isScrollNSliding={isScrollNSliding}>
        <Content
          isActive={activeSlide.slug === 'ThankYou'}
          isPrevious={prevSlide.slug === 'ThankYou'}
          hasNextSlideIndex={nextSlideIndex > 0 ? true : false}
        >
          <ThankYou />
        </Content>

        <Content
          isActive={activeSlide.slug === 'Swatch'}
          isPrevious={prevSlide.slug === 'Swatch'}
        >
          {checkSlide('Swatch') && <Swatch />}
        </Content>

        <Content
          isActive={activeSlide.slug === 'Copenhagen'}
          isPrevious={prevSlide.slug === 'Copenhagen'}
        >
          {checkSlide('Copenhagen') && <Copenhagen />}
        </Content>

        <Content
          isActive={activeSlide.slug === 'Ferrari'}
          isPrevious={prevSlide.slug === 'Ferrari'}
        >
          {checkSlide('Ferrari') && <Ferrari />}
        </Content>

        <Content
          isActive={activeSlide.slug === 'Onea'}
          isPrevious={prevSlide.slug === 'Onea'}
        >
          {checkSlide('Onea') && <Onea />}
        </Content>
      </Wrapper>
    )
  }
}