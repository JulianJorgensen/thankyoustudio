import React from 'react';
import styled from 'styled-components';
import { breakpoint, LAYOUT } from 'utils/variables';

const Locations = styled.div`
  display: flex;
  justify-content: center;
  opacity: 0.6;
  margin-bottom: 20px;

  ${breakpoint.up('m')`
    justify-content: flex-end;
    margin-bottom: 0;
  `}
`

const Location = styled.div`
  margin-right: 10px;

  &:last-child {
    margin-right: 0;
  }
`

export default () => (
  <Locations>
    <Location>Copenhagen</Location>
    <Location>Reykjavik</Location>
    <Location>San Francisco</Location>
  </Locations>
);