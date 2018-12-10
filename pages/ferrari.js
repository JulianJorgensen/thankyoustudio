import React from 'react';
import styled from 'styled-components';
import Case from 'layout/components/Case';
import FullCaseVideo from 'components/Case/FullCaseVideo';
import Grid from 'components/Grid';
import Text from 'components/Case/Text';
import Image from 'components/Case/Image';

const Scuderia = styled.div`
  padding: 150px;
  display: flex;
  justify-content: center;
  background: url('http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/ferrari/images/scuderia_ferrari_bg.jpg') center center no-repeat;
  background-size: cover;
`

const FerrariWebcast = styled.div`
  padding: 150px;
  display: flex;
  justify-content: center;
`


export default (props) => (
  <Case
    isMobile={props.isMobile}
    title="Ferrari"
    slug="ferrari"
  >
    <Grid ratio="16x9">
      <FullCaseVideo vimeoId="146097470" />
    </Grid>

    <Grid cols="2" ratio="4x3">
      <Image lazy delay={200} src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/ferrari/images/ferrari-01.jpg" />
      <Image lazy delay={200} src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/ferrari/images/ferrari-02.jpg" />
    </Grid>

    <Grid cols="2" ratio="4x3">
      <Image lazy delay={200} src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/ferrari/images/ferrari-03.jpg" />
      <Image lazy delay={200} src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/ferrari/images/ferrari-hublot.jpg" />
    </Grid>

    <Grid ratio="16x9">
      <Image lazy delay={200} src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/ferrari/images/ferrari-pirelli.jpg" />
    </Grid>

    <Grid cols="2" ratio="16x9">
      <Image lazy delay={200} src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/ferrari/images/ferrari-archive.jpg" />
      <Image lazy delay={200} src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/ferrari/images/ferrari-mechanics.jpg" />
    </Grid>

    <Grid cols="2" ratio="16x9" collapseOnMobile>
      <Text>A film about the heritage, the team, the car – all for the fans! Launch the film in chapters to tease for the online live launch and simultaneously build up the site to a fully fledged experience site.</Text>
    </Grid>

    <Grid ratio="16x9">
      <FullCaseVideo vimeoId="146097470" />
    </Grid>

    <Grid ratio="16x9">
      <FullCaseVideo vimeoId="146097470" />
    </Grid>

    <Grid cols="2" ratio="16x9">
      <Image lazy delay={200} src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/ferrari/images/ferrari-04.jpg" />
      <Image lazy delay={200} src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/ferrari/images/ferrari-vettel.jpg" />
    </Grid>

  </Case>
)