import React from 'react';
import Router from 'next/router';
import styled from 'styled-components';
import LazyShow from 'components/lazyShow';
import Link from 'components/Link';
import Image from 'components/Image';
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
  overflow: hidden;
  color: black;
  height: 0;
  padding-bottom: 56.25%;

  ${props => props.whitecontent && `
    color: white;
  `}
`

const StyledImage = styled(Image)`
  position: relative;
  transition: transform 1s ${EASINGS.EASE_OUT_SHINE}, opacity 0.2s ease;
  width: 100%;

  ${Wrapper}:hover & {
    transform: scale(1.05);
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
  margin-top: 6px;

  ${breakpoint.up('m')`
    margin-top: 15px;
    margin-left: 15px;
  `}
`

const Tag = styled.li`
  margin-right: 6px;
  font-size: 10px;
  opacity: 0.8;

  ${breakpoint.up('m')`
    margin-right: 10px;
    font-size: initial;
  `}
`

export default ({ slug, title, tags, bgImage, animateFromLeft, noAnimation, onMouseEnter, ...props }) => (
  <LazyShow animateFromLeft={animateFromLeft} noAnimation={noAnimation}>
    <Wrapper onMouseEnter={() => Router.prefetch(`/${slug}`)}>
        <ImageWrapper href={`/work/${slug}`} {...props}>
          <Title>{title}</Title>
          <StyledImage src={bgImage} />
        </ImageWrapper>

        <Tags whitecontent={props.whiteContent}>
          {tags.map(tag => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </Tags>
    </Wrapper>
  </LazyShow>
)