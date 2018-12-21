import React from 'react';
import styled from 'styled-components';
import Case from 'layout/components/Case';
import FullCaseVideo from 'components/Case/FullCaseVideo';
import Grid from 'components/Grid';
import Text from 'components/Case/Text';
import Image from 'components/Case/Image';
import { breakpoint, EASINGS, TIMINGS } from 'utils/variables';

const LeadText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 35px;
  width: 100%;
  color: white;

  ${breakpoint.up('m')`
    font-size: 80px;
  `}
`

export default (props) => (
  <Case
    isMobile={props.isMobile}
    title="Universal Robots"
    slug="universal-robots"
  >
    <Grid>
      <Text intro>
        <p>You are invited, but actually this party is really for UR robots themselves. And to make this a special thing to remember all the other 24.999 robots are invited – and not just for the party, but for the all the preparations as well. We set out to create a cinematic music narrative with a aesthetic inspiration paying homage to old school music dance videos. We explore  the opportunity to personify the UR robots by giving them musical influence. Starting with 3 small movies showing the “behind the scenes” of all the preparations to create excitement for the release of the main film, the celebration film.</p>
      </Text>
    </Grid>

    <Grid ratio="16x9">
      <Image lazy delay={300} src="//cdn.thankyoustudio.com/cases/universal-robots/images/universal-robots-01.jpg" />
    </Grid>

    <Grid ratio="16x9">
      <FullCaseVideo vimeoId="305963043" />
    </Grid>

    <Grid cols="2" ratio="16x9">
      <Image lazy delay={200} src="//cdn.thankyoustudio.com/cases/universal-robots/images/universal-robots-02.jpg" />
      <Image lazy delay={300} src="//cdn.thankyoustudio.com/cases/universal-robots/images/universal-robots-03.jpg" />
    </Grid>

    <Grid ratio="16x9">
      <FullCaseVideo vimeoId="305962839" />
    </Grid>

    <Grid ratio="16x9">
      <FullCaseVideo vimeoId="305963113" />
    </Grid>

    <Grid ratio="16x9">
      <FullCaseVideo vimeoId="305963078" />
    </Grid>
  </Case>
)