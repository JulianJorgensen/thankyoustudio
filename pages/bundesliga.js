import React from 'react';
import Case from 'layout/components/Case';
import FullCaseVideo from 'components/Case/FullCaseVideo';
import Grid from 'components/Grid';
import Text from 'components/Case/Text';
import Image from 'components/Case/Image';

export default (props) => (
  <Case 
    isMobile={props.isMobile}
    title="Bundesliga"
    slug="bundesliga"
  >
    <Grid ratio="16x9">
      <Image lazy delay={200} src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/bundesliga/images/bundesliga_stadium.jpg" />
    </Grid>

    <Grid ratio="16x9">
      <Image lazy delay={200} src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/bundesliga/images/bundesliga_main.jpg" />
    </Grid>

    <Grid ratio="16x9">
      <Image lazy delay={200} src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/bundesliga/images/bundesliga_players.jpg" />
    </Grid>

    <Grid ratio="16x9">
      <FullCaseVideo vimeoId="140289777" />
    </Grid>
  </Case>
)