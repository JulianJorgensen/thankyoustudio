import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';
import withRedux from 'next-redux-wrapper';
import { createGlobalStyle } from 'styled-components';
import { Provider } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import * as actions from 'store/actions';
import { initializeStore } from 'store';
import { FONTS, META, TIMINGS } from 'utils/variables';
import HelveticaNeueRoman from 'fonts/37BC46_0_0.woff2';
import HelveticaNeueBold from 'fonts/37BC46_1_0.woff2';
import favicon from 'assets/images/favicon.ico';
import mobilecheck from 'utils/mobilecheck';
import { breakpoint, BREAKPOINTS_NEW } from 'utils/variables';
import Layout from 'layout';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }

  h1 {
    font-size: 40px;
    line-height: 40px;
    font-weight: 800;
    text-transform: uppercase;
 
    ${breakpoint.up('m')`
      font-size: 75px;
      line-height: 75px;
    `}
  }

  h2 {
    font-size: 25px;
    line-height: 35px;

    ${breakpoint.up('m')`
      font-size: 40px;
      line-height: 54px;
    `}
  }

  h3 {
    font-size: 25px;

    ${breakpoint.up('m')`
      font-size: 34px;
    `}
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  button {
    outline: 0;
  }
`;

class MyApp extends App {
  constructor() {
    super();

    this.checkScreenSizes = this.checkScreenSizes.bind(this);
  }

  static async getInitialProps({ Component, ctx, ...props }) {
    const userAgent = ctx.req ? ctx.req.headers['user-agent'] : navigator.userAgent;
    const isMobile = mobilecheck(userAgent);

    // update slider based on url
    const url = ctx.asPath;
    const urlExploded = url.split('/');
    const currentPage = ctx.pathname.substr(1);
    const isCase = (url === '/' || (urlExploded[1] === 'work' && urlExploded[2]));

    if (isCase) {
      ctx.store.dispatch(actions.updateActiveSlide(currentPage));
    }

    // set is mobile
    ctx.store.dispatch(actions.setIsMobile(isMobile));

    // set page props
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  componentDidMount() {
    this.checkScreenSizes();
    window.addEventListener('resize', this.checkScreenSizes);
  }

  checkScreenSizes() {
    const { store } = this.props;
    if (!store) return;

    if (window.innerWidth < BREAKPOINTS_NEW.m) {
      if (store.isMobile) return;
      this.props.store.dispatch(actions.setIsMobile(true));
    } else {
      if (!store.isMobile) return;
      this.props.store.dispatch(actions.setIsMobile(false));
    }
  }

  render () {
    const { Component, pageProps, store } = this.props
    const isMobile = store.isMobile;
    console.log('store', store.getState());
    return (
      <Container>
        <Head>
          <title>{META.TITLE}</title>
          <meta name="description" content={META.DESCRIPTION} />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0" />
          <meta name="theme-color" content="#ffffff" />
          <meta charSet="utf-8" />
          <link rel="shortcut icon" href={favicon} />
          {/* <link rel="canonical" href={META.CANONICAL} /> */}
        </Head>
        <Provider store={store}>
          <Layout isMobile={isMobile}>
            <TransitionGroup component={null}>
              <CSSTransition
                key={this.props.router.route}
                classNames='fade'
                timeout={TIMINGS.PAGE_TRANSITION_TIMEOUT}
              >
                <Component isMobile={isMobile} {...pageProps} />
              </CSSTransition>
            </TransitionGroup>
          </Layout>
        </Provider>
        <GlobalStyle />
        <style jsx global>{`
          @font-face {
            font-family: 'Helvetica Neue';
            src: url(${HelveticaNeueRoman}) format('woff2');
            font-weight: normal;
            font-style: normal;
            font-display: fallback;
          }

          @font-face {
            font-family: 'Helvetica Neue';
            src: url(${HelveticaNeueBold}) format('woff2');
            font-weight: bold;
            font-style: normal;
            font-display: fallback;
          }

          html {
            height: 100%;
            width: 100%;
            font-family: ${FONTS.PRIMARY}, Helvetica, sans-serif;
            overflow-y: scroll;
            overflow-x: hidden;
            background-color: black;
          }

          body {
            margin: 0;
            padding: 0;
            border: 0;
            font-size: 100%;
            border: 0;
          }
        `}</style>
      </Container>
    )
  }
}

export default withRedux(initializeStore)(MyApp);