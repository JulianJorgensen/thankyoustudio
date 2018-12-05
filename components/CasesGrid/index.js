import React from 'react';
import styled from 'styled-components';
import { LAYOUT, TIMINGS, breakpoint } from 'utils/variables';
import CaseItem from './components/CaseItem';
import Capabilities from './components/Capabilities';
import SlideItems from 'store/slideItems';

const Wrapper = styled.div`
  min-height: 100vh;

  ${breakpoint.up('l')`
    margin: ${LAYOUT.EDGE_MARGIN};
  `}
`

const CaseItems = styled.div`
  width: 100%;
  color: white;

  ${props => props.onWhite && `
    color: black;
  `}

  ${breakpoint.up('xs')`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 6px;
    grid-auto-flow: dense;
  `}

  ${breakpoint.up('m')`
    grid-gap: 30px;
  `}

  ${breakpoint.up('xl')`
    grid-template-columns: repeat(3, 1fr);
  `}
`

export default ({ className, ...props }) => {
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
      <CaseItems onWhite={props.onWhite}>
        <CaseItem {...getCaseData('onea')} whitecontent {...props} />
        {/* <Capabilities /> */}
        <CaseItem {...getCaseData('ferrari')} whitecontent {...props} />
        <CaseItem {...getCaseData('copenhagen')} {...props} />
        <CaseItem {...getCaseData('swatch')} whitecontent {...props} />
        <CaseItem {...getCaseData('onea')} whitecontent {...props} />
        <CaseItem {...getCaseData('ferrari')} whitecontent {...props} />
        <CaseItem {...getCaseData('copenhagen')} {...props} />
        <CaseItem {...getCaseData('onea')} whitecontent {...props} />
        <CaseItem {...getCaseData('ferrari')} whitecontent {...props} />
      </CaseItems>
    </Wrapper>
  )
}