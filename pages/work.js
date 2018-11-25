import React from 'react';
import DefaultPage from 'components/DefaultPage';
import Work from 'components/Work';

export default (props) => (
  <DefaultPage whiteContent title="Our work" {...props}>
    <Work textColor="white" />
  </DefaultPage>
)