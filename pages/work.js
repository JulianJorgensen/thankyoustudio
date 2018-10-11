import React from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import styled from 'styled-components';
import styles from 'utils/styles';
import { switchToLightContent } from 'store/actions';
import SwatchPoster from 'assets/images/swatch_start_1-poster.jpg';
import CphDistelleryPoster from 'assets/images/copenhagen-distellery.jpg';
import { easings } from 'utils/variables';

const Wrapper = styled.div`
  ${styles.defaultWrapper};
  background-color: black;
  color: white;
  padding-top: 200px;
`

const WorkItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding-top: 100px;
`

const WorkItem = styled.div`
  position: relative;
  width: 50%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  cursor: pointer;

  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: url(${props => props.src}) center center no-repeat;
    opacity: 0.5;
    transition: 0.2s opacity ease, transform 1s ${easings.easeOutSine};
  }

  &:hover:after {
    opacity: 1;
    transform: scale(1.05);
  }
`

const WorkItemContent = styled.div`
  position: relative;
  z-index: 2;
`

@connect((store) => ({
  store,
}))
export default class Index extends React.Component {
  componentWillMount() {
    this.props.dispatch(switchToLightContent());
  }

  render () {
    return (
      <Wrapper>
        <h1>work</h1>
        <WorkItems>
          <Link as="/work/swatch" href="/swatch"><WorkItem src={SwatchPoster}><WorkItemContent>Swatch</WorkItemContent></WorkItem></Link>
          <WorkItem src={CphDistelleryPoster}><WorkItemContent>Copenhagen Distellery</WorkItemContent></WorkItem>
          <WorkItem src={CphDistelleryPoster}><WorkItemContent>Copenhagen Distellery</WorkItemContent></WorkItem>
          <WorkItem src={SwatchPoster}><WorkItemContent>Swatch</WorkItemContent></WorkItem>
        </WorkItems>
      </Wrapper>
    )
  }
}
