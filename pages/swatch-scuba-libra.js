import React from 'react';
import styled from 'styled-components';
import Case from 'layout/components/Case';
import FullCaseVideo from 'components/Case/FullCaseVideo';
import Grid from 'components/Grid';
import Text from 'components/Case/Text';
import Image from 'components/Case/Image';
import { breakpoint, EASINGS, TIMINGS } from 'utils/variables';

export default (props) => (
  <Case
    isMobile={props.isMobile}
    title="Swatch Scuba Libra"
    slug="swatch-scuba-libra"
  >
    <Grid ratio="16x9">
      <Image lazy delay={200} src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/swatch-scuba-libra/images/swatch_go_dive.jpg" />
    </Grid>

    <Grid cols="2" ratio="3x4">
      <Image lazy delay={200} src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/swatch-scuba-libra/images/swatch_go_deep.jpg" />
      <Image lazy delay={200} src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/swatch-scuba-libra/images/swatch_splash.jpg" />
    </Grid>

    <Grid ratio="16x9">
      <Image lazy delay={200} src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/swatch-scuba-libra/images/swatch_sea_animals.jpg" />
    </Grid>

    <Grid cols="2" ratio="16x9">
      <Image lazy delay={200} src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/swatch-scuba-libra/images/swatch_store.jpg" />
      <Image lazy delay={200} src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/swatch-scuba-libra/images/swatch_shop_02.jpg" />
    </Grid>
  </Case>
)