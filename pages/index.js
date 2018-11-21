import React from 'react';
// import Work from 'components/Work';
import Case from 'components/Case';
import InstagramFeed from 'components/InstagramFeed';
import styled from 'styled-components';
import IdentifySimplifyAmplify from 'components/IdentifySimplifyAmplify';
import { LAYOUT } from 'utils/variables';
import media from 'utils/mediaQueries';


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

const InstagramSection = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  margin-top: 220px;
`

export default () => (
  <Case isPrimaryPage>
    <Section>
      <IdentifySimplifyAmplify />
    </Section>

    <Section>
      {/* <Work textColor="black" /> */}
    </Section>

    <InstagramSection>
      <h3>Work is fun!</h3>
      <InstagramFeed />
    </InstagramSection>

  </Case>
)