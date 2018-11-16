import React, { Component } from 'react';
import DefaultPage from 'components/DefaultPage';
import IdentifySimplifyAmplify from 'components/IdentifySimplifyAmplify';

export default class AboutPage extends Component {
  render() {
    return (
      <DefaultPage whiteContent title="About">
        <IdentifySimplifyAmplify whiteContent />
      </DefaultPage>
    )
  }
}