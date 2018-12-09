import React from 'react';
import styled from 'styled-components';
import Case from 'layout/components/Case';
import FullCaseVideo from 'components/Case/FullCaseVideo';

export default (props) => (
  <Case
    isMobile={props.isMobile}
    title="Swatch Irony Chrono"
    slug="swatch-chrono"
  >
    <FullCaseVideo vimeoId="89115423" />
  </Case>
)