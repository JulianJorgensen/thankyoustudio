import React, { Component } from 'react';
import styled from 'styled-components';
import { LAYOUT } from 'utils/variables';
import media from 'utils/mediaQueries';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const TabsNav = styled.div`
  display: none;

  ${media.tablet`
    display: flex;
    margin-bottom: 80px;
    width: ${LAYOUT.CONTAINER_WIDTH};  
  `}
`

const TabNavItem = styled.h2`
  position: relative;
  margin-right: 40px;
  font-size: 80px;
  color: inherit;
  cursor: pointer;
  opacity: 0.4;
  transition: opacity 0.2s;
  user-select: none;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    opacity: 0.7;
  }

  &:after {
    content: '';
    position: absolute;
    bottom: -30px;
    left: 0;
    height: 12px;
    width: 100%;
    opacity: 0;
    transition: opacity 0.2s;
    background-color: ${props => props.whiteContent ? 'white' : 'black'};
  }

  ${props => props.active && `
    &, &:after, :hover {
      opacity: 1;
    }
  `}
`

const Tabs = styled.div`
  ${media.tablet`
    display: flex;
    width: ${LAYOUT.CONTAINER_WIDTH};
    padding-right: 300px;
  `}
`

const Tab = styled.div`
  p {
    margin: 0;
  }

  ${media.tablet`
    display: none;
    column-count: 2;

    ${props => props.active && `
      display: block;
    `}
  `}
`

export default class IdentifySimplifyAmplify extends Component {
  constructor() {
    super();
    this.state = {
      selected: 1
    };

    this.selectTab = this.selectTab.bind(this);
  }

  selectTab(tab) {
    this.setState({
      selected: tab
    });
  }

  render() {
    const { selected } = this.state;

    return (
      <Wrapper {...this.props}>
          <TabsNav>
            <TabNavItem {...this.props} active={selected === 1} onClick={() => this.selectTab(1)}>Branding</TabNavItem>
            <TabNavItem {...this.props} active={selected === 2} onClick={() => this.selectTab(2)}>Design</TabNavItem>
            <TabNavItem {...this.props} active={selected === 3} onClick={() => this.selectTab(3)}>Development</TabNavItem>
            <TabNavItem {...this.props} active={selected === 3} onClick={() => this.selectTab(3)}>Video</TabNavItem>
            <TabNavItem {...this.props} active={selected === 3} onClick={() => this.selectTab(3)}>Content</TabNavItem>
          </TabsNav>
          <Tabs>
            <Tab active={selected === 1}>
              <p>Lorem ipsum dolor sit amet, iusto commodo mediocrem eu mei, cibo bonorum repudiandae eum ut. Id graeci volutpat pro. Eum ea ignota ridens debitis, et pro impetus appetere. An sed quas volutpat assentior. Has ut amet stet. Pri torquatos delicatissimi et, id elitr vidisse assentior per, ut mel everti deserunt.</p>
              <p>Ius ad solum iudico incorrupte. In usu natum mentitum indoctum. Nam ut movet postulant, in usu causae platonem definiebas. An possit appetere pertinacia pro.</p>
            </Tab>
            <Tab active={selected === 2}>
              <p>Pri mucius disputando at, quem decore voluptatum ea vix, quodsi nonumes noluisse pro ex. Sed vero aperiri ad. Te aeque oratio invidunt mel. Duo nihil semper te, pro cu tantas everti rationibus.</p>
              <p>Sed eros omnis persecuti in. Mei impetus mnesarchum id, et sed dico fierent temporibus. Quis dicta pri an, id aliquip iudicabit vel. Ne prodesset adolescens eum.</p>
            </Tab>
            <Tab active={selected === 3}>
              <p>Veri probo partem eu vis. Elit perfecto percipitur est id, in viris officiis dissentiet nec. In mei quem meis fabulas, duo ex nisl primis percipitur, ei latine constituam eum. Malorum interesset vim ad. Duo ea tibique denique necessitatibus. Has no tale autem molestie, no vix iriure copiosae senserit.</p>
              <p>Sed eros omnis persecuti in. Mei impetus mnesarchum id, et sed dico fierent temporibus. Quis dicta pri an, id aliquip iudicabit vel. Ne prodesset adolescens eum.</p>
            </Tab>
          </Tabs>
      </Wrapper>
    )
  }
}