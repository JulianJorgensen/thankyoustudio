import React, { Component } from 'react';
import styled from 'styled-components';
import Logo from 'components/Logo';
import Cta from './Cta';
import Locations from './Locations';
import SocialMedia from './SocialMedia';
import Nav from './Nav';
import { breakpoint, LAYOUT } from 'utils/variables';

const Wrapper = styled.div``

const MobileWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
  color: white;
  width: 100%;
  padding: 80px ${LAYOUT.MOBILE.EDGE_MARGIN};

  ${breakpoint.m`
    display: none;
  `}
`

const DesktopWrapper = styled.footer`
  display: none;

  ${breakpoint.m`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: black;
    color: white;
    width: 100%;
    padding: 80px ${LAYOUT.EDGE_MARGIN};
    justify-content: space-between;  
  `}
`

const Details = styled.div`
  text-align: center;

  ${breakpoint.m`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  `}
`

const StyledLogo = styled(Logo)`
  margin: 60px 0 30px;

  ${breakpoint.m`
    margin: 0;
  `}
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

const Divider = styled.div`
  margin: 30px 0;
  height: 1px;
  width: 100%;
  background-color: white;
  opacity: 0.2;
`

export default () => (
  <Wrapper>
    <MobileWrapper>
      <Cta />
      <Details>
        <StyledLogo />
        <Nav />
        <Locations />
        <SocialMedia />
      </Details>
    </MobileWrapper>

    <DesktopWrapper>
      <Row>
        <Cta />
        <Details>
          <Nav />
          <Locations />
        </Details>
      </Row>
      <Divider />
      <Row>
        <StyledLogo />
        <SocialMedia />
      </Row>
    </DesktopWrapper>
  </Wrapper>
);