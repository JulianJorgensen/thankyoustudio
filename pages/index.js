import React from 'react';
import dynamic from 'next/dynamic';
import styled from 'styled-components';
import Case from 'layout/components/Case';
import Grid from 'components/Grid';
import Text from 'components/Case/Text';
import AboutCopy from 'components/AboutCopy';
import { breakpoint, LAYOUT } from 'utils/variables';
// import Reel from 'components/Reel';

const CasesGrid = dynamic(import('components/CasesGrid'));
const InstagramFeed = dynamic(import('components/InstagramFeed'));

const StyledCasesGrid = styled(CasesGrid)`
`

export default (props) => (
  <Case isLanding {...props}>
    {/* <Reel /> */}
    {/* <Grid>
      <Text intro>
        <p>We like to keep things simple. To us, designing is about making sense of complex matters — translating them into unique digital products, brands and experiences, that make people happy and companies succeed.</p>
        <p>We are a full-service studio, and at our offices in Copenhagen, San Francisco and Reykjavík, you’ll meet a tightly knit team —each one a specialist in their skill set, but with a curious mind for surrounding areas.</p>
      </Text>
    </Grid>

    <StyledCasesGrid  isMobile={props.isMobile} onWhite />
    <InstagramFeed /> */}
  </Case>
)