import React, { Component } from 'react';
import DefaultPage from 'components/DefaultPage';
import styled from 'styled-components';

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
      <DefaultPage>
        <Content>
          <Header>
            <Title>Privacy</Title>
            <Lead>Design thinking is at the core of everything we do. The result is always fresh, vibrant and relevant.</Lead>
          </Header>
        </Content>
      </DefaultPage>
    )
  }
}