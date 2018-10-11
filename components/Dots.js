import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { colors } from 'utils/variables';

const Dots = styled.ul`
  position: fixed;
  left: 40px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 9;
  transition: all 0.5s;
  opacity: 0.5;

  ${props => props.hide && `
    opacity: 0;
  `}

  ${props => props.isScrolling && `
    opacity: 1;
  `}
`

const Dot = styled.li`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: black;
  opacity: 0.2;
  transition: all 0.2s;
  margin-bottom: 10px;

  ${props => props.isActive && `
    opacity: 1;
    width: 19px;
    height: 19px;
  `}

  ${props => props.lightContent && `
    background-color: white;
  `}
`

@connect((store) => ({
  store,
}))
export default class Homepage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { hide, isScrolling, activeSlide, handleDotClick, store } = this.props;

    return (
      <Dots hide={hide} isScrolling={isScrolling}>
        <Dot lightContent={store.lightContent} isActive={activeSlide === 0} onClick={() => handleDotClick(0)} />
        <Dot lightContent={store.lightContent} isActive={activeSlide === 1} onClick={() => handleDotClick(1)} />
        <Dot lightContent={store.lightContent} isActive={activeSlide === 2} onClick={() => handleDotClick(2)} />
        <Dot lightContent={store.lightContent} isActive={activeSlide === 3} onClick={() => handleDotClick(3)} />
      </Dots>  
    )
  }
}
