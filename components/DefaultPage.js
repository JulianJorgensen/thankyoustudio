import React, { Component } from 'react';
import { connect } from 'react-redux';
import Head from 'next/head';
import styled from 'styled-components';
import * as actions from 'store/actions';
import Footer from 'components/Footer';
import media from 'utils/mediaQueries';
import { LAYOUT, META, TIMINGS } from 'utils/variables';

const Wrapper = styled.div`
  position: absolute;
  overflow: hidden;
  width: 100%;
`

const Content = styled.div`
  padding: 200px 0 100px;
  background-color: black;
  color: white;
  min-height: 100vh;
  opacity: 1;

  ${media.tablet`
    padding: 200px ${LAYOUT.EDGE_MARGIN};
  `}
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
    const { children, title, isMobile } = this.props;
    const { slider, fontsLoaded } = this.props.store;

    const renderPageTransitionStyles = () => {
      if (!isMobile) return (
      <style jsx global>{`
        .fade-enter.default-page,
        .fade-enter-active.default-page,
        .fade-enter-done.default-page{
          z-index: 4;
          transition: top ${TIMINGS.DEFAULT_PAGE_WRAPPER};
        }

        .fade-enter.default-page {
          position: fixed;
          z-index: 4;
          top: 50vh;
        }

        .fade-enter-active.default-page {
          z-index: 4;
          top: 0;
        }

        .fade-enter.default-page .content {
          opacity: 0;
        }

        .fade-enter-active.default-page .content,
        .fade-enter-done.default-page .content{
          opacity: 1;
          transition: opacity ${TIMINGS.DEFAULT_PAGE_WRAPPER} ease-in;
        }

        .fade-exit-enter.default-page {
          z-index: 3;
        }

        .fade-exit.default-page .content {
          opacity: 0;
        }

        .fade-exit-active.default-page {
          z-index: 3;
        }

      `}
      </style>
      )
    }

    return (
      <Wrapper fontsLoaded={fontsLoaded} isScrollNSliding={slider.isScrollNSliding} className='default-page'>
        <Head>
          <title>{title} {META.DESCRIPTION}</title>
        </Head>
        <Content className="content">
          {children}
        </Content>
        <Footer />
        {renderPageTransitionStyles()}
      </Wrapper>
    )
  }
}