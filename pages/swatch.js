import React from 'react';
import styled from 'styled-components';
import Case from 'layout/components/Case';
import FullCaseVideo from 'components/Case/FullCaseVideo';
import Grid from 'components/Grid';
import Text from 'components/Text';
import Image from 'components/Image';
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
    title="Swatch"
    subtitle="Design. Experiences."
    imageSrc="http://cdn.thankyoustudio.com.s3.amazonaws.com/images/swatch-cover.jpg"
  >
    <Grid ratio="16x9">
      <FullCaseVideo vimeoId="262509870" />
    </Grid>

    <Grid cols="2" ratio="16x9">
      <Text>Your Move” emphasises the feeling of exhilarating freedom and playful provocation inherent in movement. Most importantly, it positions SKIN as an extension of those values.</Text>
      <Text></Text>
    </Grid>

    <Grid ratio="16x9">
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

    <Grid cols="2" ratio="16x9">
      <Text>By uniting the model and the watch’s physical movements through graphic continuity and exaggerated scale, we’ve positioned SKIN as a vital part of female movement, empowerment and freedom.</Text>
      <Text></Text>
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

    <Grid cols="2" ratio="16x9">
      <Text>To extend the life and reach we produced a behind the scene film, to feed social media.</Text>
      <Text></Text>
    </Grid>

  </Case>
)