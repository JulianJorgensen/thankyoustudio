import React, { Component } from 'react';
import DefaultPage from 'components/DefaultPage';
import IdentifySimplifyAmplify from 'components/IdentifySimplifyAmplify';
import styled from 'styled-components';

const Content = styled.div`
  background-color: black;
  color: white;
  width: 100%;
  padding: 200px 0 0 0;
  min-height: 100vh;
`

export default class AboutPage extends Component {
  render() {
    return (
      <DefaultPage whiteContent title="About">
        <Content>
          <IdentifySimplifyAmplify />
        </Content>
      </DefaultPage>
    )
  }
}