import React from 'react';
import dynamic from 'next/dynamic';
import styled from 'styled-components';
import Case from 'layout/components/Case';

const Work = dynamic(import('components/Work'));
const InstagramFeed = dynamic(import('components/InstagramFeed'));

const StyledWork = styled(Work)`
  margin-top: 200px;
`

export default (props) => (
  <Case isLanding whiteContent {...props}>
    <StyledWork reverseTextItems />
    
    <InstagramFeed />
  </Case>
)