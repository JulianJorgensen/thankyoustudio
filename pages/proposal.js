import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RichText } from 'prismic-reactjs';
import styled from 'styled-components';
import Loader from 'components/Loader';
import { getContentByUid } from 'prismic';

const Wrapper = styled.div`
  color: black;
`

const Description = styled.div`
`

@connect()
export default class Proposal extends Component {
  constructor() {
    super();

    this.state = {};
  }

  static async getInitialProps ({ query: { uid } }) {
    const response = await getContentByUid('proposal', uid);
    const content = response.data;
    return { content };
  }

  render() {
    const { content } = this.props;

    return (
      <Wrapper>
        <h1>Proposal: {RichText.asText(content.title)}</h1>
        <Description>{RichText.render(content.description)}</Description>
      </Wrapper>
    );
  }
}
