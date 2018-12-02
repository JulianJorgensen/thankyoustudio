import React from 'react';
import styled from 'styled-components';
import LazyShow from 'components/lazyShow';
import Link from 'components/Link';
import { EASINGS, breakpoint, LAYOUT } from 'utils/variables';

const Wrapper = styled(Link)`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  cursor: pointer;
  height: 100%;
  overflow: hidden;
  color: black;
  ${props => props.whitecontent && `
    color: white;
  `}
  ${props => props.withPadding && `
    padding: 10px;
  `}
  ${props => props.verticalSpan2 && `
    grid-row-end: span 2;
  `}
  ${props => props.horizontalSpan2 && `
    grid-column-end: span 2;
  `}
`

const CaseItemImage = styled(LazyShow)`
  position: relative;
  background: url(${props => props.src}) center center no-repeat;
  background-size: cover;
  transition: transform 1s ${EASINGS.EASE_OUT_SHINE};
  height: 100%;

  ${Wrapper}:hover & {
    transform: scale(1.05);
  }
`

const CaseItemContent = styled.div`
  position: absolute;
  bottom: 0;
  padding: 20px;
  z-index: 2;
  width: 100%;

  ${breakpoint.up('m')`
    transform: translateY(50px);
    transition: all 0.25s ${EASINGS.EASE_OUT_SHINE};
  `}

  ${Wrapper}:hover & {
    transform: translateY(0);
  }
`

const CaseItemTitle = styled.h3`
  font-size: 25px;
  text-transform: uppercase;

  ${breakpoint.up('m')`
    font-size: 70px;
    line-height: 70px;
  `}
`

const CaseItemTags = styled.ul`
  display: flex;
  flex-wrap: wrap;

  ${breakpoint.up('m')`
    opacity: 0;
    transition: all 0.25s ${EASINGS.EASE_OUT_SHINE};
  `}

  ${Wrapper}:hover & {
    opacity: 1;
  }

  li {
    border: 1px solid black;
    color: black;

    ${props => props.whitecontent && `
      border: 1px solid white;
      color: white;
    `}
  }
`

const CaseItemTag = styled.li`
  margin-right: 10px;
  margin-top: 5px;
  padding: 2px 4px;

  ${breakpoint.up('m')`
    padding: 4px 8px;
  `}
`

export default ({ slug, title, tags, bgImage, ...props }) => (
  <Wrapper {...props} href={`/work/${slug}`}>
    <CaseItemImage src={bgImage} />
    <CaseItemContent>
      <CaseItemTitle>{title}</CaseItemTitle>
      <CaseItemTags whitecontent={props.whiteContent}>
        {tags.map(tag => (
          <CaseItemTag>{tag}</CaseItemTag>
        ))}
      </CaseItemTags>
    </CaseItemContent>
  </Wrapper>
)