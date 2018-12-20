import React from 'react';
import dynamic from 'next/dynamic';
import styled from 'styled-components';
import Case from 'layout/components/Case';
import Text from 'components/Typography/Text';
import AboutCopy from 'components/AboutCopy';
import { breakpoint, LAYOUT } from 'utils/variables';

const CasesGrid = dynamic(import('components/CasesGrid'));
const InstagramFeed = dynamic(import('components/InstagramFeed'));

const StyledCasesGrid = styled(CasesGrid)`
`

const StyledAboutCopy = styled(AboutCopy)`
  margin: 230px ${LAYOUT.MOBILE.EDGE_MARGIN} 60px;

  ${breakpoint.up('m')`
    margin: 310px ${LAYOUT.EDGE_MARGIN} 0;
  `}
`

export default (props) => (
  <Case isLanding {...props}>
    <StyledAboutCopy />
    <StyledCasesGrid onWhite />
    <InstagramFeed />
  </Case>
)