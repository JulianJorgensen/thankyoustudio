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
  padding: 100px 0 40px;
  min-height: calc(100vh - 300px);
  opacity: 1;

  ${breakpoint.up('m')`
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
    const { slider, fontsLoaded, condenseSlider } = this.props.store;

    const renderPageTransitionStyles = () => {
      if (!isMobile) return (
      <style jsx global>{`
        .fade-enter.default-page,
        .fade-enter-active.default-page,
        .fade-enter-done.default-page{
          z-index: 6;
        }

        .fade-enter.default-page {
          position: fixed;
          transform: translateX(-100%);
        }

        .fade-enter-active.default-page {
          transform: translateX(0);
          transition: transform ${TIMINGS.DEFAULT_PAGE_WRAPPER} ease-out;
        }

        .fade-enter.default-page .content {
          transform: translateX(-15%);
          opacity: 0;
        }

        .fade-enter-active.default-page .content,
        .fade-enter-done.default-page .content{
          transform: translateX(0);
          opacity: 1;
          transition: transform 0.8s ease-out, opacity 0.4s ease-out 0.4s;
        }

        .fade-exit-enter.default-page,
        .fade-exit-active.default-page {
          z-index: 3;
        }

        .fade-exit-enter.default-page.slider-not-condensed {
          transform: translateX(0%);
        }

        .fade-exit-active.default-page.slider-not-condensed {
          transform: translateX(-100%);
          transition: transform ${TIMINGS.DEFAULT_PAGE_WRAPPER} ease-out;          
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
        className={`default-page ${!condenseSlider && 'slider-not-condensed'}`}
      >
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