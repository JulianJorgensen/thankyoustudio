import App, { Container } from 'next/app';
import Head from 'next/head';
import React from 'react';
import withReduxStore from 'store/with-redux-store';
import { Provider } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Layout from 'components/Layout';
import { meta, fonts } from 'utils/variables';
import HelveticaNeueRoman from 'fonts/37BC46_0_0.woff2';
import HelveticaNeueBold from 'fonts/37BC46_1_0.woff2';
import favicon from 'assets/images/favicon.ico';

@withReduxStore
export default class MyApp extends App {
  render () {
    const { Component, pageProps, reduxStore } = this.props
    return (
      <Container>
        <Head>
          <title>{meta.title}</title>
          <meta name="description" content={meta.description} />

          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <link rel="shortcut icon" href={favicon} />
          <link rel="canonical" href="https://www.thankyoustudio.com" />
        </Head>
        <Provider store={reduxStore}>
          <Layout>
            <TransitionGroup component={null}>
              <CSSTransition
                key={this.props.router.route}
                classNames='fade'
                timeout={500}
              >
                <Component {...pageProps} />
              </CSSTransition>
            </TransitionGroup>
          </Layout>
        </Provider>
        <style jsx global>{`
          @font-face {
            font-family: 'Helvetica Neue';
            src: url(${HelveticaNeueRoman}) format('woff2');
            font-weight: normal;
            font-style: normal;
          }

          @font-face {
            font-family: 'Helvetica Neue';
            src: url(${HelveticaNeueBold}) format('woff2');
            font-weight: bold;
            font-style: normal;
          }

          html {
            height: 100%;
            width: 100%;
            font-family: ${fonts.primary}, Helvetica, sans-serif;
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
            font-size: 70px;
          }
        
          h2 {
            font-size: 40px;
            line-height: 54px;
          }
        
          h3 {
            font-size: 40px;
          }
        
          p {
            font-size: 22px;
            line-height: 34px;
            letter-spacing: -1px
          }
        
          ul {
            list-style-type: none;
            margin: 0;
            padding: 0;
          }
        
          button {
            outline: 0;
          }
        `}</style>
      </Container>
    )
  }
}
