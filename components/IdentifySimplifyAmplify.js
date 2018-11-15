import React, { Component } from 'react';
import styled from 'styled-components';
import { layout } from 'utils/variables';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const TabsNav = styled.div`
  display: flex;
  margin-bottom: 50px;
  width: ${layout.containerWidth};
`

const TabNavItem = styled.h2`
  margin-right: 40px;
  font-size: 80px;
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

  ${props => props.active && `
    &, :hover {
      opacity: 1;
    }
  `}
`

const Tabs = styled.div`
  display: flex;
  width: ${layout.containerWidth};
  padding-right: 300px;
`

const Tab = styled.div`
  display: none;
  column-count: 2;

  p {
    margin: 0;
  }

  ${props => props.active && `
    display: block;
  `}
`

export default class IdentifySimplifyAmplify extends Component {
  constructor() {
    super();
    this.state = {
      selected: 1
    };
  }

  selectTab(tab) {
    this.setState({
      selected: tab
    });
  }

  render() {
    const { selected } = this.state;

    return (
      <Wrapper>
          <TabsNav>
            <TabNavItem active={selected === 1} onClick={() => this.selectTab(1)}>Identify</TabNavItem>
            <TabNavItem active={selected === 2} onClick={() => this.selectTab(2)}>Simplify</TabNavItem>
            <TabNavItem active={selected === 3} onClick={() => this.selectTab(3)}>Amplify</TabNavItem>
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