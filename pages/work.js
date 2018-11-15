import React, { Component } from 'react';
import DefaultPage from 'components/DefaultPage';
import styled from 'styled-components';
import media from "styled-media-query";
import Work from 'components/Work';

const Content = styled.div`
  background-color: black;
  color: white;
  width: 100%;
  padding: 200px 0 0 0;
`

export default class WorkPage extends Component {
  render() {
    return (
      <DefaultPage whiteContent title="Our work">
        <Content>
          <Work textColor="white" />
        </Content>
      </DefaultPage>
    )
  }
}