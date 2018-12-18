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

    <Grid ratio="16x9">
      <Image lazy delay={200} src="https://cdn.thankyoustudio.com/cases/onea/images/onea-dark.jpg" />
    </Grid>

    <Grid cols="2" ratio="1x1">
      <Image lazy delay={200} src="https://cdn.thankyoustudio.com/cases/onea/images/onea-02.jpg" />
      <Image lazy delay={200} src="https://cdn.thankyoustudio.com/cases/onea/images/onea-cylinder.jpg" />
    </Grid>

    <Grid cols="2" ratio="2x3">
      <Image lazy delay={200} bgColor="white" inline src="https://cdn.thankyoustudio.com/cases/onea/images/onea-logo.jpg" />
      <Image lazy delay={200} src="https://cdn.thankyoustudio.com/cases/onea/images/onea-standing-light.jpg" />
    </Grid>

    <Grid cols="2" collapseOnMobile>
      <Text topPadding bottomPadding>
        <p>We worked closely with the ONE A team to take their already established brand to the next level. Revising brand strategy, refreshing their visual identity along with tone and voice, creating an extensive brand book and finally, designing a new modern website.</p>
        <p>ONE A believes that the spaces we inhabit should combine smart technology with a sense of wellbeing. This belief provided us with a strong foundation on which we built the communication strategy — Visual Harmony. “Creating the perfect merge of minimalist design and smart technology, to bring visual harmony to your home.”</p>
      </Text>
    </Grid>

    <Grid cols="2" ratio="1x1">
      <Image lazy delay={200} src="https://cdn.thankyoustudio.com/cases/onea/images/onea-gradient-dark.jpg" />
      <Image lazy delay={200} src="https://cdn.thankyoustudio.com/cases/onea/images/onea-gradient-light.jpg" />
    </Grid>

    <Grid cols="2" collapseOnMobile>
      <Text topPadding bottomPadding>One of the websites we created for ONE A is essentially a digital showroom, allowing the user to experience how the product actually works, from how it is installed to how it sounds and feels. We achieved this by re-creating the products in 3D, capturing every subtle detail. Everything was captured in motion so that the products would animate and move while the user navigated the catalogues, adjusting the lighting, the materials and how the products moved simultaneously.</Text>
    </Grid>

    <Grid ratio="16x9">
      <Image lazy delay={200} src="https://cdn.thankyoustudio.com/cases/onea/images/onea-storm-long.jpg" />
    </Grid>

    <Grid cols="2" ratio="2x3">
      <Image lazy delay={200} src="https://cdn.thankyoustudio.com/cases/onea/images/onea-storm-base-tube.jpg" />
      <Image lazy delay={200} src="https://cdn.thankyoustudio.com/cases/onea/images/onea-lightning-table.jpg" />
    </Grid>

    <Grid cols="2" collapseOnMobile>
      <Text topPadding bottomPadding>Using innovative coding, we developed features that allowed users to recreate their own environment, instantly pairing their needs with the products available. </Text>
    </Grid>

    <Grid ratio="16x9">
      <FullCaseVideo vimeoId="305454528" />
    </Grid>
  </Case>
)