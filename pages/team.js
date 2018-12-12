import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const Wrapper = styled.div`
  ${styles.defaultWrapper};
  background-color: black;
  color: white;
`

@connect((store) => ({
  store,
}))
export default class Team extends React.Component {
  render () {
    return (
      <Wrapper>
        <h1>team page</h1>
      </Wrapper>
    )
  }
}
