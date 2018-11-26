import React from 'react';
import styled from 'styled-components';
import LandingHero from 'components/LandingHero';

const Wrapper = styled.div`
  height: 100vw;
  width: 100%;
  background-color: red;
`

export default ({ isMobile, isLanding }) => {
  if (!isMobile) return null;
  if (isLanding) return <LandingHero />

  return (
    <Wrapper>
      <h2>Ismobile!!</h2>
    </Wrapper>
  )
}
