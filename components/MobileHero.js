import React from 'react';
import styled from 'styled-components';
import LandingHero from 'components/LandingHero';

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
  bottom: 40px;
  left: 40px;
`
 
const Title = styled.h1`
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
