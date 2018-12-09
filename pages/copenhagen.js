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

    <Grid cols="2" ratio="16x9" collapseOnMobile>
      <Text columnStart="2">Building a brand from the ground up</Text>
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

    <Grid cols="2" ratio="16x9" collapseOnMobile>
      <Text columnStart="2">Building a brand from the ground up</Text>
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
  </Case>
)