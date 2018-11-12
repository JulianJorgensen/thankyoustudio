import React, { Component } from 'react';
import Head from 'next/head';
import StandAlonePage from 'components/StandAlonePage';
import Locations from 'components/Locations';
import styled from 'styled-components';
import { meta } from 'utils/variables';

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
  min-height: 100vh;
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
      <StandAlonePage>
        <Head>
          <title>Contact {meta.description}</title>
        </Head>
        <Content>
          <Locations />
        </Content>
      </StandAlonePage>
    )
  }
}