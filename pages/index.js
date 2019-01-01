import React from 'react';
import { RichText } from 'prismic-reactjs';
import dynamic from 'next/dynamic';
import styled from 'styled-components';
import Case from 'layout/components/Case';
import Grid from 'components/Grid';
import Text from 'components/Case/Text';
import AboutCopy from 'components/AboutCopy';
import { breakpoint, LAYOUT } from 'utils/variables';
import Loader from 'components/Loader';

const Reel = dynamic(import('components/Reel'), {
  loading: () => <Loader />
});
const CasesGrid = dynamic(import('components/CasesGrid'), {
  loading: () => <Loader />
});
const InstagramFeed = dynamic(import('components/InstagramFeed'), {
  loading: () => <Loader />
});

const StyledCasesGrid = styled(CasesGrid)`
`

export default (props) => (
  <Case isLanding {...props}>
    <Reel />
    <Grid>
      <Text intro>
        {RichText.render(props.content.about.teaser)}
      </Text>
    </Grid>

    <StyledCasesGrid  isMobile={props.isMobile} onWhite />
    <InstagramFeed />
  </Case>
)