import React, { Component } from 'react';
import Footer from 'components/Footer';
import Locations from 'components/Locations';
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
`

const Title = styled.h2`
  font-size: 70px;
`

const Lead = styled.div`
  font-size: 25px;
`

export default class ContactPage extends Component {
  render() {
    return (
      <Wrapper>
        <Content>
          <Locations />
        </Content>

        <Footer />
      </Wrapper>
    )
  }
}