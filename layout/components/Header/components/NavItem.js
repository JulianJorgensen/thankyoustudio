import styled from 'styled-components';
import { breakpoint } from 'utils/variables';

const NavLink = styled.div`
  display: none;
  position: relative;
  margin-right: 25px;
  pointer-events: auto;

  ${props => props.logo &&`
    display: block;
    position: relative;
    z-index: 99;
  `}

  ${breakpoint.m`
    display: block;
  `}

  ${breakpoint.m`
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
  transition: all 0.2s ease 0s;
  width: 0%;

  ${breakpoint.m`
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
