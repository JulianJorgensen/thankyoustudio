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

export default (props) => (
  <Case 
    isMobile={props.isMobile}
    title="Copenhagen Distillery"
    subtitle="Design. Experiences."
    imageSrc="http://cdn.thankyoustudio.com.s3.amazonaws.com/images/copenhagen-cover.jpg"
  >
    <Header>
      <Title>Something about copenhagen distillery</Title>
      <Lead>Design thinking is at the core of everything we do. The result is always fresh, vibrant and relevant.</Lead>
    </Header>

    <Header black>
      <Title>Some more of the case</Title>
      <Lead>Design thinking is at the core of everything we do. The result is always fresh, vibrant and relevant.</Lead>
    </Header>

    <Header>
      <Title>Copenhagen</Title>
      <Lead>Design thinking is at the core of everything we do. The result is always fresh, vibrant and relevant.</Lead>
    </Header>

    <Header>
      <Title>Disterlley...</Title>
      <Lead>Design thinking is at the core of everything we do. The result is always fresh, vibrant and relevant.</Lead>
    </Header>
  </Case>
)