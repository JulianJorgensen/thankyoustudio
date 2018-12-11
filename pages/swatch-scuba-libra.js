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
      <Image lazy delay={200} src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/swatch-scuba-libra/images/swatch_scuba_yellow.jpg" />
    </Grid>

    <Grid ratio="16x9">
      <FullCaseVideo vimeoId="97100740" />
    </Grid>

    <Grid cols="2" collapseOnMobile>
      <Text topPadding bottomPadding>We decided to highlight the watch line’s bright colour palette and marine theme by designing massive neon sea creatures using digital neon lights. The creatures swim through the campaign in open air with the simple message of: Go Dive!</Text>
    </Grid>

    <Grid cols="2" ratio="3x4">
      <Image lazy delay={200} src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/swatch-scuba-libra/images/swatch_go_deep.jpg" />
      <Image lazy delay={200} src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/swatch-scuba-libra/images/swatch_splash.jpg" />
    </Grid>

    <Grid cols="2" collapseOnMobile>
      <Text topPadding bottomPadding>Swatch initially only wanted us to create a single page product centred advert but when we presented the idea for Go Dive!, they were so pleased they decided it should be their flagship campaign for the summer of 2014.</Text>
    </Grid>

    <Grid ratio="16x9">
      <Image lazy delay={200} src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/swatch-scuba-libra/images/swatch_octopus_blue.jpg" />
    </Grid>

    <Grid cols="2" collapseOnMobile>
      <Text topPadding bottomPadding>We produced a series of ads, in-store displays, product renders, TV spots along with a full stereoscopic 3D cinema spot for movie theaters.</Text>
    </Grid>

    <Grid cols="2" ratio="16x9">
      <Image lazy delay={200} src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/swatch-scuba-libra/images/swatch_store.jpg" />
      <Image lazy delay={200} src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/swatch-scuba-libra/images/swatch_shop_02.jpg" />
    </Grid>

    <Grid ratio="16x9">
      <FullCaseVideo vimeoId="97100741" />
    </Grid>

    <Grid ratio="16x9">
      <FullCaseVideo vimeoId="97101211" />
    </Grid>
  </Case>
)