import React, { Component } from 'react';
import DefaultPage from 'components/DefaultPage';
import Locations from 'components/Locations';

export default class ContactPage extends Component {
  render() {
    return (
      <DefaultPage whiteContent title="Contact">
        <Locations />
      </DefaultPage>
    )
  }
}