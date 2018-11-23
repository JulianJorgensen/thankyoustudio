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

const MobileHero = dynamic(import('components/MobileHero'));

const Wrapper = styled.div`
  position: absolute;
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
  componentDidMount() {
    // require polyfill for intersection observer only in client side
    require('intersection-observer');

    const { dispatch, whiteContent } = this.props;
    if (whiteContent) dispatch(actions.setNavColorWhite(true));
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
        {!props.isMobile ? <MobileHero /> : ''}
        <Content>
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