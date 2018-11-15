import React, { Component } from 'react';
import { connect } from 'react-redux';
import Head from 'next/head';
import Footer from 'components/Footer';
import styled from 'styled-components';
import * as actions from 'store/actions';
import { meta } from 'utils/variables';

const Wrapper = styled.div`
  position: absolute;
  transition: top 0.5s;
  overflow: hidden;
  width: 100%;
`

@connect((store) => ({
  store,
}))
export default class DefaultPage extends Component {
  componentDidMount() {
    const { dispatch, whiteContent } = this.props;
    if (whiteContent) dispatch(actions.setNavColorWhite(true));
  }

  render() {
    const { children, title } = this.props;
    const { slider, fontsLoaded } = this.props.store;

    return (
      <Wrapper fontsLoaded={fontsLoaded} isScrollNSliding={slider.isScrollNSliding} className='default-page'>
        <Head>
          <title>{title} {meta.description}</title>
        </Head>
        {children}
        <Footer />
        <style jsx global>{`
          .fade-enter.default-page,
          .fade-enter-active.default-page,
          .fade-enter-done.default-page{
            z-index: 4;
          }

          .fade-enter.default-page {
            z-index: 4;
            top: 50vh;
          }

          .fade-enter-active.default-page {
            z-index: 4;
            top: 0;
          }

          .fade-exit-enter.default-page {
            z-index: 3;
          }

          .fade-exit-active.default-page {
            z-index: 3;
          }
        `}
        </style>
      </Wrapper>
    )
  }
}