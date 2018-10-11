import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import styles from 'utils/styles';
import { switchToLightContent } from 'store/actions';

const Wrapper = styled.div`
  ${styles.defaultWrapper};
  background-color: black;
  color: white;
`

@connect((store) => ({
  store,
}))
export default class Team extends React.Component {
  componentWillMount() {
    this.props.dispatch(switchToLightContent());
  }

  render () {
    return (
      <Wrapper>
        <h1>team page</h1>
      </Wrapper>
    )
  }
}
