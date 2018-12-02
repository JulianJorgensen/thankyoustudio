import React from 'react';
import DefaultPage from 'layout/components/DefaultPage';
import Cases from 'components/Cases';

export default (props) => (
  <DefaultPage dark title="Our work" {...props}>
    <Cases textColor="white" />
  </DefaultPage>
)