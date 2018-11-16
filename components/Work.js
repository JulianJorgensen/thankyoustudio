import React from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import styled from 'styled-components';
import styles from 'utils/styles';
import SwatchPoster from 'assets/images/swatch_start_1-poster.jpg';
import CphDistelleryPoster from 'assets/images/copenhagen-distellery.jpg';
import { easings, layout } from 'utils/variables';

const Wrapper = styled.div`
  color: white;
  display: flex;
  flex-directions: column;
  justify-content: center;
  color: ${props => props.textColor};
`

const WorkItems = styled.div`
  column-count: 2;
  column-gap: 50px;
  max-width: ${layout.containerWidth};
  width: 100%;
`

const WorkItem = styled.div`
  break-inside: avoid-column;
  height: 750px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  cursor: pointer;
  overflow: hidden;

  &:first-child {
    margin-top: 200px;
  }
`

const WorkItemImage = styled.div`
  position: relative;
  background: url(${props => props.src}) center center no-repeat;
  background-size: cover;
  transition: transform 1s ${easings.easeOutSine};
  height: 100%;

  &:hover {
    transform: scale(1.05);
  }
`

const WorkItemContent = styled.div`
  padding: 20px;
`

const WorkItemTitle = styled.h3`
  font-size: 20px;
`

const WorkItemLead = styled.div`
  font-size: 16px;
`

export default (props) => (
  <Wrapper {...props}>
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

      <Link href="/copenhagen" as="/work/copenhagen" scroll={false}>
        <WorkItem>
          <WorkItemImage src="https://thankyoustudio.com/wp-content/uploads/2017/01/thumb_03.jpg" />
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
          <WorkItemImage src="http://cdn.thankyoustudio.com.s3.amazonaws.com/images/romeo.jpg" />
          <WorkItemContent>
            <WorkItemTitle>Romeo</WorkItemTitle>
            <WorkItemLead>Customers first – reshaping brand identity and online presence</WorkItemLead>
          </WorkItemContent>
        </WorkItem>
      </Link>

      <Link href="/ferrari" as="/work/ferrari" scroll={false}>
        <WorkItem verticalSpan2>
          <WorkItemImage src="https://thankyoustudio.com/wp-content/uploads/2016/10/framegrabs3-1448383495270-1920.jpg" />
          <WorkItemContent>
            <WorkItemTitle>Ferrari</WorkItemTitle>
            <WorkItemLead>Customers first – reshaping brand identity and online presence</WorkItemLead>
          </WorkItemContent>
        </WorkItem>
      </Link>

      <Link href="/swatch" as="/work/swatch" scroll={false}>
        <WorkItem>
          <WorkItemImage src="http://cdn.thankyoustudio.com.s3.amazonaws.com/images/swatch-cover.jpg" />
          <WorkItemContent>
            <WorkItemTitle>Swatch</WorkItemTitle>
            <WorkItemLead>Sparking renewed interest in Sweden</WorkItemLead>
          </WorkItemContent>
        </WorkItem>
      </Link>

      <Link href="/copenhagen" as="/work/copenhagen" scroll={false}>
        <WorkItem>
          <WorkItemImage src="https://thankyoustudio.com/wp-content/uploads/2017/01/thumb_03.jpg" />
          <WorkItemContent>
            <WorkItemTitle>Copenhagen Distellery</WorkItemTitle>
            <WorkItemLead>Launching a daring SUV to a new target group</WorkItemLead>
          </WorkItemContent>
        </WorkItem>
      </Link>

      <Link href="/onea" as="/work/onea" scroll={false}>
        <WorkItem verticalSpan2>
          <WorkItemImage src="https://thankyoustudio.com/wp-content/uploads/2017/05/thumb-1.jpg" />
          <WorkItemContent>
            <WorkItemTitle>Onea</WorkItemTitle>
            <WorkItemLead>Sparking renewed interest in Sweden as a holiday destination</WorkItemLead>
          </WorkItemContent>
        </WorkItem>
      </Link>

      <Link href="/copenhagen" as="/work/copenhagen" scroll={false}>
        <WorkItem>
          <WorkItemImage src="https://thankyoustudio.com/wp-content/uploads/2017/01/thumb_03.jpg" />
          <WorkItemContent>
            <WorkItemTitle>Copenhagen Distellery</WorkItemTitle>
            <WorkItemLead>Launching a daring SUV to a new target group</WorkItemLead>
          </WorkItemContent>
        </WorkItem>
      </Link>

    </WorkItems>
  </Wrapper>
)
