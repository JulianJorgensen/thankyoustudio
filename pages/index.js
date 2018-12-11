import React from 'react';
import dynamic from 'next/dynamic';
import styled from 'styled-components';
import Case from 'layout/components/Case';
import Text from 'components/Typography/Text';
import { LAYOUT } from 'utils/variables';

const CasesGrid = dynamic(import('components/CasesGrid'));
const InstagramFeed = dynamic(import('components/InstagramFeed'));

const StyledCasesGrid = styled(CasesGrid)`
`

const IntroText = styled(Text)`
  margin: 350px ${LAYOUT.EDGE_MARGIN} 0;
  width: 40vw;
`

export default (props) => (
  <Case isLanding {...props}>
    <IntroText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis lacinia nisi. Nulla cursus non urna rhoncus blandit. Sed vel purus lorem. Donec eleifend vestibulum odio, non aliquet felis fermentum in.</IntroText>
    <StyledCasesGrid onWhite />
    <InstagramFeed />
  </Case>
)