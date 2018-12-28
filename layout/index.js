import React, { Component } from 'react';
import { connect } from 'react-redux';
import FontFaceObserver from 'fontfaceobserver';
import { hotjar } from 'react-hotjar';
import 'ssr-intersection-observer';
import * as actions from 'store/actions';
import withAnalytics from 'utils/withAnalytics';
import LayoutDesktop from './components/LayoutDesktop';
import { isProd, TRACKING } from 'utils/variables';

@withAnalytics
@connect()
export default class Layout extends Component {
  componentDidMount() {
    this.initFontObserver();
    window.scrollTo(0, 0);

    // HOTJAR Site tracking
    if (isProd) {
      hotjar.initialize(TRACKING.HOTJAR_ID, 6);
    }
  }

  initFontObserver() {
    const font = new FontFaceObserver('Helvetica Neue');

    font.load().then(() => {
      this.props.dispatch(actions.confirmFontsLoaded());
    });
  }

  render() {
    if (this.props.isMobile) return <LayoutDesktop {...this.props} />;
    return <LayoutDesktop {...this.props} />;
  }
}