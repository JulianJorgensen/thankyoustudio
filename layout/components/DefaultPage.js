import React, { Component } from 'react';
import { connect } from 'react-redux';
import Head from 'next/head';
import styled from 'styled-components';
import * as actions from 'store/actions';
import Footer from 'layout/components/Footer';
import media from 'utils/mediaQueries';
import { breakpoint, LAYOUT, META, TIMINGS } from 'utils/variables';

const Wrapper = styled.div`
  position: absolute;
  z-index: 7;
  overflow: hidden;
  width: 100%;
  background-color: white;
  color: black;

  ${props => props.dark && `
    background-color: black;
    color: white;
  `}
`

const Content = styled.div`
  padding: 100px ${props => props.withPadding ? LAYOUT.MOBILE.EDGE_MARGIN : '0'} 40px;
  min-height: calc(100vh - 300px);
  opacity: 1;

  ${breakpoint.up('m')`
    padding: 120px ${props => props.withPadding ? LAYOUT.EDGE_MARGIN : '0'};
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
    const { children, title } = this.props;
    const { slider, fontsLoaded, condenseSlider, isMobile } = this.props.store;

    const renderPageTransitionStyles = () => {
      return (
      <style jsx global>{`
        .fade-enter.default-page,
        .fade-enter-active.default-page,
        .fade-enter-done.default-page{
          z-index: 7;
        }

        .fade-enter.default-page {
          position: fixed;
          transform: translateX(-100%);
        }

        .fade-enter-active.default-page {
          transform: translateX(0);
          transition: transform ${TIMINGS.DEFAULT_PAGE_WRAPPER} ease-out;
        }

        .fade-exit-enter.default-page,
        .fade-exit-active.default-page {
          z-index: 6;
        }

        .fade-exit-enter.default-page.slider-is-active {
          transform: translateX(0%);
          z-index: 6;
        }

        .fade-exit-active.default-page.slider-is-active {
          transform: translateX(-100%);
          transition: transform ${TIMINGS.DEFAULT_PAGE_WRAPPER} ease-in;
          z-index: 6;
        }

        // inner content transitions styles below

        .fade-enter-active.default-page .content,
        .fade-enter-done.default-page .content {
          transition: transform 0.8s ease-out, opacity 0.3s ease-out;
        }

        .fade-exit-active.default-page .content,
        .fade-exit-done.default-page .content {
          transition: transform 0.3s ease-in, opacity 0.2s ease-in;
        }

        .fade-enter.default-page .content {
          transform: translateX(-5%);
          opacity: 0;
        }

        .fade-enter-active.default-page .content,
        .fade-enter-done.default-page .content {
          transform: translateX(0);
          opacity: 1;
          transition-delay: 0.3s;
        }

        .fade-exit.default-page .content {
          opacity: 1;
        }

        .fade-exit-active.default-page .content,
        .fade-exit-done.default-page .content {
          opacity: 0;
          transition-duration: 0.2s;
        }
      `}
      </style>
      )
    }

    return (
      <Wrapper
        fontsLoaded={fontsLoaded}
        isScrollNSliding={slider.isScrollNSliding}
        dark={this.props.dark}
        className={`default-page ${!condenseSlider && 'slider-is-active'}`}
      >
        <Head>
          <title>{title} {META.DESCRIPTION}</title>
        </Head>
        <Content className="content" withPadding={this.props.withPadding}>
          {children}
        </Content>
        <Footer />
        {!isMobile && renderPageTransitionStyles()}
      </Wrapper>
    )
  }
}