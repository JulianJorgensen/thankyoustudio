import React from 'react';
import Work from 'components/Work';
import Page from 'components/Page';
import InstagramFeed from 'components/InstagramFeed';
import styled from 'styled-components';
import AboutSectionPlaceholder from 'assets/images/placeholders/about-section.png'

const Section = styled.div`
  padding: 200px 80px;

  ${props => props.black && `
    background-color: black;
    color: white;
  `}
`

const Header = styled.div`
`

const Title = styled.h2`
  font-size: 70px;
`

const Lead = styled.div`
  font-size: 25px;
`

const AboutSection = styled.div`
  padding: 200px 80px;
  position: relative;

  &:before {
    content: '';
    height: 300px;
    width: 1px;
    background-color: #979797;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateY(-50%);
  }

  &:after {
    position: absolute;
    bottom: 0;
    content: '';
    height: 300px;
    width: 1px;
    background-color: #979797;
    transform: translateY(45%);
    left: 50%;
  }
`

const InstagramSection = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  margin-top: 220px;

  &:before {
    position: absolute;
    top: 0;
    content: '';
    height: 300px;
    width: 1px;
    background-color: #979797;
    transform: translateY(-120%);
  }
`

export default () => (
  <Page isPrimaryPage={true}>
    <AboutSection id="about">
      <img src={AboutSectionPlaceholder} />
    </AboutSection>

    <Section>
      <Work />
    </Section>

    <InstagramSection>
      <h3>Work is fun!</h3>
      <InstagramFeed />
    </InstagramSection>

  </Page>
)