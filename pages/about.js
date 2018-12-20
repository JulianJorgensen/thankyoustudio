import React from 'react';
import styled from 'styled-components';
import DefaultPage from 'layout/components/DefaultPage';
import Text from 'components/Typography/Text';
import AboutCopy from 'components/AboutCopy';
import { breakpoint, LAYOUT } from 'utils/variables';

const Content = styled.div`
  margin: 60px ${LAYOUT.MOBILE.EDGE_MARGIN};

  ${breakpoint.m `
    margin: 60px ${LAYOUT.EDGE_MARGIN};  
  `}
`

export default (props) => (
  <DefaultPage title="About" {...props}>
    <Content>
      <h2>Good design is good business</h2>
      <AboutCopy />
    </Content>
  </DefaultPage>
)
