import React from 'react';
import styled from 'styled-components';
import DefaultPage from 'components/DefaultPage';
import Locations from 'components/Locations';
import { LAYOUT } from 'utils/variables';

const Wrapper = styled.div`
  width: ${LAYOUT.CONTAINER_WIDTH};
  margin: 0 auto;
`

const StyledLocations = styled(Locations)`
  margin-bottom: 100px;
`

export default (props) => (
  <DefaultPage whiteContent title="Contact" {...props}>
    <Wrapper>
      <StyledLocations />

      <h2>Thinking of joining?</h2>
      <p>We collaborate with smart, creative makers.<br />Your ideas and energy shape our culture and you’ll thrive in an environment that values great work and having fun.<br /><a href="mailto:jobs@thankyoustudio.com">jobs@thankyoustudio.com</a></p>
    </Wrapper>
  </DefaultPage>
)