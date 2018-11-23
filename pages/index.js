import React from 'react';
import dynamic from 'next/dynamic'
import Case from 'components/Case';
import styled from 'styled-components';
import { LAYOUT } from 'utils/variables';
import media from 'utils/mediaQueries';
import IdentifySimplifyAmplify from 'components/IdentifySimplifyAmplify';

const Work = dynamic(import('components/Work'));
const InstagramFeed = dynamic(import('components/InstagramFeed'));

const Section = styled.div`
  padding: 100px ${LAYOUT.MOBILE.EDGE_MARGIN};

  ${props => props.black && `
    background-color: black;
    color: white;
  `}

  ${media.tablet`
    padding: 200px 40px;
  `}
`

const Header = styled.div`
`

const Title = styled.h2`
  font-size: 70px;
`

const Lead = styled.div`
  font-size: 25px;
`

export default (props) => (
  <Case isPrimaryPage whiteContent {...props}>
    {/* <Section>
      <IdentifySimplifyAmplify />
    </Section> */}
    
    {/* <Work textColor="black" /> */}

    {/* <InstagramFeed /> */}
  </Case>
)