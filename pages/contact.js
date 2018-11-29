import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import DefaultPage from 'layout/components/DefaultPage';
import Locations from 'components/Locations';
import { breakpoint, LAYOUT } from 'utils/variables';

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 60px 40px 0;
  width: 50%;
  margin-right: 100px;
`

const StyledLocations = styled(Locations)`
  margin-bottom: 100px;
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

            <Careers>
              <h3>Thinking of joining?</h3>
              <p>We collaborate with smart, creative makers.<br />Your ideas and energy shape our culture and you’ll thrive in an environment that values great work and having fun.<br /><a href="mailto:jobs@thankyoustudio.com">jobs@thankyoustudio.com</a></p>
            </Careers>
        </Content>
      </DefaultPage>
    )
  }
}