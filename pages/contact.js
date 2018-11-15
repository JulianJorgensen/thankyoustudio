import React, { Component } from 'react';
import DefaultPage from 'components/DefaultPage';
import Locations from 'components/Locations';
import styled from 'styled-components';

const Content = styled.div`
  padding: 200px 80px;
  background-color: black;
  color: white;
  min-height: 100vh;
`

export default class ContactPage extends Component {
  render() {
    return (
      <DefaultPage whiteContent title="Contact">
        <Content>
          <Locations />
        </Content>
      </DefaultPage>
    )
  }
}