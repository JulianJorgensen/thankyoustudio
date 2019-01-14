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
    <Grid>
      <Text intro>
        <p>Our job was to present the 2015 Ferrari F1 car to the world. Building on the overwhelming existing respect for the brand, we were to bring the fans to the front row along with the press. We achieved this by creating a global, real-time, online event that was built up over a period of time, climaxing with the reveal of the F1 car. We created a four chapter film focusing on Ferrari’s heritage, the team and the car — all for the fans.</p>
      </Text>
    </Grid>

    <Grid ratio="16x9">
      <FullCaseVideo vimeoId="305773161" />
    </Grid>

    <Grid ratio="16x9">
      <FullCaseVideo vimeoId="146097470" />
    </Grid>

    <Grid cols="2" ratio="3x2">
      <Image lazy bgColor="#020202" src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/ferrari/images/ferrari-01.jpg" />
      <Image lazy bgColor="#A8A7E1" delay={100} src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/ferrari/images/ferrari-02.jpg" />
    </Grid>

    <Grid cols="2" ratio="3x2">
      <Image lazy bgColor="#D6BFB5" src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/ferrari/images/ferrari-03.jpg" />
      <Image lazy bgColor="#71090E" delay={100} src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/ferrari/images/ferrari-hublot.jpg" />
    </Grid>

    <Grid ratio="16x9">
      <Image lazy bgColor="#0A0907" src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/ferrari/images/ferrari-pirelli.jpg" />
    </Grid>

    <Grid cols="2" ratio="16x9">
      <Image lazy bgColor="#2E2924" src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/ferrari/images/ferrari-archive.jpg" />
      <Image lazy bgColor="#0A0603" delay={100} src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/ferrari/images/ferrari-mechanics.jpg" />
    </Grid>

    <Grid cols="2" collapseOnMobile>
      <Text topPadding bottomPadding>The four chapters, THE LEGACY, THE PEOPLE, THE SECRET and THE REVELATION, were released one by one in order to build tension and create emotional value for the potential reach of over 35 million fans until the precise moment of the launch of the full Ferrari website. Revealing the new car, interviews with drivers, tech specs and other PR material.</Text>
    </Grid>

    <Grid ratio="16x9">
      <FullCaseVideo vimeoId="305741089" />
    </Grid>

    <Grid cols="2" ratio="16x9">
      <Image lazy bgColor="#090506" src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/ferrari/images/ferrari-04.jpg" />
      <Image lazy bgColor="#4C080D" src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/ferrari/images/ferrari-vettel.jpg" />
    </Grid>

  </Case>
)