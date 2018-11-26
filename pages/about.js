import React from 'react';
import styled from 'styled-components';
import DefaultPage from 'components/DefaultPage';
import IdentifySimplifyAmplify from 'components/IdentifySimplifyAmplify';
import { LAYOUT } from 'utils/variables';

const Content = styled.div`
  padding: 0 ${LAYOUT.MOBILE.EDGE_MARGIN};
`

export default (props) => (
  <DefaultPage whiteContent title="About" {...props}>
    <Content>
      <IdentifySimplifyAmplify whiteContent />
    </Content>
  </DefaultPage>
)
