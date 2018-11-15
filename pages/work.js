import React, { Component } from 'react';
import DefaultPage from 'components/DefaultPage';
import Work from 'components/Work';

export default class WorkPage extends Component {
  render() {
    return (
      <DefaultPage whiteContent title="Our work">
        <Work textColor="white" />
      </DefaultPage>
    )
  }
}