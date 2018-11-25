import React from 'react';
import DefaultPage from 'components/DefaultPage';
import IdentifySimplifyAmplify from 'components/IdentifySimplifyAmplify';

export default (props) => (
  <DefaultPage whiteContent title="About" {...props}>
    <IdentifySimplifyAmplify whiteContent />
  </DefaultPage>
)
