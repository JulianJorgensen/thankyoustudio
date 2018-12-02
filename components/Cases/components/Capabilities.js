import React from 'react';
import styled from 'styled-components';
import LazyShow from 'components/lazyShow';
import { EASINGS, breakpoint, LAYOUT } from 'utils/variables';

const Wrapper = styled(LazyShow)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  cursor: pointer;
  height: 100%;
  padding: 10px;
  grid-column-end: span 2;

  ${breakpoint.up('m')`
    grid-column-end: span 1;
    grid-row-end: span 2;
  `}

  &:hover {
    background-color: white;
    color: black;
  }

  ${props => props.reverse && `
    color: black;
    &:hover {
      background-color: black;
      color: white;
    }
  `}
`

const Header = styled.h3`
  font-size: 40px;
  line-height: 40px;
  padding-right: 32%;
  text-transform: uppercase;

  ${props => props.whiteBg && `
    background-color: white;
    color: black;
  `}

  ${breakpoint.up('l')`
    font-size: 70px;
    line-height: 70px;
  `}
`

const Capabilities = styled.ul`
  display: flex;
  flex-wrap: wrap;
  max-width: 60%;

  li {
    border: 1px solid white;
    color: white;

    ${Wrapper}:hover & {
      border-color: black;
      color: black;
    }

    ${props => props.reverse && `
      border-color: black;
      color: black;

      ${Wrapper}:hover & {
        border-color: white;
        color: white;
      }
    `}  
  }
`

const Capability = styled.li`
  margin-right: 5px;
  margin-top: 5px;
  padding: 2px 4px;

  ${breakpoint.up('m')`
    padding: 4px 8px;
  `}
`

export default ({ reverse }) => (
<Wrapper reverse={reverse}>
  <Header>Capabilities</Header>
  <Capabilities reverse={reverse}>
    <Capability>Strategy</Capability>
    <Capability>Brand</Capability>
    <Capability>Design</Capability>
    <Capability>Web development</Capability>
    <Capability>Video + Photography</Capability>
    <Capability>Content development</Capability>
  </Capabilities>
</Wrapper>
)
