import React from 'react';
import styled from 'styled-components';
import DefaultPage from 'layout/components/DefaultPage';
import IdentifySimplifyAmplify from 'components/IdentifySimplifyAmplify';
import { LAYOUT } from 'utils/variables';

const Content = styled.div`
  padding: 0 ${LAYOUT.MOBILE.EDGE_MARGIN};
  min-height: calc(100vh - 100px);
`

export default (props) => (
  <DefaultPage dark title="About" {...props}>
    <Content>
    </Content>
  </DefaultPage>
)
