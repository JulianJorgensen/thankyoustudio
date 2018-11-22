import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import LazyShow from 'components/lazyShow';
import { EASINGS } from 'utils/variables';
import media from 'utils/mediaQueries';

const Wrapper = styled.div`
  color: white;
  display: flex;
  flex-directions: column;
  justify-content: center;
  color: ${props => props.textColor};
`

const WorkItems = styled.div`
  width: 100%;
  column-count: 2;
  column-gap: 30px;
  break-inside: avoid-column;

  ${media.tablet `
    column-gap: 50px;
  `}
`

const WorkItem = styled(LazyShow)`
  position: relative;
  break-inside: avoid-column;
  height: 350px;
  margin-bottom: 30px;
  cursor: pointer;
  overflow: hidden;
  color: ${props => props.whitecontent ? 'white' : 'black'};

  ${media.tablet `
    margin-bottom: 50px;
    height: 750px;
  `}

  li {
    border-color: ${props => props.whitecontent ? 'white' : 'black'};
  }

  ${props => props.alignright && `
    margin-left: auto;
  `}

  ${props => props.vertical && `
    max-width: 525px;
  `}

  ${props => props.horizontal && `
    width: 100%;
    height: 250px;

    ${media.tablet `
      height: 525px;
    `}
  `}

  ${props => props.square && `
    max-width: 525px;
    max-height: 525px;
  `}

`

const WorkItemImage = styled.div`
  position: relative;
  background: url(${props => props.src}) center center no-repeat;
  background-size: cover;
  transition: transform 1s ${EASINGS.EASE_OUT_SHINE};
  height: 100%;

  &:hover {
    transform: scale(1.05);
  }
`

const WorkItemContent = styled.div`
  position: absolute;
  bottom: 0;
  padding: 20px;
  z-index: 2;
`

const WorkItemTitle = styled.h3`
  font-size: 24px;
  text-transform: uppercase;
  margin-bottom: 5px;
`

const WorkItemTags = styled.ul`
  display: flex;
`

const WorkItemTag = styled.li`
  border-width: 1px;
  border-style: solid;
  border-radius: 3px;
  margin-right: 10px;
  padding: 4px 8px;
`

export default (props) => (
  <Wrapper {...props}>
    <WorkItems>
      <Link href="/swatch" as="/work/swatch" scroll={false}>
        <WorkItem horizontal={1} whitecontent={1}>
          <WorkItemImage src="http://cdn.thankyoustudio.com.s3.amazonaws.com/images/swatch-cover.jpg" />
          <WorkItemContent>
            <WorkItemTitle>Swatch</WorkItemTitle>
            <WorkItemTags>
              <WorkItemTag>Branding</WorkItemTag>
              <WorkItemTag>Design</WorkItemTag>
              <WorkItemTag>Development</WorkItemTag>
            </WorkItemTags>
          </WorkItemContent>
        </WorkItem>
      </Link>

      <Link href="/onea" as="/work/onea" scroll={false}>
        <WorkItem vertical={1} alignright={1}>
          <WorkItemImage src="http://cdn.thankyoustudio.com.s3.amazonaws.com/images/onea-cover.jpg" />
          <WorkItemContent>
            <WorkItemTitle>Onea test</WorkItemTitle>
            <WorkItemTags>
              <WorkItemTag>Branding</WorkItemTag>
              <WorkItemTag>Design</WorkItemTag>
              <WorkItemTag>Development</WorkItemTag>
            </WorkItemTags>
          </WorkItemContent>
        </WorkItem>
      </Link>

      <Link href="/copenhagen" as="/work/copenhagen" scroll={false}>
        <WorkItem vertical={1} alignright={1}>
          <WorkItemImage src="http://cdn.thankyoustudio.com.s3.amazonaws.com/images/copenhagen-cover.jpg" />
          <WorkItemContent>
            <WorkItemTitle>Copenhagen Distellery</WorkItemTitle>
            <WorkItemTags>
              <WorkItemTag>Branding</WorkItemTag>
              <WorkItemTag>Design</WorkItemTag>
              <WorkItemTag>Development</WorkItemTag>
            </WorkItemTags>
          </WorkItemContent>
        </WorkItem>
      </Link>


      <Link href="/ferrari" as="/work/ferrari" scroll={false}>
        <WorkItem vertical={1} alignright={1} whitecontent={1}>
          <WorkItemImage src="http://cdn.thankyoustudio.com.s3.amazonaws.com/images/ferrari-cover.jpg" />
          <WorkItemContent>
            <WorkItemTitle>Ferrari</WorkItemTitle>
            <WorkItemTags>
              <WorkItemTag>Branding</WorkItemTag>
              <WorkItemTag>Design</WorkItemTag>
              <WorkItemTag>Development</WorkItemTag>
            </WorkItemTags>
          </WorkItemContent>
        </WorkItem>
      </Link>

      <Link href="/swatch" as="/work/swatch" scroll={false}>
        <WorkItem square={1} alignright={1}>
          <WorkItemImage src="http://cdn.thankyoustudio.com.s3.amazonaws.com/images/swatch-cover.jpg" />
          <WorkItemContent>
            <WorkItemTitle>Swatch</WorkItemTitle>
            <WorkItemTags>
              <WorkItemTag>Branding</WorkItemTag>
              <WorkItemTag>Design</WorkItemTag>
              <WorkItemTag>Development</WorkItemTag>
            </WorkItemTags>
          </WorkItemContent>
        </WorkItem>
      </Link>

      <Link href="/copenhagen" as="/work/copenhagen" scroll={false}>
        <WorkItem vertical={1}>
          <WorkItemImage src="http://cdn.thankyoustudio.com.s3.amazonaws.com/images/copenhagen-cover.jpg" />
          <WorkItemContent>
            <WorkItemTitle>Copenhagen Distellery</WorkItemTitle>
            <WorkItemTags>
              <WorkItemTag>Branding</WorkItemTag>
              <WorkItemTag>Design</WorkItemTag>
              <WorkItemTag>Development</WorkItemTag>
            </WorkItemTags>
          </WorkItemContent>
        </WorkItem>
      </Link>

      <Link href="/romeo" as="/work/romeo" scroll={false}>
        <WorkItem square={1}>
          <WorkItemImage src="http://cdn.thankyoustudio.com.s3.amazonaws.com/images/romeo-cover.jpg" />
          <WorkItemContent>
            <WorkItemTitle>Romeo</WorkItemTitle>
            <WorkItemTags>
              <WorkItemTag>Branding</WorkItemTag>
              <WorkItemTag>Design</WorkItemTag>
              <WorkItemTag>Development</WorkItemTag>
            </WorkItemTags>
          </WorkItemContent>
        </WorkItem>
      </Link>

      <Link href="/copenhagen" as="/work/copenhagen" scroll={false}>
        <WorkItem vertical={1}>
          <WorkItemImage src="http://cdn.thankyoustudio.com.s3.amazonaws.com/images/copenhagen-cover.jpg" />
          <WorkItemContent>
            <WorkItemTitle>Copenhagen Distellery</WorkItemTitle>
            <WorkItemTags>
              <WorkItemTag>Branding</WorkItemTag>
              <WorkItemTag>Design</WorkItemTag>
              <WorkItemTag>Development</WorkItemTag>
            </WorkItemTags>
          </WorkItemContent>
        </WorkItem>
      </Link>

      <Link href="/onea" as="/work/onea" scroll={false}>
        <WorkItem horizontal={1} whitecontent={1}>
          <WorkItemImage src="http://cdn.thankyoustudio.com.s3.amazonaws.com/images/onea-cover.jpg" />
          <WorkItemContent>
            <WorkItemTitle>Onea</WorkItemTitle>
            <WorkItemTags>
              <WorkItemTag>Branding</WorkItemTag>
              <WorkItemTag>Design</WorkItemTag>
              <WorkItemTag>Development</WorkItemTag>
            </WorkItemTags>
          </WorkItemContent>
        </WorkItem>
      </Link>
    </WorkItems>
  </Wrapper>
)
