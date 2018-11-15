import React from 'react';
import styled from 'styled-components';
import Case from 'components/Case';

const Header = styled.div`
  padding: 300px 50vw 300px 80px;
  width: 100%;

  ${props => props.black && `
    background-color: black;
    color: white;
  `}
`

const Title = styled.h2`
  font-size: 70px;
`

const Lead = styled.div`
  font-size: 25px;
`

export default () => (
  <Case>
    <Header>
      <Title>Onea is...</Title>
      <Lead>Design thinking is at the core of everything we do. The result is always fresh, vibrant and relevant.</Lead>
    </Header>

    <Header>
      <Title>Some more of the case</Title>
      <Lead>Design thinking is at the core of everything we do. The result is always fresh, vibrant and relevant.</Lead>
    </Header>

    <Header black>
      <Title>Onea</Title>
      <Lead>Design thinking is at the core of everything we do. The result is always fresh, vibrant and relevant.</Lead>
    </Header>

    <Header>
      <Title>Onea...</Title>
      <Lead>Design thinking is at the core of everything we do. The result is always fresh, vibrant and relevant.</Lead>
    </Header>
  </Case>
)