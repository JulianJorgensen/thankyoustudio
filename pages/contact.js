import React from 'react';
import DefaultPage from 'components/DefaultPage';
import Locations from 'components/Locations';

export default (props) => (
  <DefaultPage whiteContent title="Contact" {...props}>
    <Locations />
  </DefaultPage>
)