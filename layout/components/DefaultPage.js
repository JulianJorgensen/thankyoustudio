import React, { Component } from 'react';
import { connect } from 'react-redux';
import Head from 'next/head';
import styled from 'styled-components';
import * as actions from 'store/actions';
import Footer from 'layout/components/Footer';
import media from 'utils/mediaQueries';
import { LAYOUT, META, TIMINGS } from 'utils/variables';

const Wrapper = styled.div`
  position: absolute;
  overflow: hidden;
  width: 100%;
`

const Content = styled.div`
  padding: 100px 0 100px;
  background-color: white;
  color: black;
  min-height: calc(100vh - 300px);
  opacity: 1;

  ${props => props.dark && `
    background-color: black;
    color: white;
  `}

  ${media.tablet`
    padding: 120px 0;
  `}
`

@connect((store) => ({
  store,
}))
export default class DefaultPage extends Component {
  componentDidMount() {
    const { dispatch, dark } = this.props;

    if (dark) {
      dispatch(actions.setNavColorWhite(true));
    } else {
      dispatch(actions.setNavColorWhite(false));
    }
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
      <Wrapper
        fontsLoaded={fontsLoaded}
        isScrollNSliding={slider.isScrollNSliding}
        className='default-page'
      >
        <Head>
          <title>{title} {META.DESCRIPTION}</title>
        </Head>
        <Content className="content" dark={this.props.dark}>
          {children}
        </Content>
        <Footer />
        {renderPageTransitionStyles()}
      </Wrapper>
    )
  }
}