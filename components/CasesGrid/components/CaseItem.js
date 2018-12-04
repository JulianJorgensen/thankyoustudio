import React from 'react';
import styled from 'styled-components';
import LazyShow from 'components/lazyShow';
import Link from 'components/Link';
import { EASINGS, breakpoint, LAYOUT } from 'utils/variables';

const Wrapper = styled.div`
  margin-bottom: 15px;

  ${breakpoint.up('m')`
    margin-bottom: 30px;
  `}
`

const ImageWrapper = styled(Link)`
  position: relative;
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

const Image = styled.div`
  position: relative;
  background: url(${props => props.src}) center center no-repeat;
  background-size: cover;
  transition: transform 1s ${EASINGS.EASE_OUT_SHINE};
  width: 100%;
  padding-bottom: 75%;

  ${Wrapper}:hover & {
    transform: scale(1.05);
  }
`

const Content = styled.div`
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

const Title = styled.h3`
  position: absolute;
  left: ${LAYOUT.MOBILE.EDGE_MARGIN};
  bottom: ${LAYOUT.MOBILE.EDGE_MARGIN};
  z-index: 2;
  font-size: 22px;
  line-height: 22px;
  text-transform: uppercase;
  max-width: 60%;

  ${breakpoint.up('m')`
    left: 15px;
    bottom: 15px;
    font-size: 30px;
    line-height: 30px;
  `}

  ${breakpoint.up('m')`
    font-size: 45px;
    line-height: 45px;
  `}
`

const Tags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-left: ${LAYOUT.MOBILE.EDGE_MARGIN};
  margin-top: 10px;

  ${breakpoint.up('m')`
    margin-top: 15px;
    margin-left: 15px;
  `}

  li {
    color: white;

    ${props => props.whitecontent && `
      color: black;
    `}
  }
`

const Tag = styled.li`
  margin-right: 6px;
  font-size: 12px;

  ${breakpoint.up('m')`
    margin-right: 10px;
    font-size: initial;
  `}
`

export default ({ slug, title, tags, bgImage, noAnimation, ...props }) => (
  <LazyShow noAnimation={noAnimation}>
    <Wrapper>
        <ImageWrapper href={`/work/${slug}`} {...props}>
          <Title>{title}</Title>
          <Image src={bgImage} />
        </ImageWrapper>

        <Tags whitecontent={props.whiteContent}>
          {tags.map(tag => (
            <Tag>{tag}</Tag>
          ))}
        </Tags>
    </Wrapper>
  </LazyShow>
)