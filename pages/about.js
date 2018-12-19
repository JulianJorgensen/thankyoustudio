import React from 'react';
import styled from 'styled-components';
import DefaultPage from 'layout/components/DefaultPage';
import Text from 'components/Typography/Text';
import IdentifySimplifyAmplify from 'components/IdentifySimplifyAmplify';
import { LAYOUT } from 'utils/variables';

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 ${LAYOUT.MOBILE.EDGE_MARGIN};
`

const IntroText = styled(Text)`
  width: 40vw;
  margin-top: 200px;
`

export default (props) => (
  <DefaultPage dark title="About" {...props}>
    <Content>
      <IntroText>
        <p>We like to keep things simple. To us, designing is about making sense of complex matters — translating them into world class digital products, brands and experiences, that make people happy and companies succeed.</p>
        <p>We are a full-service agency, and at our offices in Copenhagen, San Francisco and Reykjavík, you’ll meet a tight knitted team —each one a specialist in their skill set, but with a curious mind for surrounding areas.</p>
        <p>Throughout our 12 years, we’ve had the pleasure of challenging and redefining solid brands with both a history and an iconic status. We’ve also nursed fresh new faces with big ideas and eyes at the moon.</p>
        <p>Our work is always authentic at heart, meaningful in spirit and crafted for impact.</p>
      </IntroText>
    </Content>
  </DefaultPage>
)
