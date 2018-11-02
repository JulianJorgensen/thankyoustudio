import React, { Component } from 'react';
import PlayIcon from 'assets/icons/FontAwesome/regular/play-circle.svg';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  background-color: #F9F9F9;
  color: black;
`

const FullscreenVideo = styled.video`
  position: absolute;
  min-height: 100%;
  right: 10vw;
  z-index: 3;
`

const MaskedVideo = styled.video`
  position: absolute;
  min-height: 100%;
  max-width: 90vw;
  right: 10vw;
`

const Content = styled.div`
  position: absolute;
  z-index: 4;
  top: 55vh;
  right: 10vw;
  height: 100%;
  width: 90vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Logos = styled.div`
  display: flex;
  justify-content: center;
  height: 150px;
`

const Logo = styled.img`
  position: absolute;
  opacity: 0;
  transition: opacity 0.5s;

  ${props => props.show && `
    opacity: 1;
  `}
`

const PlayReel = styled.div`
  display: flex;
  align-items: center;
  text-transform: uppercase;
  font-weight: bold;

  svg {
    width: 40px;
    height: 40px;
    margin-right: 15px;
  }
`

const Statement = styled.div`
  width: 600px;
  margin-top: 80px;
  text-align: center;
  font-size: 28px;
  font-weight: light;
`

const LogoItems = [
  'http://cdn.thankyoustudio.com.s3.amazonaws.com/images/swatch-logo.png',
  'http://cdn.thankyoustudio.com.s3.amazonaws.com/images/ferrari-logo.png'
];

export default class LandingSlide extends Component {
  constructor() {
    super();

    this.state = {
      activeLogo: 0
    }
  }

  componentDidMount() {
    this.initLogosAutoRotate();

    setTimeout(() => {
      this.setState({
        hideFullscreenVideo: true
      });
    }, 5000);
  }

  initLogosAutoRotate() {
    setInterval(() => {
      const { activeLogo } = this.state;
      this.setState({
        activeLogo: activeLogo === LogoItems.length-1 ? 0 : activeLogo + 1
      });
    }, 4000);
  }

  render() {
    const { hideFullscreenVideo } = this.state;

    return (
      <Wrapper>
        <FullscreenVideo hidden={hideFullscreenVideo} playsInline muted autoPlay>
          <source src="http://cdn.thankyoustudio.com.s3.amazonaws.com/videos/THANYOU_LANDING_08_PART1.mp4" type="video/mp4" />
        </FullscreenVideo>
        <MaskedVideo playsInline autoPlay muted loop>
          <source src="http://cdn.thankyoustudio.com.s3.amazonaws.com/videos/THANYOU_LANDING_08_PART2.mp4" type="video/mp4" />
        </MaskedVideo>
        <Content>
          <Logos>
            {
              LogoItems.map((logoUrl, i) => (
                <Logo show={this.state.activeLogo === i} src={logoUrl} />
              ))
            }
          </Logos>

          <PlayReel><PlayIcon /> Play full reel</PlayReel>

          <Statement>Thank You Studio is a full-service agency, busy designing and crafting beautiful digital products, brands, and experiences.</Statement>
        </Content>
      </Wrapper>  
    )
  }
}