import React from 'react';
import styled from 'styled-components';
import { colors, fonts, easings } from 'utils/variables';
import Video from 'components/Video';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`

const LowerleftContent = styled.div`
  position: absolute;
  z-index: 1;
  left: 40px;
  bottom: 40px;
  width: 100vw;
  opacity: 0.5;
  transition: opacity 0.5s ${easings.easeInOutCustom};

  ${props => props.isActive && `
    opacity: 1;
  `}
`

const Title = styled.h1`
  font-size: 140px;
  line-height: 130px;
  margin-top: 10px;
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
  text-transform: uppercase;
  margin-top: 6px;
`

const Image = styled.div`
  position: absolute;
  right: 0;
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: url(${props => props.image});
  transition: transform 6s ${easings.easeOutShine};
  transform: scale(1);

  ${props => props.isActive && `
    transform: scale(1.05);
  `}
`

const Cta = styled.a`
  position: relative;
  z-index: 2;
  cursor: pointer;
  color: ${props => props.contentColor};
  opacity: ${props => props.isActive ? '1' : '0'};
  transition: opacity 0.5s;
`

const StyledVideo = styled(Video)`
  opacity: 0.5;
`

export default (props) => (
  <Wrapper>
    <LowerleftContent isActive={props.isActive}>
      <Cta isActive={props.isActive} onClick={props.onCtaClickHandler} contentColor={props.contentColor}>&rsaquo; See project</Cta>
      <Title contentColor={props.contentColor}>{props.title}</Title>
      <SubTitle contentColor={props.contentColor}>{props.subtitle}</SubTitle>
    </LowerleftContent>
    <Image isActive={props.isActive} image={props.image} />
    {props.vimeoId ? <StyledVideo vimeoId={props.vimeoId} isActive={props.isActive} background sliderVideo /> : ''}
  </Wrapper>
);