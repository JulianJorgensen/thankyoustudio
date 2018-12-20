import React, { Component } from 'react';
import styled from 'styled-components';
import Logo from 'components/Logo';
import { breakpoint } from 'utils/variables';

const clientTitles = [
  'Swatch',
  'Amazon',
  'Ferrari',
  'MTV',
  'Adobe',
  'Universal Robots',
  'Sigg',
  'Gyldendal',
  'Romeo',
  'Maersk',
  'Agillic',
  'Bundesliga',
  'Copenhagen Distillery',
  'Jabra',
  'Nordisk Film',
  'Steelseries',
  'Happy',
  // 'Heroines',
  // 'Girls Are Awesome',
  // 'MBL',
  // 'DR'
];

const List = styled.ul`
  display: flex;
  align-items: flex-end;
  width: 90vw;
  height: 80px;
`

const TitleItem = styled.li`
  position: absolute;
  opacity: 0;
  transform: translateX(-100px);
  transition: all 0.3s ease;

  ${props => props.active && `
    transform: translateX(0);
    opacity: 1;
  `}

  ${props => props.isNext && `
    transform: translateX(100px);
  `}
`

export default class ClientCarousel extends Component {
  constructor() {
    super();
    this.state = {
      clientTitle: 0
    };
  }

  componentDidMount() {
    this.initClientTitleCarousel();
  }

  componentDidUpdate(oldProps) {
    if (this.props.isActive && !oldProps.isActive) {
      this.initClientTitleCarousel();
      this.setState({
        isActive: true
      });
    } else {
      if (!this.props.isActive && oldProps.isActive) {
        clearInterval(this.interval);
        this.setState({
          isActive: false
        });
      }
    }
  }

  initClientTitleCarousel() {
    this.interval = setInterval(() => {
      this.setState({
        clientTitle: this.state.clientTitle === clientTitles.length - 1 ? 0 : this.state.clientTitle + 1
      });
    }, 1500);
  }

  render() {
    return (
      <List>
        {clientTitles.map((clientTitle, i) => {
          return (
            <TitleItem 
              key={`title-item-${i}`}
              active={i === this.state.clientTitle}
              isNext={i === 0 && this.state.clientTitle === clientTitles.length-1 ? true : i === this.state.clientTitle + 1}
            >
              {clientTitle}
            </TitleItem>
          )
        })}
      </List>
    )
  }
}