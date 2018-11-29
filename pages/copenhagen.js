import React from 'react';
import styled from 'styled-components';
import Case from 'layout/components/Case';
import Grid from 'components/Case/Grid';
import FullCaseVideo from 'components/Case/FullCaseVideo';
import { breakpoint } from 'utils/variables';

const LogoSection = styled.div`
  display: flex;
  justify-content: center;
  background-color: white;
  padding: 200px 0;
`

const Image = styled.img`
`

const Text = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  font-weight: bold;
  padding: 20px;

  ${breakpoint.up('m')`
    padding: 0;
    font-size: 40px;
  `}
`

const IntroText = styled(Text)`
  display: block;
  align-items: flex-end;

  ${breakpoint.up('m')`
    padding: 290px 40px 10px;
    column-count: 2;
    column-gap: 60px;
  `}
`

export default (props) => (
  <Case 
    isMobile={props.isMobile}
    title="Copenhagen Distillery"
    subtitle="Design. Experiences."
    imageSrc="http://cdn.thankyoustudio.com.s3.amazonaws.com/images/copenhagen-cover.jpg"
  >
    <IntroText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar mi in nulla placerat, id ultricies leo fermentum. Proin in ex urna. Proin sodales id risus ac eleifend. Pellentesque habitant morbi tristique senectus et netus et malesuada fames.</IntroText>

    <FullCaseVideo vimeoId="262509870" />

    <Grid cols="2" ratio="16x9">
      <Image src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/copenhagen-distillery/images/copenhagen_distillery_henrik.jpg" />
      <Image src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/copenhagen-distillery/images/copenhagen_distillery_brygge.jpg" />
    </Grid>

    <Grid cols="2" ratio="16x9">
      <Image src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/copenhagen-distillery/images/copenhagen_distillery_brygge_02.jpg" />
      <Image src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/copenhagen-distillery/images/copenhagen_distillery_henrik_02.jpg" />
    </Grid>

    <Grid ratio="4x3">
      <Image src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/copenhagen-distillery/images/copenhagen_distillery_oak_barrel.jpg" />
    </Grid>

    <Grid cols="2" ratio="16x9">
      <Text></Text>
      <Text>Building a brand from the ground up</Text>
    </Grid>

    <Grid ratio="4x3">
      <Image src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/copenhagen-distillery/images/copenhagen_distillery_oak_gin_black.jpg" />
    </Grid>

    <Grid ratio="4x3">
      <Image src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/copenhagen-distillery/images/copenhagen_distillery_gins_lineup.jpg" />
    </Grid>

    <Grid ratio="4x3">
      <Image src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/copenhagen-distillery/images/copenhagen_distillery_gin_amanda_01.jpg" />
    </Grid>

    <Grid ratio="4x3" cols="2">
      <Image src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/copenhagen-distillery/images/copenhagen_distillery_gin_amanda_02.jpg" />
      <Image src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/copenhagen-distillery/images/copenhagen_distillery_gin_amanda_03.jpg" />
    </Grid>

    <Grid cols="2" ratio="16x9">
      <Text></Text>
      <Text>Building a brand from the ground up</Text>
    </Grid>

    <Grid ratio="4x3">
      <Image src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/copenhagen-distillery/images/copenhagen_distillery_team_01.jpg" />
    </Grid>

    <Grid ratio="4x3" cols="2">
      <Image src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/copenhagen-distillery/images/copenhagen_distillery_team_02.jpg" />
      <Image src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/copenhagen-distillery/images/copenhagen_distillery_team_03.jpg" />
    </Grid>

    <Grid ratio="3x4">
      <Image src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/copenhagen-distillery/images/copenhagen_distillery_aquavit.jpg" />
    </Grid>

    <Grid ratio="4x3">
      <Image src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/copenhagen-distillery/images/copenhagen_distillery_snaps_lineup.jpg" />
    </Grid>

  </Case>
)