import React from 'react';
import dynamic from 'next/dynamic';
import styled from 'styled-components';
import Case from 'layout/components/Case';

const CasesGrid = dynamic(import('components/CasesGrid'));
const InstagramFeed = dynamic(import('components/InstagramFeed'));

const StyledCasesGrid = styled(CasesGrid)`
  margin-top: 200px;
`

export default (props) => (
  <Case isLanding {...props}>
    <StyledCasesGrid onWhite />
    <InstagramFeed />
  </Case>
)