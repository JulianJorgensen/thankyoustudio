import React, { Component } from 'react';
import styled from 'styled-components';
import Slider from 'components/Slider';
import BelowFold from 'components/BelowFold';

export default class Homepage extends Component {
  render() {
    return (
      <div id="top">
        <Slider />
        <BelowFold />
      </div>
    );
  }
}
