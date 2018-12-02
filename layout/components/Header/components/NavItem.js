import styled from 'styled-components';
import media from 'utils/mediaQueries';
import { breakpoint } from 'utils/variables';

const NavLink = styled.div`
  display: none;
  position: relative;
  margin-right: 25px;
  color: inherit;

  ${props => props.logo &&`
    display: block;
    position: relative;
    z-index: 99;

    svg {
      width: 40px;
      height: 40px;
      transition: all 0.3s ease;
    }
  `}

  ${props => props.logo && breakpoint.up('m')`
    svg {
      width: 30px;
      height: 30px;
    }
  `}

  ${breakpoint.up('m')`
    display: block;
  `}

  ${breakpoint.up('m')`
    font-size: 18px;
    margin-right: 28px;
  `}
`

const NavLinkText = styled.div`  
  font-weight: bold;
  font-size: 20px;
  line-height: 100%;
  letter-spacing: 3px;
  text-transform: uppercase;
`

const NavLinkLine = styled.div`
  display: none;
  background-color: ${props => props.navColor};
  height: 8px;
  bottom: -10px;
  left: 0;
  transition: width 0.2s ease-in 0s;
  width: 0%;

  ${breakpoint.up('m')`
    display: block;
    position: absolute;

    ${NavLink}:hover & {
      width: 100%;
    }

    ${props => props.active && `
      width: 100%;
    `}
  `}
`

export default ({ active, anchor, navColor, ...props }) => (
  <NavLink {...props}>
    <NavLinkText>{anchor}</NavLinkText>
    {!props.logo && <NavLinkLine active={active} navColor={navColor} />}
  </NavLink>
)
