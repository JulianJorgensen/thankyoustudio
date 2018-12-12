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

    <Grid cols="2" ratio="16x9" collapseOnMobile>
      <Text>We worked closely with the ONE A team to take their already established brand to the next level. Revising brand strategy, refreshing their visual identity along with tone and voice, creating an extensive brand book and finally, designing a new modern website.</Text>
    </Grid>

    <Grid cols="2" ratio="16x9" collapseOnMobile>
      <Text>ONE A believes that the spaces we inhabit should combine smart technology with a sense of wellbeing. This belief provided us with a strong foundation on which we built the communication strategy — Visual Harmony. “Creating the perfect merge of minimalist design and smart technology, to bring visual harmony to your home.”</Text>
    </Grid>

    <Grid cols="2" ratio="16x9" collapseOnMobile>
      <Text>One of the websites we created for ONE A is essentially a digital showroom, allowing the user to experience how the product actually works, from how it is installed to how it sounds and feels. We achieved this by re-creating the products in 3D, capturing every subtle detail. Everything was captured in motion so that the products would animate and move while the user navigated the catalogues, adjusting the lighting, the materials and how the products moved simultaneously.</Text>
    </Grid>

    <Grid cols="2" ratio="16x9" collapseOnMobile>
      <Text>Using innovative coding, we developed features that allowed users to recreate their own environment, instantly pairing their needs with the products available. </Text>
    </Grid>

    <Grid ratio="16x9">
      <FullCaseVideo vimeoId="305454528" />
    </Grid>
  </Case>
)