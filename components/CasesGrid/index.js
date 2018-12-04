import React from 'react';
import { connect } from 'react-redux';
import Router from 'next/router';
import styled from 'styled-components';
import * as actions from 'store/actions';
import { LAYOUT, TIMINGS, breakpoint } from 'utils/variables';
import CaseItem from './components/CaseItem';
import Capabilities from './components/Capabilities';
import SlideItems from 'store/slideItems';

const Wrapper = styled.div`
  color: white;
`

const CaseItems = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 6px;
  grid-auto-flow: dense;
  width: 100%;

  ${breakpoint.up('l')`
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px;
  `}
`

export default (props) => {
  const getCaseData = (slug) => {
    const caseData = SlideItems.find(obj => obj.slug == slug);
    return {
      title: caseData.title,
      tags: caseData.tags,
      bgImage: caseData.imageThumb,
      slug: slug
    }
  }

  return (
    <Wrapper {...props}>
      <CaseItems>
        <CaseItem {...getCaseData('onea')} verticalSpan2 horizontalSpan2 whitecontent noAnimation />
        {/* <Capabilities /> */}
        <CaseItem {...getCaseData('ferrari')} whitecontent delay={200} />
        <CaseItem {...getCaseData('copenhagen')} delay={300} />
        <CaseItem {...getCaseData('swatch')} whitecontent delay={400} />
        <CaseItem {...getCaseData('onea')} whitecontent delay={400} />
        <CaseItem {...getCaseData('ferrari')} whitecontent delay={400} />
        <CaseItem {...getCaseData('copenhagen')} verticalSpan2 vertical />
        <CaseItem {...getCaseData('onea')} whitecontent square />
        <CaseItem {...getCaseData('ferrari')} whitecontent vertical />
      </CaseItems>
    </Wrapper>
  )
}