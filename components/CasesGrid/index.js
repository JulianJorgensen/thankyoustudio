import React from 'react';
import styled from 'styled-components';
import { LAYOUT, TIMINGS, breakpoint } from 'utils/variables';
import CaseItem from './components/CaseItem';
import Capabilities from './components/Capabilities';
import SlideItems from 'store/slideItems';

const Wrapper = styled.div`
  margin: ${LAYOUT.MOBILE.EDGE_MARGIN};

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
      bgImage: props.isMobile ? caseData.mobile.imageThumb : caseData.imageThumb,
      slug: slug
    }
  }

  return (
    <Wrapper className={className} {...props}>
      <CaseItems onWhite={props.onWhite}>
        <CaseItem {...getCaseData('ferrari')} {...props} />
        <CaseItem {...getCaseData('swatch')} delay={props.isMobile ? 0 : 100} {...props} />
        <CaseItem {...getCaseData('amazon')} delay={props.isMobile ? 0 : 200} {...props} />
        <CaseItem {...getCaseData('copenhagen')} {...props} />
        <CaseItem {...getCaseData('universal-robots')} delay={props.isMobile ? 0 : 100} {...props} />
        <CaseItem {...getCaseData('onea')} delay={props.isMobile ? 0 : 200} {...props} />
        <CaseItem {...getCaseData('swatch-scuba-libra')} {...props} />
        <CaseItem {...getCaseData('gyldendal')} delay={props.isMobile ? 0 : 100} {...props} />
        <CaseItem {...getCaseData('steelseries')} delay={props.isMobile ? 0 : 200} {...props} />
        <CaseItem {...getCaseData('bundesliga')} {...props} />
        {/* <Capabilities /> */}
      </CaseItems>
    </Wrapper>
  )
}