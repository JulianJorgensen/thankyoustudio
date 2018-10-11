import App, { Container } from 'next/app';
import React from 'react';
import styled, { injectGlobal } from 'styled-components';
import { PageTransition } from 'next-page-transitions';
import withReduxStore from 'store/with-redux-store';
import { Provider } from 'react-redux';
import Loader from 'components/Loader';
import Header from 'components/Header';
import HelveticaNeueRoman from 'fonts/37BC46_0_0.woff2';
import HelveticaNeueBold from 'fonts/37BC46_1_0.woff2';

const TIMEOUT = 400;
const Page = styled.div`
`

injectGlobal`
  @font-face {
    font-family: 'Helvetica Neue';
    src: url(${HelveticaNeueRoman}) format('woff2'),
        url(${HelveticaNeueBold}) format('woff');
  }
`

@withReduxStore
export default class MyApp extends App {
  static async getInitialProps ({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render () {
    const { Component, pageProps, reduxStore } = this.props
    return (
      <Container>
        <Provider store={reduxStore}>
          <Page>
            <Header />
            <PageTransition
              timeout={TIMEOUT}
              classNames='page-transition'
              loadingComponent={<Loader />}
              loadingDelay={500}
              loadingTimeout={{
                enter: TIMEOUT,
                exit: 0
              }}
              loadingClassNames='loading-indicator'
            >
              <Component {...pageProps} />
            </PageTransition>
          </Page>
        </Provider>

        <style jsx global>{`
        .page-transition-enter {
          opacity: 0;
          transform: translate3d(0, 0, 0);
        }
        .page-transition-enter-active {
          opacity: 1;
          transform: translate3d(0, 0, 0);
          transition: opacity ${TIMEOUT}ms, transform ${TIMEOUT}ms;
        }
        .page-transition-exit {
          opacity: 1;
        }
        .page-transition-exit-active {
          opacity: 0;
          transition: opacity ${TIMEOUT}ms;
        }
        .loading-indicator-appear,
        .loading-indicator-enter {
          opacity: 0;
        }
        .loading-indicator-appear-active,
        .loading-indicator-enter-active {
          opacity: 1;
          transition: opacity ${TIMEOUT}ms;
        }
      `}</style>
      </Container>
    )
  }
}
