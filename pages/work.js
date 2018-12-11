import React from 'react';
import DefaultPage from 'layout/components/DefaultPage';
import CasesGrid from 'components/CasesGrid';

export default (props) => (
  <DefaultPage title="Our work" {...props}>
    <CasesGrid onWhite noAnimation />
  </DefaultPage>
)