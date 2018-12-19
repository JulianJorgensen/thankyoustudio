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