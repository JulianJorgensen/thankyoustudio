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
    title="Onea"
    slug="onea"
  >
    <Grid>
      <Text intro>
        <p>ONE A is a Danish design company that produces advanced architectural lighting systems and smart lighting products for high-end living spaces.</p>
      </Text>
    </Grid>

    <Grid ratio="16x9">
      <Image lazy bgColor="#020204" delay={200} src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/onea/images/onea-dark.jpg" />
    </Grid>

    <Grid cols="2" ratio="1x1">
      <Image lazy bgColor="#3C4760" src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/onea/images/onea-02.jpg" />
      <Image lazy bgColor="#F4F4F4" delay={100} src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/onea/images/onea-cylinder.jpg" />
    </Grid>

    <Grid cols="2" ratio="2x3">
      <Image lazy bgColor="" bgColor="white" inline src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/onea/images/onea-logo.jpg" />
      <Image lazy bgColor="#171C22" delay={100} src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/onea/images/onea-standing-light.jpg" />
    </Grid>

    <Grid cols="2" collapseOnMobile>
      <Text topPadding bottomPadding>
        <p>We worked closely with the ONE A team to take their already established brand to the next level. Revising brand strategy, refreshing their visual identity along with tone and voice, creating an extensive brand book and finally, designing a new modern website.</p>
        <p>ONE A believes that the spaces we inhabit should combine smart technology with a sense of wellbeing. This belief provided us with a strong foundation on which we built the communication strategy — Visual Harmony. “Creating the perfect merge of minimalist design and smart technology, to bring visual harmony to your home.”</p>
      </Text>
    </Grid>

    <Grid cols="2" ratio="1x1">
      <Image lazy bgColor="#1F1F1F" src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/onea/images/onea-gradient-dark.jpg" />
      <Image lazy bgColor="#E0E0E0" delay={100} src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/onea/images/onea-gradient-light.jpg" />
    </Grid>

    <Grid cols="2" collapseOnMobile>
      <Text topPadding bottomPadding>One of the websites we created for ONE A is essentially a digital showroom, allowing the user to experience how the product actually works, from how it is installed to how it sounds and feels. We achieved this by re-creating the products in 3D, capturing every subtle detail. Everything was captured in motion so that the products would animate and move while the user navigated the catalogues, adjusting the lighting, the materials and how the products moved simultaneously.</Text>
    </Grid>

    <Grid ratio="16x9">
      <Image lazy bgColor="#323232" src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/onea/images/onea-storm-long.jpg" />
    </Grid>

    <Grid cols="2" ratio="2x3">
      <Image lazy bgColor="#969696" src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/onea/images/onea-storm-base-tube.jpg" />
      <Image lazy bgColor="#030305" delay={100} src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/onea/images/onea-lightning-table.jpg" />
    </Grid>

    <Grid cols="2" collapseOnMobile>
      <Text topPadding bottomPadding>Using innovative coding, we developed features that allowed users to recreate their own environment, instantly pairing their needs with the products available. </Text>
    </Grid>

    <Grid ratio="16x9">
      <FullCaseVideo vimeoId="305454528" />
    </Grid>
  </Case>
)