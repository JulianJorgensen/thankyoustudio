import React, { Component } from 'react';
import Footer from 'components/Footer';
import PlayIcon from 'assets/icons/FontAwesome/regular/play-circle.svg'
import AboutTabs from 'assets/images/about-tabs.png';
import styled from 'styled-components';

const Wrapper = styled.div`
`

const PageTitle = styled.h1`
  position: absolute;
  font-size: 70px;
  transform: rotate(-90deg);
  transform-origin: left bottom;
  margin-top: 100px;
  margin-left: 20px;
  opacity: 0.3;
  text-transform: uppercase;
  font-size: 48px;
`

const Content = styled.div`
  padding: 200px 80px;
  background-color: black;
  color: white;
`

const Header = styled.div`
  display: flex;
  margin-bottom: 30vh;
  padding-left: 100px;
`

const Video = styled.div`
  margin-right: 100px;
  background-color: #353535;
  height: 230px;
  width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 80px;
    height: 80px;
  }
`

const Headline = styled.h2`
  width: 350px;
  font-size: 40px;
`

const Lead = styled.div`
  font-size: 25px;
`

export default class AboutPage extends Component {
  render() {
    return (
      <Wrapper>
        <Content>
          <PageTitle>About</PageTitle>
          <Header>
            <Video><PlayIcon /></Video>
            <Headline>Say Thank You in advance for what is already yours</Headline>
          </Header>
          <img src={AboutTabs} />
        </Content>

        <Footer />
      </Wrapper>
    )
  }
}