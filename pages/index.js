import React from 'react';
import dynamic from 'next/dynamic';
import styled from 'styled-components';
import Case from 'layout/components/Case';

const Cases = dynamic(import('components/Cases'));
const InstagramFeed = dynamic(import('components/InstagramFeed'));

const StyledCases = styled(Cases)`
  margin-top: 200px;
`

export default (props) => (
  <Case isLanding {...props}>
    <StyledCases dark reverseTextItems />

    <InstagramFeed />
  </Case>
)