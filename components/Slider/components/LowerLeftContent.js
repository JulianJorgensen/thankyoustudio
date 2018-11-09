import React from 'react';
import styled from 'styled-components';
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
  opacity: ${props => props.isActive ? '1' : '0'};
  transition: opacity 0.5s;
`

export default ({ fontsLoaded, isActive, title, subtitle, onCtaClickHandler, contentColor }) => (
  <Wrapper fontsLoaded={fontsLoaded}>
    <Content isActive={isActive}>
      <Cta isActive={isActive} onClick={onCtaClickHandler} contentColor={contentColor}>&rsaquo; See project</Cta>
      <Title contentColor={contentColor}>{title}</Title>
      <SubTitle contentColor={contentColor}>{subtitle}</SubTitle>      
    </Content>
  </Wrapper>
);