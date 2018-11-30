import React from 'react';
import dynamic from 'next/dynamic';
import styled from 'styled-components';
import Case from 'layout/components/Case';

const WorkGrid = dynamic(import('components/WorkGrid'));
const InstagramFeed = dynamic(import('components/InstagramFeed'));

const StyledWorkGrid = styled(WorkGrid)`
  margin-top: 200px;
`

export default (props) => (
  <Case isLanding {...props}>
    <StyledWorkGrid dark reverseTextItems />

    <InstagramFeed />
  </Case>
)