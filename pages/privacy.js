import React, { Component } from 'react';
import Footer from 'components/Footer';
import styled from 'styled-components';
import Work from 'components/Work';

const Wrapper = styled.div`
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

export default class PrivacyPage extends Component {
  render() {
    return (
      <Wrapper>
        <Content>
          <Header>
            <Title>Privacy</Title>
            <Lead>Design thinking is at the core of everything we do. The result is always fresh, vibrant and relevant.</Lead>
          </Header>
          <Work />
        </Content>

        <Footer />
      </Wrapper>
    )
  }
}