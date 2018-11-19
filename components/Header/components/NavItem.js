import styled from 'styled-components';
import media from 'utils/mediaQueries';

const NavLink = styled.div`
  display: none;
  position: relative;
  margin-right: 25px;
  color: inherit;
  overflow-x: hidden;

  ${props => props.logo &&`
    position: relative;
    z-index: 99;

    svg {
      width: 40px;
      height: 40px;
      transition: all 0.3s ease;
    }
  `}

  ${props => props.logo && `
    display: block;
  `}

  ${props => props.logo && media.desktop`
    svg {
      width: 30px;
      height: 30px;
    }
  `}

  ${media.tablet`
    display: block;
  `}

  ${media.desktop`
    font-size: 18px;
    margin-right: 28px;
  `}
`

const NavLinkText = styled.div`  
  font-weight: bold;
  font-size: 20px;
  letter-spacing: 3px;
  text-transform: uppercase;
`

const NavLinkLine = styled.div`
  background-color: ${props => props.navColor};
  height: 8px;
  bottom: -10px;
  left: 0;
  transition: width 0.2s ease-in 0s;
  width: 0%;

  ${NavLink}:hover & {
    width: 100%;
  }

  ${props => props.active && `
    width: 100%;
  `}
`

export default ({ active, anchor, navColor, ...otherProps }) => (
  <NavLink {...otherProps}>
    <NavLinkText>{anchor}</NavLinkText>
    <NavLinkLine active={active} navColor={navColor} />
  </NavLink>
)
