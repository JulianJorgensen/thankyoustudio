import React, { Component } from 'react';
import { withRouter } from 'next/router';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Slider from 'components/Slider';
import BelowFold from 'components/BelowFold';
import * as actions from 'store/actions';

@withRouter
@connect()
export default class WorkPage extends Component {
  componentWillMount() {
    const { dispatch, router } = this.props;
    dispatch(actions.updateActiveSlide(router.query.id));
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
