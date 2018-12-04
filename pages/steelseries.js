import React from 'react';
import styled from 'styled-components';
import Case from 'layout/components/Case';
import FullCaseVideo from 'components/Case/FullCaseVideo';
import Grid from 'components/Grid';
import Text from 'components/Case/Text';
import Image from 'components/Case/Image';

export default (props) => (
  <Case
    isMobile={props.isMobile}
    title="Steelseries"
    teaserText="Design. Experiences."
    imageSrc="http://cdn.thankyoustudio.com.s3.amazonaws.com/images/onea-cover.jpg"
  >
    <Text intro>Taking a brand from startup to worldwide sales Keeping the hardcore gamers and reach for a wider audience.</Text>

    <Grid ratio="16x9">
      <Image lazy delay={200} src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/steelseries/steelseries_mouse_exploded.jpg" />
    </Grid>

    <Grid ratio="16x9">
      <Image lazy delay={200} src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/steelseries/steelseries_headphones.jpg" />
    </Grid>

    <Grid ratio="16x9">
      <FullCaseVideo vimeoId="215641222" />
    </Grid>

    <Grid ratio="16x9">
      <Image lazy delay={200} src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/steelseries/steelseries_headset_closeup.jpg" />
    </Grid>

    <Grid ratio="16x9">
      <Image lazy delay={200} src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/steelseries/steelseries_rise_to_the_challenge.jpg" />
    </Grid>

    <Grid ratio="16x9">
      <Image lazy delay={200} src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/steelseries/steelseries_boxes.jpg" />
    </Grid>

    <Grid cols="2" ratio="16x9">
      <Image lazy delay={200} src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/steelseries/steelseries_mouse_birdsview.jpg" />
      <Image lazy delay={200} src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/steelseries/steelseries_rival_700.jpg" />
    </Grid>

    <Grid cols="2" ratio="16x9" collapseOnMobile>
      <Text>Taking a brand from startup to worldwide sales Keeping the hardcore gamers and reach for a wider audience.</Text>
    </Grid>
 
    <Grid ratio="16x9">
      <FullCaseVideo vimeoId="304369690" />
    </Grid>
  </Case>
)