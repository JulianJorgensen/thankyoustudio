import React, { Component } from 'react';
import { connect } from 'react-redux';
import FontFaceObserver from 'fontfaceobserver';
import { hotjar } from 'react-hotjar';
import * as actions from 'store/actions';
import withAnalytics from 'utils/withAnalytics';
import LayoutMobile from './components/LayoutMobile';
import LayoutDesktop from './components/LayoutDesktop';
import { isProd, TRACKING } from 'utils/variables';

@withAnalytics
@connect()
export default class Layout extends Component {
  componentDidMount() {
    // require polyfill for intersection observer only in client side
    require('intersection-observer');

    this.initFontObserver();
    window.scrollTo(0, 0);

    // HOTJAR Site tracking
    // if (isProd) {
    //   hotjar.initialize(TRACKING.HOTJAR_ID, 6);
    // }
  }

  initFontObserver() {
    this.props.dispatch(actions.confirmFontsLoaded());
    // const font = new FontFaceObserver('Helvetica Neue');

    // font.load().then(() => {
    //   this.props.dispatch(actions.confirmFontsLoaded());
    // });
  }

  render() {
    if (this.props.isMobile) return <LayoutDesktop {...this.props} />;
    return <LayoutDesktop {...this.props} />;
  }
}