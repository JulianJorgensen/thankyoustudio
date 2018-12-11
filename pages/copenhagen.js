import React from 'react';
import styled from 'styled-components';
import Case from 'layout/components/Case';
import Grid from 'components/Grid';
import FullCaseVideo from 'components/Case/FullCaseVideo';
import Text from 'components/Case/Text';
import Image from 'components/Case/Image';

export default (props) => (
  <Case
    isMobile={props.isMobile}
    title="Copenhagen Distillery"
    slug="copenhagen"
  >
    <Grid ratio="16x9">
      <FullCaseVideo vimeoId="262509870" />
    </Grid>

    <Grid cols="2" ratio="16x9">
      <Image lazy delay={200} src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/copenhagen-distillery/images/copenhagen_distillery_henrik.jpg" />
      <Image lazy delay={300} src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/copenhagen-distillery/images/copenhagen_distillery_brygge.jpg" />
    </Grid>

    <Grid cols="2" ratio="16x9">
      <Image lazy delay={200} src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/copenhagen-distillery/images/copenhagen_distillery_brygge_02.jpg" />
      <Image lazy delay={300} src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/copenhagen-distillery/images/copenhagen_distillery_henrik_02.jpg" />
    </Grid>

    <Grid ratio="16x9">
      <Image lazy delay={200} src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/copenhagen-distillery/images/copenhagen_distillery_oak_barrel.jpg" />
    </Grid>

    <Grid cols="2" collapseOnMobile>
      <Text topPadding bottomPadding columnStart="2">Inside the rustic walls of the distillery itself, we built a custom distillation lab dubbed ‘The Black Box’— where all the magic happens. We put the heart of innovation inside the walls of historic stones. A monolith of the future housed within the past, The Black Box is a representation of our design language where tradition and innovation merge.</Text>
    </Grid>

    <Grid ratio="16x9">
      <Image lazy delay={200} src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/copenhagen-distillery/images/copenhagen_distillery_oak_gin_black.jpg" />
    </Grid>

    <Grid ratio="16x9">
      <Image lazy delay={200} src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/copenhagen-distillery/images/copenhagen_distillery_gins_lineup.jpg" />
    </Grid>

    <Grid ratio="16x9">
      <Image lazy delay={200} src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/copenhagen-distillery/images/copenhagen_distillery_gin_amanda_01.jpg" />
    </Grid>

    <Grid ratio="4x3" cols="2">
      <Image lazy delay={200} src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/copenhagen-distillery/images/copenhagen_distillery_gin_amanda_02.jpg" />
      <Image lazy delay={300} src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/copenhagen-distillery/images/copenhagen_distillery_gin_amanda_03.jpg" />
    </Grid>

    <Grid cols="2" collapseOnMobile>
      <Text topPadding bottomPadding columnStart="2">The blend of modern and handmade expresses the core of Copenhagen Distillery. The philosophy reaches beyond the visual identity, driving the brand, the culture and the product. You can sense our philosophy in every bottle: each one is unique, numbered and signed by the master distiller.</Text>
    </Grid>

    <Grid ratio="16x9">
      <Image lazy delay={200} src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/copenhagen-distillery/images/copenhagen_distillery_team_01.jpg" />
    </Grid>

    <Grid ratio="4x3" cols="2">
      <Image lazy delay={200} src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/copenhagen-distillery/images/copenhagen_distillery_team_02.jpg" />
      <Image lazy delay={300} src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/copenhagen-distillery/images/copenhagen_distillery_team_03.jpg" />
    </Grid>

    <Grid ratio="16x9">
      <Image lazy delay={200} src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/copenhagen-distillery/images/copenhagen_distillery_aquavit.jpg" />
    </Grid>

    <Grid ratio="16x9">
      <Image lazy delay={200} src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/copenhagen-distillery/images/copenhagen_distillery_snaps_lineup.jpg" />
    </Grid>

    <Grid ratio="3x2">
      <Image lazy delay={200} src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/copenhagen-distillery/images/copenhagen-distillery_behind.jpg" />
    </Grid>
  </Case>
)