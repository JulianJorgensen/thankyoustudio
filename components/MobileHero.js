import React from 'react';
import styled from 'styled-components';
import LandingHero from 'components/LandingHero';
import { LAYOUT } from 'utils/variables';

const Wrapper = styled.div`
  position: relative;
  height: 100vw;
  width: 100%;
  background-color: black;
  background-image: url(${props => props.imageSrc});
  background-position: center center;
  background-size: cover;
`

const Content = styled.div`
  position: absolute;
  bottom: ${LAYOUT.MOBILE.EDGE_MARGIN};
  left: ${LAYOUT.MOBILE.EDGE_MARGIN};
`

const Title = styled.h1`
  text-transform: uppercase;
`

const SubTitle = styled.h2`
`

export default ({ isMobile, isLanding, title, subtitle, imageSrc }) => {
  if (!isMobile) return null;
  if (isLanding) return <LandingHero />

  return (
    <Wrapper imageSrc={imageSrc}>
      <Content>
        <Title>{title}</Title>
        <SubTitle>{subtitle}</SubTitle>
      </Content>
    </Wrapper>
  )
}
