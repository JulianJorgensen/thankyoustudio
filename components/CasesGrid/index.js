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
  margin: 0 ${LAYOUT.MOBILE.EDGE_MARGIN};

  ${breakpoint.up('l')`
    margin: 0 ${LAYOUT.EDGE_MARGIN};
  `}
`

const CaseItems = styled.div`
  display: grid;
  grid-gap: ${LAYOUT.MOBILE.EDGE_MARGIN};
  grid-template-columns: repeat(2, 1fr);
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
        <CaseItem {...getCaseData('swatch')} delay={400} />
        <CaseItem {...getCaseData('onea')} delay={400} />
        <CaseItem {...getCaseData('ferrari')} delay={400} />
        <CaseItem {...getCaseData('copenhagen')} verticalSpan2 vertical />
        <CaseItem {...getCaseData('onea')} square />
        <CaseItem {...getCaseData('ferrari')} vertical />
      </CaseItems>
    </Wrapper>
  )
}