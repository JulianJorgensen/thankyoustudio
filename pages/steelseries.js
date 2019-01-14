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
    slug="steelseries"
  >
    <Grid>
      <Text intro>
        <p>Since early 2015, we have been working with SteelSeries to develop their brand and build a solid foundation for them to grow into a major global player in a rapidly expanding market.</p>
      </Text>
    </Grid>

    <Grid ratio="16x9">
      <Image lazy bgColor="#0D0D0F" src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/steelseries/steelseries_headphones.jpg" />
    </Grid>

    <Grid cols="2" collapseOnMobile>
      <Text topPadding bottomPadding>We started with re-aligning their visual identity and refresing the way they represent their products visually. Moving away from standard product photography and introducing high-end 3D renders, allowing more flexibility when showing products in Print POS and Web.</Text>
    </Grid>

    <Grid ratio="16x9">
      <FullCaseVideo vimeoId="215641222" />
    </Grid>

    <Grid ratio="16x9">
      <Image lazy bgColor="#262626" src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/steelseries/steelseries_headset_closeup.jpg" />
    </Grid>

    <Grid ratio="16x9">
      <Image lazy bgColor="#121212" src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/steelseries/steelseries_rise_to_the_challenge.jpg" />
    </Grid>

    <Grid ratio="16x9">
      <Image lazy bgColor="#FFFFFF" src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/steelseries/steelseries_boxes.jpg" />
    </Grid>

    <Grid cols="2" collapseOnMobile>
      <Text topPadding bottomPadding>Once the visual identity of the brand was solid, we began working on communication through various product campaigns — shifting the focus from “product-centered” to “people-focused”. We tapped into SteelSeries’ large network of ambassadors and sponsors to get real stories to drive all communication.</Text>
    </Grid>

    <Grid cols="2" ratio="16x9">
      <Image lazy bgColor="#282828" src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/steelseries/steelseries_mouse_birdsview.jpg" />
      <Image lazy bgColor="#100F16" src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/steelseries/steelseries_rival_700.jpg" />
    </Grid>

    <Grid cols="2" collapseOnMobile>
      <Text topPadding bottomPadding>In 2017, we helped SteelSeries launch the most innovative gaming headset on the market. Through a combination of the brands evolution in visual identity, product development, communication and community outreach, SteelSeries is now defining what the future of gaming will look like.</Text>
    </Grid>
 
    <Grid ratio="16x9">
      <FullCaseVideo vimeoId="304369690" />
    </Grid>
  </Case>
)