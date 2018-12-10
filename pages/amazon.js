import React from 'react';
import Case from 'layout/components/Case';
import FullCaseVideo from 'components/Case/FullCaseVideo';
import Grid from 'components/Grid';
import Text from 'components/Case/Text';
import Image from 'components/Case/Image';

export default (props) => (
  <Case 
    isMobile={props.isMobile}
    title="Amazon"
    slug="amazon"
  >

    <Grid ratio="16x9">
      <FullCaseVideo vimeoId="112287843" />
    </Grid>

  </Case>
)