import React from 'react';
import styled from 'styled-components';
import Logo from 'components/Logo';

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 100%;
  padding: 200px 0;
  color: black;
  overflow: hidden;
`

const StyledLogo = styled(Logo)`
  font-size: 140px;
`

export default () => (
  <Wrapper>
    <StyledLogo />
  </Wrapper>
);
