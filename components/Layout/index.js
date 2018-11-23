import React, { Component } from 'react';
import { connect } from 'react-redux';
import FontFaceObserver from 'fontfaceobserver';
import * as actions from 'store/actions';
import withAnalytics from 'utils/withAnalytics';
import LayoutMobile from './components/LayoutMobile';
import LayoutDefault from './components/LayoutDefault';

@withAnalytics
@connect()
export default class Layout extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    this.initFontObserver();
  }

  initFontObserver() {
    const font = new FontFaceObserver('Helvetica Neue')

    font.load().then(() => {
      this.props.dispatch(actions.confirmFontsLoaded());
    });
  }

  render() {
    const { isMobile } = this.props;

    if (isMobile) return <LayoutMobile {...this.props} />;
    return <LayoutDefault {...this.props} />;
  }
}