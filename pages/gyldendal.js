import React from 'react';
import styled from 'styled-components';
import Case from 'layout/components/Case';
import FullCaseVideo from 'components/Case/FullCaseVideo';
import Grid from 'components/Grid';
import Text from 'components/Case/Text';
import Image from 'components/Case/Image';
import Video from 'components/Case/Video';
import { breakpoint, EASINGS, TIMINGS } from 'utils/variables';

export default (props) => (
  <Case
    isMobile={props.isMobile}
    title="Gyldendal"
    slug="gyldendal"
  >
    <Grid ratio="16x9">
      <FullCaseVideo vimeoId="304155100" />
    </Grid>

    <Grid cols="2" collapseOnMobile>
      <Text topPadding bottomPadding>Our challenge entailed reshaping their visual framework and brand structure which should feel new without disregarding the brand’s existing legacy.</Text>
    </Grid>

    <Grid ratio="16x9">
      <Image lazy delay={200} src="https://cdn.thankyoustudio.com/cases/gyldendal/gyldendal_joan.jpg" />
    </Grid>

    <Grid cols="2" ratio="16x9">
      <Image lazy delay={200} src="https://cdn.thankyoustudio.com/cases/gyldendal/gyldendal_yellow.jpg" />
      <Image lazy delay={300} src="https://cdn.thankyoustudio.com/cases/gyldendal/gyldendal_at_skrive_er_at_graede.jpg" />
    </Grid>

    <Grid cols="2" ratio="3x4">
      <Image lazy delay={200} src="https://cdn.thankyoustudio.com/cases/gyldendal/gyldendal_gys.jpg" />
      <Image lazy delay={300} src="https://cdn.thankyoustudio.com/cases/gyldendal/gyldendal_leth.jpg" />
    </Grid>

    <Grid ratio="16x9">
      <Video src="https://cdn.thankyoustudio.com/cases/gyldendal/video/gyldendal_logoanimation.mp4" />
    </Grid>

    <Grid cols="2" collapseOnMobile>
      <Text topPadding bottomPadding>This visual identity also had to be flexible enough for a complex organisation to fit it into their every need but also unified enough to stay consistent across all of their platforms.</Text>
    </Grid>

    <Grid ratio="16x9">
      <Image lazy delay={200} src="https://cdn.thankyoustudio.com/cases/gyldendal/gyldendal_sketch.jpg" />
    </Grid>

    <Grid cols="2" ratio="16x9">
      <Image lazy delay={200} src="https://cdn.thankyoustudio.com/cases/gyldendal/gyldendal_fonts.jpg" />
      <Image lazy delay={200} src="https://cdn.thankyoustudio.com/cases/gyldendal/gyldendal_joan_didion.jpg" />
    </Grid>

    <Grid cols="2" ratio="16x9">
      <Image lazy delay={200} src="https://cdn.thankyoustudio.com/cases/gyldendal/gyldendal_favoritter.jpg" />
      <Image lazy delay={200} src="https://cdn.thankyoustudio.com/cases/gyldendal/gyldendal_60.jpg" />
    </Grid>

    <Grid ratio="16x9">
      <Image lazy delay={200} src="https://cdn.thankyoustudio.com/cases/gyldendal/gyldendal_color_palette.jpg" />
    </Grid>

    <Grid cols="2" ratio="16x9">
      <Image lazy delay={200} src="https://cdn.thankyoustudio.com/cases/gyldendal/gyldendal_quotes.jpg" />
      <Video src="https://cdn.thankyoustudio.com/cases/gyldendal/video/dynamisk_ramme_slow%20copy.mp4" />
    </Grid>

    <Grid ratio="16x9">
      <Image lazy delay={200} src="https://cdn.thankyoustudio.com/cases/gyldendal/gyldendal_klubpris.jpg" />
    </Grid>

    <Grid ratio="16x9">
      <FullCaseVideo vimeoId="304165281" />
    </Grid>

    <Grid cols="2" collapseOnMobile>
      <Text topPadding bottomPadding>The end result is demonstrated in a brand new design guide applicable across departments.</Text>
    </Grid>

    <Grid ratio="16x9">
      <Image lazy delay={200} src="https://cdn.thankyoustudio.com/cases/gyldendal/gyldendal_collage.jpg" />
    </Grid>

    <Grid ratio="16x9">
      <Image lazy delay={200} src="https://cdn.thankyoustudio.com/cases/gyldendal/gyldendal_collage_02.jpg" />
    </Grid>

    <Grid cols="2" ratio="3x4">
      <Image lazy delay={200} src="https://cdn.thankyoustudio.com/cases/gyldendal/gyldendal_anti_guru.jpg" />
      <Image lazy delay={200} src="https://cdn.thankyoustudio.com/cases/gyldendal/gyldendal_sig_nej.jpg" />
    </Grid>

    <Grid cols="2" ratio="16x9">
      <Image lazy delay={200} src="https://cdn.thankyoustudio.com/cases/gyldendal/gyldendal_bus_poster.jpg" />
      <Image lazy delay={200} src="https://cdn.thankyoustudio.com/cases/gyldendal/gyldendal_banner.jpg" />
    </Grid>

    <Grid ratio="16x9">
      <Image lazy delay={200} src="https://cdn.thankyoustudio.com/cases/gyldendal/gyldendal_frames.jpg" />
    </Grid>

    <Grid cols="2" ratio="3x4">
      <Image lazy delay={200} src="https://cdn.thankyoustudio.com/cases/gyldendal/gyldendal_magazine.jpg" />
      <Image lazy delay={200} src="https://cdn.thankyoustudio.com/cases/gyldendal/gyldendal_magazine_02.jpg" />
    </Grid>

    <Grid ratio="16x9">
      <Image lazy delay={200} src="https://cdn.thankyoustudio.com/cases/gyldendal/images/gyldendal-iconset.jpg" />
    </Grid>
  </Case>
)