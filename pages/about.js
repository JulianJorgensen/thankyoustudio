import React from 'react';
import styled from 'styled-components';
import DefaultPage from 'layout/components/DefaultPage';
import IdentifySimplifyAmplify from 'components/IdentifySimplifyAmplify';
import { LAYOUT } from 'utils/variables';

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 ${LAYOUT.MOBILE.EDGE_MARGIN};
  min-height: calc(100vh - 100px);
`

const Tagline = styled.h2`
  max-width: 500px;
  text-align: center;
`

export default (props) => (
  <DefaultPage dark title="About" {...props}>
    <Content>
      <Tagline>Designing experiences that connect brands with contemporary culture.</Tagline>
    </Content>
  </DefaultPage>
)
