import React from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import styled from 'styled-components';
import styles from 'utils/styles';
import SwatchPoster from 'assets/images/swatch_start_1-poster.jpg';
import CphDistelleryPoster from 'assets/images/copenhagen-distellery.jpg';
import { easings } from 'utils/variables';

const Wrapper = styled.div`
  color: white;
`

const WorkItems = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: minmax(250px, auto);
  grid-auto-flow: dense;
  width: 100%;
`

const WorkItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  cursor: pointer;

  background-color: #333;

  &:nth-child(odd) {
      background-color: #424242;
  }

  ${props => props.verticalSpan2 && `
    grid-row-end: span 2;
  `}

  ${props => props.horizontalSpan2 && `
    grid-column-end: span 2;
  `}
`

const WorkItemImage = styled.div`
  display: none;
  position: relative;
  opacity: 0.5;
  transition: 0.2s opacity ease, transform 1s ${easings.easeOutSine};

  &:hover {
    opacity: 1;
    transform: scale(1.05);
  }
`

const WorkItemContent = styled.div`
  background-color: #353535;
  color: white;
  padding: 20px;
`

const WorkItemTitle = styled.div`
  font-size: 20px;
`

const WorkItemLead = styled.div`
  font-size: 16px;
`

@connect((store) => ({
  store,
}))
export default class Work extends React.Component {
  render () {
    return (
      <Wrapper>
        <WorkItems>
          <Link href="/swatch" as="/work/swatch" scroll={false}>
            <WorkItem horizontalSpan2 verticalSpan2>
              <WorkItemImage src={SwatchPoster} />
              <WorkItemContent>
                <WorkItemTitle>Swatch</WorkItemTitle>
                <WorkItemLead>Combining pop music and tech to launch a new phone</WorkItemLead>
              </WorkItemContent>

            </WorkItem>
          </Link>

          <Link href="/swatch" as="/work/swatch" scroll={false}>
            <WorkItem>
              <WorkItemImage src={SwatchPoster} />
              <WorkItemContent>
                <WorkItemTitle>Copenhagen Distellery</WorkItemTitle>
                <WorkItemLead>Launching a daring SUV to a new target group</WorkItemLead>
              </WorkItemContent>
            </WorkItem>
          </Link>

          <Link href="/onea" as="/work/onea" scroll={false}>
            <WorkItem>
              <WorkItemImage src={SwatchPoster} />
              <WorkItemContent>
                <WorkItemTitle>Onea</WorkItemTitle>
                <WorkItemLead>Sparking renewed interest in Sweden as a holiday destination</WorkItemLead>
              </WorkItemContent>
            </WorkItem>
          </Link>

          <Link href="/romeo" as="/work/romeo" scroll={false}>
            <WorkItem verticalSpan2>
              <WorkItemImage src={SwatchPoster} />
              <WorkItemContent>
                <WorkItemTitle>Romeo</WorkItemTitle>
                <WorkItemLead>Customers first – reshaping brand identity and online presence</WorkItemLead>
              </WorkItemContent>
            </WorkItem>
          </Link>

          <Link href="/ferrari" as="/work/ferrari" scroll={false}>
            <WorkItem verticalSpan2>
              <WorkItemImage src={SwatchPoster} />
              <WorkItemContent>
                <WorkItemTitle>Ferrari</WorkItemTitle>
                <WorkItemLead>Customers first – reshaping brand identity and online presence</WorkItemLead>
              </WorkItemContent>
            </WorkItem>
          </Link>

          <Link href="/swatch" as="/work/swatch" scroll={false}>
            <WorkItem>
              <WorkItemImage src={SwatchPoster} />
              <WorkItemContent>
                <WorkItemTitle>Copenhagen Distellery</WorkItemTitle>
                <WorkItemLead>Launching a daring SUV to a new target group</WorkItemLead>
              </WorkItemContent>
            </WorkItem>
          </Link>

          <Link href="/onea" as="/work/onea" scroll={false}>
            <WorkItem verticalSpan2>
              <WorkItemImage src={SwatchPoster} />
              <WorkItemContent>
                <WorkItemTitle>Onea</WorkItemTitle>
                <WorkItemLead>Sparking renewed interest in Sweden as a holiday destination</WorkItemLead>
              </WorkItemContent>
            </WorkItem>
          </Link>

          <Link href="/swatch" as="/work/swatch" scroll={false}>
            <WorkItem>
              <WorkItemImage src={SwatchPoster} />
              <WorkItemContent>
                <WorkItemTitle>Swatch</WorkItemTitle>
                <WorkItemLead>Sparking renewed interest in Sweden</WorkItemLead>
              </WorkItemContent>
            </WorkItem>
          </Link>

          <Link href="/swatch" as="/work/swatch" scroll={false}>
            <WorkItem>
              <WorkItemImage src={SwatchPoster} />
              <WorkItemContent>
                <WorkItemTitle>Copenhagen Distellery</WorkItemTitle>
                <WorkItemLead>Launching a daring SUV to a new target group</WorkItemLead>
              </WorkItemContent>
            </WorkItem>
          </Link>

        </WorkItems>
      </Wrapper>
    )
  }
}
