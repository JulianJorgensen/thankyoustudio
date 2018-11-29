import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import LazyShow from 'components/lazyShow';
import { EASINGS, breakpoint, LAYOUT } from 'utils/variables';
import media from 'utils/mediaQueries';

const Wrapper = styled.div`
  color: white;
  padding: 0;

  ${breakpoint.up('l')`
    padding: 0 30px;
  `}
`

const WorkItems = styled.div`
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: minmax(400px, auto);
  grid-auto-flow: dense;
  width: 100%;

  ${breakpoint.up('l')`
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px;
  `}
`

const WorkItem = styled(LazyShow)`
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

const WorkItemImage = styled.div`
  position: relative;
  background: url(${props => props.src}) center center no-repeat;
  background-size: cover;
  transition: transform 1s ${EASINGS.EASE_OUT_SHINE};
  height: 100%;

  ${WorkItem}:hover & {
    transform: scale(1.05);
  }
`

const WorkItemContent = styled.div`
  position: absolute;
  bottom: 0;
  padding: 20px;
  z-index: 2;
  width: 100%;

  ${breakpoint.up('m')`
    transform: translateY(50px);
    transition: all 0.25s ${EASINGS.EASE_OUT_SHINE};
  `}

  ${WorkItem}:hover & {
    transform: translateY(0);
  }
`

const WorkItemTitle = styled.h3`
  font-size: 25px;
  text-transform: uppercase;

  ${breakpoint.up('m')`
    font-size: 70px;
    line-height: 70px;
  `}
`

const WorkItemTags = styled.ul`
  display: flex;
  flex-wrap: wrap;

  ${breakpoint.up('m')`
    opacity: 0;
    transition: all 0.25s ${EASINGS.EASE_OUT_SHINE};
  `}

  ${WorkItem}:hover & {
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

const WorkItemTag = styled.li`
  margin-right: 10px;
  margin-top: 5px;
  padding: 2px 4px;

  ${breakpoint.up('m')`
    padding: 4px 8px;
  `}
`

const TextItem = styled(LazyShow)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  cursor: pointer;
  height: 100%;
  padding: 10px;
  grid-column-end: span 2;

  ${breakpoint.up('m')`
    grid-column-end: span 1;
    grid-row-end: span 2;
  `}

  &:hover {
    background-color: white;
    color: black;
  }

  ${props => props.reverse && `
    color: black;
    &:hover {
      background-color: black;
      color: white;
    }
  `}
`

const TextItemHeader = styled.h3`
  font-size: 40px;
  line-height: 40px;
  padding-right: 32%;
  text-transform: uppercase;

  ${props => props.whiteBg && `
    background-color: white;
    color: black;
  `}

  ${breakpoint.up('l')`
    font-size: 70px;
    line-height: 70px;
  `}
`

const FeaturedServices = styled.ul`
  display: flex;
  flex-wrap: wrap;
  max-width: 60%;

  li {
    border: 1px solid white;
    color: white;
  
    ${TextItem}:hover & {
      border-color: black;
      color: black;
    }
  
    ${props => props.reverse && `
      border-color: black;
      color: black;
  
      ${TextItem}:hover & {
        border-color: white;
        color: white;
      }
    `}  
  }
`

const FeaturedService = styled.li`
  margin-right: 5px;
  margin-top: 5px;
  padding: 2px 4px;

  ${breakpoint.up('m')`
    padding: 4px 8px;
  `}
`

export default (props) => (
  <Wrapper {...props}>
    <WorkItems>
    <Link href="/onea" as="/work/onea" scroll={false}>
        <WorkItem verticalSpan2 horizontalSpan2 whitecontent>
            <WorkItemImage src="http://cdn.thankyoustudio.com.s3.amazonaws.com/images/onea-cover.jpg" />
            <WorkItemContent>
              <WorkItemTitle>Onea</WorkItemTitle>
              <WorkItemTags whitecontent>
                <WorkItemTag>Branding</WorkItemTag>
                <WorkItemTag>Design</WorkItemTag>
                <WorkItemTag>Development</WorkItemTag>
              </WorkItemTags>
            </WorkItemContent>
        </WorkItem>
      </Link>

      <Link href="/about" scroll={false}>
        <TextItem reverse={props.reverseTextItems}>
          <TextItemHeader>Capabilities</TextItemHeader>
          <FeaturedServices reverse={props.reverseTextItems}>
            <FeaturedService>Strategy</FeaturedService>
            <FeaturedService>Brand</FeaturedService>
            <FeaturedService>Design</FeaturedService>
            <FeaturedService>Web development</FeaturedService>
            <FeaturedService>Video + Photography</FeaturedService>
            <FeaturedService>Content development</FeaturedService>
          </FeaturedServices>
        </TextItem>
      </Link>

      <Link href="/swatch" as="/work/swatch" scroll={false}>
        <WorkItem whitecontent delay={200}>
          <WorkItemImage src="http://cdn.thankyoustudio.com.s3.amazonaws.com/images/swatch-cover.jpg" />
          <WorkItemContent>
            <WorkItemTitle>Swatch</WorkItemTitle>
            <WorkItemTags whitecontent>
              <WorkItemTag>Branding</WorkItemTag>
              <WorkItemTag>Design</WorkItemTag>
              <WorkItemTag>Development</WorkItemTag>
            </WorkItemTags>
          </WorkItemContent>
        </WorkItem>
      </Link>

      <Link href="/onea" as="/work/onea" scroll={false}>
        <WorkItem delay={300}>
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

      <Link href="/copenhagen" as="/work/copenhagen" scroll={false}>
        <WorkItem delay={400}>
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
        <WorkItem whitecontent>
          <WorkItemImage src="http://cdn.thankyoustudio.com.s3.amazonaws.com/images/ferrari-cover.jpg" />
          <WorkItemContent>
            <WorkItemTitle>Ferrari</WorkItemTitle>
            <WorkItemTags whitecontent>
              <WorkItemTag>Branding</WorkItemTag>
              <WorkItemTag>Design</WorkItemTag>
              <WorkItemTag>Development</WorkItemTag>
            </WorkItemTags>
          </WorkItemContent>
        </WorkItem>
      </Link>

      <Link href="/swatch" as="/work/swatch" scroll={false}>
        <WorkItem>
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
        <WorkItem verticalSpan2 vertical>
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
        <WorkItem square>
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
        <WorkItem vertical>
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

    </WorkItems>
  </Wrapper>
)