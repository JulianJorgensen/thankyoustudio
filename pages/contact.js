import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import styles from 'utils/styles';

const Wrapper = styled.div`
  ${styles.defaultWrapper};
`

@connect((store) => ({
  store,
}))
export default class Team extends React.Component {
  render () {
    return (
      <Wrapper>
        <h1>contact page</h1>
      </Wrapper>
    )
  }
}
