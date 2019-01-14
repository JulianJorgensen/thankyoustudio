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
    <Grid>
      <Text intro>
        <p>We were to develop a graphic theme and film for the Bundesliga Season Opening. Presenting all 18 football clubs by their club logos and game footage from the previous season. We were also tasked with designing banners within the same design format and produce a soundtrack to support the trailer for the opening ceremony performed on the field.</p>
      </Text>
    </Grid>

    <Grid ratio="16x9">
      <Image lazy bgColor="#30393C" src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/bundesliga/images/bundesliga_stadium.jpg" />
    </Grid>

    <Grid ratio="16x9">
      <FullCaseVideo vimeoId="140289777" />
    </Grid>

    <Grid cols="2" collapseOnMobile>
      <Text topPadding bottomPadding>
        <p>Bundesliga, the German professional association football league, has the highest average stadium attendance in the world but to give TV viewer at home the feeling of “being there”, we drew inspiration from the huge LED screens at the stadium.</p>
        <p>Based on this simple idea, we created a tight yet dynamic graphic framework for the opening ceremony, which was broadcasted worldwide to 200 million people.</p>
      </Text>
    </Grid>

    <Grid ratio="16x9">
      <Image lazy bgColor="#fafafa" src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/bundesliga/images/bundesliga_players.jpg" />
    </Grid>

  </Case>
)