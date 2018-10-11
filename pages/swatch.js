import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import styles from 'utils/styles';
import Video from 'components/Video';
import Cta from 'components/Cta';
import Marquee from 'components/Marquee';
import { switchToLightContent } from 'store/actions';
import SwatchWatchesImg from 'assets/images/swatch-watches.png';
import SwatchDigitalDisplaysImg from 'assets/images/swatch_digital_displays.jpg';
import SwatchStoreDisplaysImg from 'assets/images/swatch_store_display.jpg';
import SwatchAirportImg from 'assets/images/swatch-airport.jpg';
import SwatchPhotoshoot from 'assets/images/swatch-photoshoot.jpg';
import SwatchPoster from 'assets/images/swatch_start_1-poster.jpg';
import ThankYou from 'components/ThankYou';

const Wrapper = styled.div`
  ${styles.defaultWrapper};
  background-color: white;
  color: white;
`

const CaseContent = styled.div`
  position: relative;
  width: 100%;
  background-color: white;
  color: black;
  padding: 60px;

  ${props => props.intro && `
    width: calc(100% - 80px);
    margin-top: -15vh;
    padding: 30px 60px;

    p {
      font-size: 25px;
    }
  `}

  ${props => props.dark && `
    background-color: black;
    color: white;
  `}
`

const Title = styled.h1`
  font-size: 60px;
  text-transform: uppercase;
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: ${props => props.topMargin ? '100px' : '0'};
  margin-bottom: ${props => props.bottomMargin ? '100px' : '0'};
`

const Col = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  align-items: ${props => props.alignRight ? 'flex-end' : 'flex-start'};

  img {
    max-width: 100%;
  }

  ${props => props.sticky && `
    position: sticky;
    top: 140px;
    align-self: flex-start;
  `}

  ${props => props.short && `
    width: 25%;
  `}

  ${props => props.large && `
    width: 65%;
  `}
`

const Highlights = styled.ul`
  list-style-type: none;
  margin: 0;
`

const Highlight = styled.li`
  opacity: 0.8;
  margin-bottom: 8px;
`

const FeatureVideo = styled.div`
  position: relative;
  width: 100%;
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    height: 200px;
    width: 100%;
    background-color: white;
  }
`

const StyledVideo = styled(Video)`
  position: relative;
  z-index: 2;
`

const Watches = styled.img`
  width: 100%;
  margin: 50px 0;
`

const CaseSectionHeadline = styled.h2`
  font-size: 50px;
`

const CaseSectionSubHeadline = styled.h3`
  font-size: 50px;
  opacity: 0.4;
`

const DigitalDisplays = styled.img`
  width: 100%;
`

const StoreDisplays = styled.img`
  width: 100%;
`

const Airport = styled.img`
  width: 80%;
`

const BusVideo = styled(Video)`
  transform: translateY(-50%);
  display: flex;
  justify-content: flex-end;
`

@connect((store) => ({
  store,
}))
export default class Swatch extends React.Component {
  componentWillMount() {
    this.props.dispatch(switchToLightContent());
  }

  render () {
    return (
      <Wrapper>
        <Marquee vimeoId="294166889" title="Swatch skin" />

        <CaseContent intro>
          <Row>
            <Col large>
              <p>Re-launching an iconic SWATCH SKIN collection with 360° campaign aiming for a major global impact</p>
              <p>By uniting the model and the watch’s physical movements through graphic continuity and exaggerated scale, we’ve positioned SKIN as a vital part of female movement, empowerment and freedom.</p>
            </Col>
            <Col small alignRight>
              <Cta label="Visit site" href='/' />
            </Col>
          </Row>
        </CaseContent>

        <FeatureVideo>
          <StyledVideo vimeoId="294156985" responsive background />
        </FeatureVideo>

        <CaseContent>
          <Row>
            <Col sticky>
              <CaseSectionHeadline>Creating the impossible</CaseSectionHeadline>
              <CaseSectionSubHeadline>Making experiences stand out</CaseSectionSubHeadline>
              <p>Lorem ipsum dolor sit amet, ei melius propriae legendos vis, mel id iisque albucius voluptua, eam ex oblique ceteros qualisque. Pri at eius denique definitiones, in vis etiam liber movet, sed consulatu forensibus ut. Ne graeco cetero pericula vel.</p>
              <p>Eum ei augue ubique, ne sit graece adolescens, nam lobortis posidonium ad. Et mel eros dignissim evertitur, an movet corpora evertitur vix. Mea id noster alienum imperdiet, sale voluptatum eu est.</p>
            </Col>
            <Col alignRight>
              <Watches src={SwatchWatchesImg} />
              <DigitalDisplays src={SwatchDigitalDisplaysImg} />
              <StoreDisplays src={SwatchStoreDisplaysImg} />
            </Col>
          </Row>
        </CaseContent>

        <CaseContent>
          <FeatureVideo>
            <StyledVideo vimeoId="294156985" responsive background />
          </FeatureVideo>

          <Row topMargin bottomMargin>
            <Col>
              <CaseSectionHeadline>Experiences</CaseSectionHeadline>
              <CaseSectionSubHeadline>Creates experiences</CaseSectionSubHeadline>
              <p>Lorem ipsum dolor sit amet, ei melius propriae legendos vis, mel id iisque albucius voluptua, eam ex oblique ceteros qualisque. Pri at eius denique definitiones, in vis etiam liber movet, sed consulatu forensibus ut. Ne graeco cetero pericula vel.</p>
            </Col>
          </Row>

          <Airport src={SwatchAirportImg} />
          <BusVideo vimeoId="294354915" background />

          <Row items={4} topMargin bottomMargin>
            <Col><img src={SwatchPhotoshoot} /></Col>
            <Col><img src={SwatchPoster} /></Col>
            <Col><img src={SwatchPhotoshoot} /></Col>
            <Col><img src={SwatchPoster} /></Col>
          </Row>
        </CaseContent>

        <ThankYou />
      </Wrapper>
    )
  }
}
