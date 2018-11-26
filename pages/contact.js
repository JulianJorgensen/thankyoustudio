import React from 'react';
import styled from 'styled-components';
import DefaultPage from 'components/DefaultPage';
import Locations from 'components/Locations';
import { breakpoint, LAYOUT } from 'utils/variables';

const Content = styled.div`
  padding: 0 ${LAYOUT.MOBILE.EDGE_MARGIN};

  ${breakpoint.up('m')`
    width: ${LAYOUT.CONTAINER_WIDTH};
    max-width: 100%;
  `}
`

const StyledLocations = styled(Locations)`
  margin-bottom: 100px;
`

export default (props) => (
  <DefaultPage whiteContent title="Contact" {...props}>
    <Content>
      <StyledLocations />

      <h3>Thinking of joining?</h3>
      <p>We collaborate with smart, creative makers.<br />Your ideas and energy shape our culture and you’ll thrive in an environment that values great work and having fun.<br /><a href="mailto:jobs@thankyoustudio.com">jobs@thankyoustudio.com</a></p>
    </Content>
  </DefaultPage>
)