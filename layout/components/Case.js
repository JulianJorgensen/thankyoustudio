import React, { Component } from 'react';
import { connect } from 'react-redux';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import styled from 'styled-components';
import * as actions from 'store/actions';
import slideItems from 'store/slideItems';
import { breakpoint, LAYOUT, META, TIMINGS } from 'utils/variables';
import Text from 'components/Case/Text';
import CasesGrid from 'components/CasesGrid';
import Footer from 'layout/components/Footer';

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  background-color: white;
  top: ${LAYOUT.MOBILE.HERO_HEIGHT};

  ${breakpoint.m `
    top: 100vh;
  `}

  img, video {
    display: block;
  }
`

const Content = styled.div`
  position: relative;
  width: 100%;
  opacity: 1;
  transition: opacity 0.2s ease;
  transition-delay: 0.3s;

  ${props => props.isSliding && `
    opacity: 0;
  `}

  ${breakpoint.m`
    transition: none;
  `}
`

const CasesGridTitle = styled.h2`
  margin: 100px ${LAYOUT.MOBILE.EDGE_MARGIN} 10px;

  ${breakpoint.m`
    margin: 300px ${LAYOUT.EDGE_MARGIN} 10px;
  `}
`

@connect((store) => ({
  store,
}))
export default class Case extends Component {
  componentDidMount() {
    const { dispatch, whiteContent } = this.props;
    if (whiteContent) dispatch(actions.setNavColorWhite(true));
  }

  render() {
    const { children, store, title, slug, isLanding, ...props } = this.props;
    const { isMobile } = store;

    const renderTitle = () => {
      if (!title) return META.TITLE;
      return `${title} case by THANK YOU Studio. ${META.CASE_TITLE}`;
    }

    return (
        <Wrapper {...props} className="case-page">
          <Head>
            <title>{renderTitle()}</title>
          </Head>
          <Content isSliding={store.isSliding}>
            {children}
            {!isLanding && 
              <div>
                <CasesGridTitle>Other cases</CasesGridTitle>
                <CasesGrid isMobile={isMobile} onWhite />
              </div>
            }
          </Content>
          <Footer />
          <style jsx global>{`
            .fade-enter.case-page, .fade-exit.case-page {
            }

            .fade-exit.case-page {
              transform: translateX(0px);
              opacity: 1;
            }

            .fade-exit-active.case-page {
              transform: translateX(100px);
              transition: all ${isMobile ? TIMINGS.MOBILE.CASE_WRAPPER : TIMINGS.CASE_WRAPPER} ease-out;
              opacity: 0;
            }
          `}
          </style>
        </Wrapper>
    )
  }
}