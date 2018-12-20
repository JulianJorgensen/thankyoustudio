import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import DefaultPage from 'layout/components/DefaultPage';
import Locations from 'components/Locations';
import { breakpoint, LAYOUT } from 'utils/variables';

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 60px ${LAYOUT.MOBILE.EDGE_MARGIN} 0;

  ${breakpoint.up('m')`
    width: 50%;
    margin-right: 100px;
    padding: 60px 40px 0;
  `}
`

const StyledLocations = styled(Locations)`
  ${breakpoint.up('m')`
    margin-bottom: 100px;
  `}
`

const Careers = styled.div`
  margin-top: 100px;
`

const Email = styled.a`
  font-size: 24px;
  font-weight: bold;
`

const Phone = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin: 10px 0 60px;
`

@connect()
export default class Contact extends Component {
  render() {
    return (
      <DefaultPage whiteContent title="Contact" {...this.props}>
        <Content>
            <Email href="mailto:info@thankyoustudio.com">info@thankyoustudio.com</Email>
            <Phone>+45 5214 0000</Phone>
            <StyledLocations />
        </Content>
      </DefaultPage>
    )
  }
}