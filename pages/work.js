import React from 'react';
import DefaultPage from 'layout/components/DefaultPage';
import WorkGrid from 'components/WorkGrid';

export default (props) => (
  <DefaultPage dark title="Our work" {...props}>
    <WorkGrid textColor="white" />
  </DefaultPage>
)