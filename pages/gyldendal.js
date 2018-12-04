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
    teaserText="Design. Experiences."
    imageSrc="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/gyldendal/cover.jpg"
  >
    <Text intro>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar mi in nulla placerat, id ultricies leo fermentum. Proin in ex urna. Proin sodales id risus ac eleifend. Pellentesque habitant morbi tristique senectus et netus et malesuada fames.</Text>

    <Grid ratio="16x9">
      <FullCaseVideo vimeoId="304155100" />
    </Grid>

    <Grid cols="2" ratio="16x9" collapseOnMobile>
      <Text>From corporate to colorfull<br />Opgaven for Gyldendal+ er at gøre litterære oplevelser til en større del af danskernes dagligdag.</Text>
    </Grid>

    <Grid ratio="16x9">
      <Image lazy delay={200} src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/gyldendal/gyldendal_joan.jpg" />
    </Grid>

    <Grid cols="2" ratio="16x9">
      <Image lazy delay={200} src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/gyldendal/gyldendal_yellow.jpg" />
      <Image lazy delay={300} src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/gyldendal/gyldendal_at_skrive_er_at_graede.jpg" />
    </Grid>

    <Grid cols="2" ratio="3x4">
      <Image lazy delay={200} src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/gyldendal/gyldendal_gys.jpg" />
      <Image lazy delay={300} src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/gyldendal/gyldendal_leth.jpg" />
    </Grid>

    <Grid ratio="16x9">
      <Video src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/gyldendal/video/gyldendal_logoanimation.mp4" />
    </Grid>

    <Grid cols="2" ratio="16x9" collapseOnMobile>
      <Text>Easy and freindly<br />Using graphic design to help moving an organisation, it has to inspiring and leave space for creativety yrt cosistant. Few elements and beautiful visiualizations.</Text>
    </Grid>

    <Grid ratio="16x9">
      <Image lazy delay={200} src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/gyldendal/gyldendal_sketch.jpg" />
    </Grid>

    <Grid cols="2" ratio="16x9">
      <Image lazy delay={200} src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/gyldendal/gyldendal_fonts.jpg" />
      <Image lazy delay={200} src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/gyldendal/gyldendal_joan_didion.jpg" />
    </Grid>

    <Grid cols="2" ratio="16x9">
      <Image lazy delay={200} src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/gyldendal/gyldendal_favoritter.jpg" />
      <Image lazy delay={200} src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/gyldendal/gyldendal_60.jpg" />
    </Grid>

    <Grid ratio="16x9">
      <Image lazy delay={200} src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/gyldendal/gyldendal_color_palette.jpg" />
    </Grid>

    <Grid cols="2" ratio="16x9">
      <Image lazy delay={200} src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/gyldendal/gyldendal_quotes.jpg" />
      <Video src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/gyldendal/video/dynamisk_ramme_slow%20copy.mp4" />
    </Grid>

    <Grid ratio="16x9">
      <Image lazy delay={200} src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/gyldendal/gyldendal_klubpris.jpg" />
    </Grid>

    <Grid ratio="16x9">
      <FullCaseVideo vimeoId="304165281" />
    </Grid>

    <Grid cols="2" ratio="16x9" collapseOnMobile>
      <Text>Keep it fresh<br />Book and authers are the comodeties of a publischer. Putting them into a context makes them more acceible</Text>
    </Grid>

    <Grid ratio="16x9">
      <Image lazy delay={200} src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/gyldendal/gyldendal_collage.jpg" />
    </Grid>

    <Grid ratio="16x9">
      <Image lazy delay={200} src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/gyldendal/gyldendal_collage_02.jpg" />
    </Grid>

    <Grid cols="2" ratio="16x9" collapseOnMobile>
      <Text>Examples<br />Here is what it colud look like</Text>
    </Grid>

    <Grid cols="2" ratio="3x4">
      <Image lazy delay={200} src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/gyldendal/gyldendal_anti_guru.jpg" />
      <Image lazy delay={200} src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/gyldendal/gyldendal_sig_nej.jpg" />
    </Grid>

    <Grid cols="2" ratio="16x9">
      <Image lazy delay={200} src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/gyldendal/gyldendal_bus_poster.jpg" />
      <Image lazy delay={200} src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/gyldendal/gyldendal_banner.jpg" />
    </Grid>

    <Grid ratio="16x9">
      <Image lazy delay={200} src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/gyldendal/gyldendal_frames.jpg" />
    </Grid>

    <Grid cols="2" ratio="3x4">
      <Image lazy delay={200} src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/gyldendal/gyldendal_magazine.jpg" />
      <Image lazy delay={200} src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/gyldendal/gyldendal_magazine_02.jpg" />
    </Grid>

    {/* <Grid ratio="16x9">
      <Image lazy delay={200} src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/swatch-skin/swatch_pink.jpg" />
    </Grid>

    <Grid ratio="16x9">
      <Image lazy delay={200} src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/swatch-skin/swatch_man.jpg" />
    </Grid>

    <Grid ratio="16x9">
      <Image lazy delay={200} src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/swatch-skin/swatch_catalogue_spread.jpg" />
    </Grid>

    <Grid ratio="2x3">
      <Image lazy delay={200} src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/swatch-skin/swatch_lightblue_watch.jpg" />
    </Grid>

    <Grid cols="2" ratio="16x9" collapseOnMobile>
      <Text>By uniting the model and the watch’s physical movements through graphic continuity and exaggerated scale, we’ve positioned SKIN as a vital part of female movement, empowerment and freedom.</Text>
    </Grid>

    <Grid cols="2" ratio="16x9">
      <Image lazy delay={200} src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/swatch-skin/swatch_train_campaign.jpg" />
      <Image lazy delay={300} src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/swatch-skin/swatch_train_campaign_02.jpg" />
    </Grid>

    <Grid cols="2" ratio="16x9">
      <Image lazy delay={200} src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/swatch-skin/swatch_bus_campaign.jpg" />
      <Image lazy delay={300} src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/swatch-skin/swatch_asian_woman.jpg" />
    </Grid>

    <Grid cols="2" ratio="16x9">
      <Image lazy delay={200} src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/swatch-skin/swatch_your_move.jpg" />
      <Image lazy delay={300} src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/swatch-skin/swatch_your_move_02.jpg" />
    </Grid>

    <Grid cols="2" ratio="16x9" collapseOnMobile>
      <Text>To extend the life and reach we produced a behind the scene film, to feed social media.</Text>
    </Grid> */}

  </Case>
)