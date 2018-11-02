import App, { Container } from 'next/app';
import React from 'react';
import withReduxStore from 'store/with-redux-store';
import { Provider } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Layout from 'components/Layout';

@withReduxStore
export default class MyApp extends App {
  render () {
    const { Component, pageProps, reduxStore } = this.props
    return (
      <Container>
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
          .fade-enter {
            position: absolute;
            opacity: 0;
            width: 0;
            transition: opacity 0, width 0.5s;
          }

          .fade-enter-active {
            position: absolute;
            opacity: 1;
            width: 100%;
            transition: opacity 0.5s, width 0.5s;
            // transition-delay: 0.5s;
          }

          .fade-exit {
            position: absolute;
            transform: translateX(0);
            opacity: 1;
            transition: all 0;
          }

          .fade-exit-active {
            position: absolute;
            transform: translateX(-100px);
            // opacity: 0.8;
            opacity: 0;           
            transition: all 0.5s ease-in;
          }
        `}</style>
      </Container>
    )
  }
}
