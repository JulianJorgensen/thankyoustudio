import Link from 'next/link';
import styled from 'styled-components';
import { colors, fonts, easings } from 'utils/variables';
import media from "styled-media-query";
import Video from 'components/Video';

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  transform: translateX(100%);
  height: 100%;
  transition: width 0.3s ${easings.easeInOutCustom}, transform 0.3s ${easings.easeInOutCustom};
  overflow: hidden;

  ${props => props.isPrevious && `
    width: 100%;
    z-index: 1;
    transform: translateX(0);
  `}

  ${props => props.isActive && `
    width: 100%;
    z-index: 2;
    transform: translateX(0);
  `}

  ${props => props.isNext && `
    width: 10%;
    z-index: 3;
    transform: translateX(0);

    &:hover {
      width: 15%;
    }
  `}

  ${props => !props.landingSlide && media.lessThan('medium')`
    display: none;
  `}

  background: ${props => props.background};
`

const LowerleftContent = styled.div`
  position: absolute;
  z-index: 1;
  left: 40px;
  bottom: 40px;
  width: 800px;
`

const Title = styled.h1`
  font-size: 140px;
  line-height: 140px;
  font-weight: 800;
  font-family: ${fonts.primary};
  text-transform: uppercase;
  color: ${props => props.lightContent ? 'white' : 'black'};
`

const SubTitle = styled.h2`
  font-size: 26px;
  color: ${colors.gray50};
  font-weight: 300;
  font-family: ${fonts.primary};
  text-transform: uppercase;
  margin-top: 6px;
`

const Image = styled.div`
  position: absolute;
  right: 0;
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: url(${props => props.image});
  transition: transform 6s ${easings.easeOutShine};
  transform: scale(1);

  ${props => props.isActive && `
    transform: scale(1.05);
  `}
`

const Cta = styled.a`
  position: relative;
  z-index: 2;
  cursor: pointer;
  color: ${props => props.lightContent ? 'white' : 'black'};
`

const StyledVideo = styled(Video)`
  width: 100vw;
  height: 56.25vw;
  min-height: 100vh;
  min-width: 177.77vh;
`

export default ({ title, hrefId, subtitle, image, onClickHandler, vimeoId, ...otherProps }) => (
  <Wrapper onClick={onClickHandler} {...otherProps}>
    <LowerleftContent>
      <Link as={`/work/${hrefId}`} href={`/${hrefId}`}><Cta lightContent={otherProps.lightContent}>&rsaquo; See project</Cta></Link>
      <Title {...otherProps}>{title}</Title>
      <SubTitle>{subtitle}</SubTitle>
    </LowerleftContent>
    <Image isActive={otherProps.isActive} image={image} />
    {vimeoId ? <StyledVideo vimeoId={vimeoId} isActive={otherProps.isActive} background responsive /> : ''}
  </Wrapper>
)
