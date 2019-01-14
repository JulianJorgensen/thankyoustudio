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
    title="Swatch"
    slug="swatch"
  >
    <Grid>
      <Text intro>
        <p>In 1997, Swatch launched it’s very first SKIN watch - the thinnest watch in the world. 20 years later we helped them re-launch the collection with a new design catering to a new generation of strong and self-confident women.</p>
      </Text>
    </Grid>

    <Grid ratio="16x9">
      <FullCaseVideo vimeoId="304158078" />
    </Grid>

    <Grid cols="2" collapseOnMobile>
      <Text topPadding bottomPadding>The campaign is based on the watch’s almost weightless design and how that feature can make the wearer feel both free and confident. “Your Move” is about the thrill of the unknown, the beauty of movement and the anticipation of change. A playful celebration of both freedom and movement.</Text>
    </Grid>

    <Grid ratio="16x9">
      <Image lazy bgColor="#EFEFEF" src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/swatch-skin/swatch_pink.jpg" />
    </Grid>

    <Grid ratio="16x9">
      <Image lazy bgColor="#EFEFEF" src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/swatch-skin/swatch_man.jpg" />
    </Grid>

    <Grid ratio="16x9">
      <Image lazy bgColor="#EFEFEF" src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/swatch-skin/swatch_catalogue_spread.jpg" />
    </Grid>

    <Grid ratio="16x9">
      <Video lazy bgColor="#ECF2FC" src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/swatch-skin/swatch_timessquare.mp4" />
    </Grid>

    <Grid ratio="2x3">
      <Image lazy src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/swatch-skin/swatch_lightblue_watch.jpg" />
    </Grid>

    <Grid cols="2" collapseOnMobile>
      <Text topPadding bottomPadding>By uniting the model’s and the watch’s physical movements as they float freely we created unique graphic continuity that was able to stretch across all platforms. Positioning SKIN as a vital part of female empowerment and freedom.</Text>
    </Grid>

    <Grid cols="2" ratio="16x9">
      <Image lazy bgColor="#7E998A" src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/swatch-skin/swatch_train_campaign.jpg" />
      <Image lazy bgColor="#9A9177" delay={100} src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/swatch-skin/swatch_train_campaign_02.jpg" />
    </Grid>

    <Grid cols="2" ratio="16x9">
      <Image lazy bgColor="#C1BDBC" src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/swatch-skin/swatch_bus_campaign.jpg" />
      <Image lazy bgColor="#441D87" delay={100} src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/swatch-skin/swatch_asian_woman.jpg" />
    </Grid>

    <Grid cols="2" ratio="16x9">
      <Image lazy bgColor="#6866AF" src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/swatch-skin/swatch_your_move.jpg" />
      <Image lazy bgColor="#F8FDFF" delay={100} src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/swatch-skin/swatch_your_move_02.jpg" />
    </Grid>

    <Grid cols="2" collapseOnMobile>
      <Text topPadding bottomPadding>To extend the life and reach of the campaign we also released a behind-the-scenes film on social media. Showing the process of creating the campaign.</Text>
    </Grid>
  </Case>
)