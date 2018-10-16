import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from 'components/Slider';
import BelowFold from 'components/BelowFold';
import * as actions from 'store/actions';

@connect()
export default class Homepage extends Component {
  componentWillMount() {
    const { dispatch } = this.props;

    dispatch(actions.updateActiveSlide('ThankYou'));
  }

  render() {
    return (
      <div id="top">
        <Slider />
        <BelowFold />
      </div>
    );
  }
}
