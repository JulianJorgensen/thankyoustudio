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
  background: url('//cdn.thankyoustudio.com/cases/ferrari/images/scuderia_ferrari_bg.jpg') center center no-repeat;
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
      <FullCaseVideo vimeoId="305773161" />
    </Grid>

    <Grid ratio="16x9">
      <FullCaseVideo vimeoId="146097470" />
    </Grid>

    <Grid cols="2" ratio="3x2">
      <Image lazy delay={200} src="//cdn.thankyoustudio.com/cases/ferrari/images/ferrari-01.jpg" />
      <Image lazy delay={200} src="//cdn.thankyoustudio.com/cases/ferrari/images/ferrari-02.jpg" />
    </Grid>

    <Grid cols="2" ratio="3x2">
      <Image lazy delay={200} src="//cdn.thankyoustudio.com/cases/ferrari/images/ferrari-03.jpg" />
      <Image lazy delay={200} src="//cdn.thankyoustudio.com/cases/ferrari/images/ferrari-hublot.jpg" />
    </Grid>

    <Grid ratio="16x9">
      <Image lazy delay={200} src="//cdn.thankyoustudio.com/cases/ferrari/images/ferrari-pirelli.jpg" />
    </Grid>

    <Grid cols="2" ratio="16x9">
      <Image lazy delay={200} src="//cdn.thankyoustudio.com/cases/ferrari/images/ferrari-archive.jpg" />
      <Image lazy delay={200} src="//cdn.thankyoustudio.com/cases/ferrari/images/ferrari-mechanics.jpg" />
    </Grid>

    <Grid cols="2" collapseOnMobile>
      <Text topPadding bottomPadding>The four chapters, THE LEGACY, THE PEOPLE, THE SECRET and THE REVELATION, were released one by one in order to build tension and create emotional value for the potential reach of over 35 million fans until the precise moment of the launch of the full Ferrari website. Revealing the new car, interviews with drivers, tech specs and other PR material.</Text>
    </Grid>

    <Grid ratio="16x9">
      <FullCaseVideo vimeoId="305741089" />
    </Grid>

    <Grid cols="2" ratio="16x9">
      <Image lazy delay={200} src="//cdn.thankyoustudio.com/cases/ferrari/images/ferrari-04.jpg" />
      <Image lazy delay={200} src="//cdn.thankyoustudio.com/cases/ferrari/images/ferrari-vettel.jpg" />
    </Grid>

  </Case>
)