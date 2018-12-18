import React from 'react';
import dynamic from 'next/dynamic';
import styled from 'styled-components';
import Case from 'layout/components/Case';
import Text from 'components/Typography/Text';
import { breakpoint, LAYOUT } from 'utils/variables';

const CasesGrid = dynamic(import('components/CasesGrid'));
const InstagramFeed = dynamic(import('components/InstagramFeed'));

const StyledCasesGrid = styled(CasesGrid)`
`

const IntroText = styled(Text)`
  margin: 180px ${LAYOUT.MOBILE.EDGE_MARGIN} 60px;

  ${breakpoint.up('m')`
    margin: 350px ${LAYOUT.EDGE_MARGIN} 0;
    width: 40vw;
  `}
`

export default (props) => (
  <Case isLanding {...props}>
    <IntroText>
      <p>What started as three Scandinavian designers collaborating in 2006 has grown into a playground for multi-disciplinary creatives situated in the hearts of both Copenhagen and Reykjavík.</p>
      <p>We are now a team of innovative designers, engineers, strategists, researchers and creatives lead by our three fearless founders to build the new generation of meaningful brands, exceptional products and outstanding services.</p>
      <p>Our process starts with identifying a brand’s purpose, their true nature and why they exist. We then simplify the brand message we create in collaboration with the brand before amplifying it to the world. Through this method we build consistent brand systems that are both instantly recognisable and connected to contemporary culture.</p>
      <p>We continually challenge our clients to stand out amidst increasing clutter in the global market with a clear purpose and a true connection to consumers. We achieve success through ongoing collaboration and co-creation, partnering up with our clients to solve not only communication issues, but real world business issues. Together we triumph. Let’s talk.</p>
    </IntroText>
    <StyledCasesGrid onWhite />
    <InstagramFeed />
  </Case>
)