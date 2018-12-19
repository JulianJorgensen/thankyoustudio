import React from 'react';
import dynamic from 'next/dynamic';
import styled from 'styled-components';
import Case from 'layout/components/Case';
import Text from 'components/Typography/Text';
import { breakpoint, LAYOUT } from 'utils/variables';

const CasesGrid = dynamic(import('components/CasesGrid'));
const InstagramFeed = dynamic(import('components/InstagramFeed'));

const StyledCasesGrid = styled(CasesGrid)`
`

const IntroText = styled(Text)`
  margin: 180px ${LAYOUT.MOBILE.EDGE_MARGIN} 60px;

  ${breakpoint.up('m')`
    margin: 350px ${LAYOUT.EDGE_MARGIN} 0;
    width: 40vw;
  `}
`

export default (props) => (
  <Case isLanding {...props}>
    <IntroText>
      <p>We like to keep things simple. To us, designing is about making sense of complex matters — translating them into world class digital products, brands and experiences, that make people happy and companies succeed.</p>
      <p>We are a full-service agency, and at our offices in Copenhagen, San Francisco and Reykjavík, you’ll meet a tight knitted team —each one a specialist in their skill set, but with a curious mind for surrounding areas.</p>
      <p>Throughout our 12 years, we’ve had the pleasure of challenging and redefining solid brands with both a history and an iconic status. We’ve also nursed fresh new faces with big ideas and eyes at the moon.</p>
      <p>Our work is always authentic at heart, meaningful in spirit and crafted for impact.</p>
    </IntroText>
    <StyledCasesGrid onWhite />
    <InstagramFeed />
  </Case>
)