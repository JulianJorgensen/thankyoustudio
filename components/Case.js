import React, { Component } from 'react';
import { connect } from 'react-redux';
import Head from 'next/head';
import styled from 'styled-components';
import { scroller } from 'react-scroll'
import { EASINGS, META, TIMINGS } from 'utils/variables';
import media from 'utils/mediaQueries';
import Footer from 'components/Footer';

const Wrapper = styled.div`
  position: absolute;
  top: 100vw;
  width: 100%;
  background-color: #fafafa;
  transition: transform ${TIMINGS.CASE_WRAPPER};

  ${media.tablet`
    top: 100vh;
  `}
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

  handleOnScrollCtaClick() {
    scroller.scrollTo('more', {
      duration: 800,
      smooth: "easeOutQuad",
    });
  }

  render() {
    const { children, store, ...props } = this.props;

    const renderHead = () => {
      if (props.isPrimaryPage) return;

      let slug;
      if (store.activeSlide.slug) {
        slug = store.activeSlide.slug;
      } else {
        slug = "";
      }

      return (
        <Head>
          <title>Case {slug} - {META.TITLE}</title>
        </Head>
      )
    }

    return (
      <Wrapper usePrevAsNextSlide={store.usePrevAsNextSlide} {...props} className="case-page">
        {renderHead()}
        <Content id="more">
          {children}
        </Content>
        <Footer />
        <style jsx global>{`
          .fade-exit.case-page {
            transform: translateX(0px);
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