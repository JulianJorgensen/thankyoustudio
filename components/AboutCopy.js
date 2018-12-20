import React from 'react';
import styled from 'styled-components';
import Text from 'components/Typography/Text';
import { breakpoint, LAYOUT } from 'utils/variables';

const Wrapper = styled.div`
  display: grid;

  ${breakpoint.m `
    grid-gap: 20px;
    grid-template-columns: 1fr 1fr;
    grid-gap: ${LAYOUT.MOBILE.EDGE_MARGIN};
  `}
`

export default (props) => (
  <Wrapper {...props}>
    <Text>
      <p>We like to keep things simple. To us, designing is about making sense of complex matters — translating them into unique digital products, brands and experiences, that make people happy and companies succeed.</p>
      <p>We are a full-service studio, and at our offices in Copenhagen, San Francisco and Reykjavík, you’ll meet a tightly knit team —each one a specialist in their skill set, but with a curious mind for surrounding areas.</p>
    </Text>
    <Text>
      <p>Throughout our 12 years, we’ve had the pleasure of challenging and redefining solid brands with both a history and an iconic status. We’ve also nursed fresh new faces with big ideas and eyes at the moon.</p>
      <p>Our work is always authentic at heart, meaningful in spirit and crafted for impact.</p>
    </Text>
  </Wrapper>
);
