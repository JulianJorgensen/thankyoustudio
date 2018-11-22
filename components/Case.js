import React, { Component } from 'react';
import { connect } from 'react-redux';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import styled from 'styled-components';
import { scroller } from 'react-scroll'
import * as actions from 'store/actions';
import { EASINGS, META, TIMINGS } from 'utils/variables';
import media from 'utils/mediaQueries';
import Footer from 'components/Footer';

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  background-color: #fafafa;
  overflow: hidden;
`

// ${props => props.isPrimaryPage && props.usePrevAsNextSlide && `
// transition: opacity 0s, width 0.5s !important;
// transition-timing-function: ${EASINGS.EASE_IN_OUT_CUSTOM};
// transition-delay: 0s !important;
// z-index: 4;
// `}

const Content = styled.div`
  position: relative;
  width: 100%;

  img {
    max-width: 100%;
  }
`

@connect((store) => ({
  store,
}))
export default class Case extends Component {
  constructor() {
    super();

    this.handleOnScrollCtaClick = this.handleOnScrollCtaClick.bind(this);
  }

  componentDidMount() {
    // require polyfill for intersection observer only in client side
    require('intersection-observer');

    const { dispatch, whiteContent } = this.props;
    if (whiteContent) dispatch(actions.setNavColorWhite(true));
  }

  handleOnScrollCtaClick() {
    scroller.scrollTo('more', {
      duration: 800,
      smooth: "easeOutQuad",
    });
  }

  render() {
    const { children, store, title, ...props } = this.props;

    const renderTitle = () => {
      if (!title) return META.TITLE;
      return `${title} case by THANK YOU Studio. Design. Digital experiences. Connecting brands.`;
    }

    return (
      <Wrapper usePrevAsNextSlide={store.usePrevAsNextSlide} {...props} className="case-page">
        <Head>
          <title>{renderTitle()}</title>
        </Head>
        <Content id="more">
          {children}
        </Content>
        <Footer />
        <style jsx global>{`
          .fade-enter.case-page {
            position: fixed;
            width: 0;
            top: 0;
            right: 0;
          }

          .fade-enter-active.case-page {
            width: 100vw;
            transition: width ${TIMINGS.SLIDE_ITEM_WRAPPER} ${EASINGS.EASE_IN_OUT_CUSTOM};
            z-index: 99;
          }

          .fade-exit.case-page {
            transform: translateX(0px);
            transition: transform ${TIMINGS.SLIDE_ITEM_WRAPPER} ${EASINGS.EASE_IN_OUT_CUSTOM};
          }

          .fade-exit-active.case-page {
            transform: translateX(-100px);
          }
        `}
        </style>

      </Wrapper>
    )
  }
}