import React from 'react';
import DefaultPage from 'layout/components/DefaultPage';
import CasesGrid from 'components/CasesGrid';

export default (props) => (
  <DefaultPage dark title="Our work" {...props}>
    <CasesGrid textColor="white" animateFromLeft />
  </DefaultPage>
)