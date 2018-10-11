import Link from 'next/link';
import styled from 'styled-components';
import media from 'styled-media-query';

const NavLink = styled.a`
  position: relative;
  font-weight: bold;
  font-size: 20px;
  margin-right: 25px;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: inherit;
  cursor: pointer;

  &:before {
    content: '';
    position: absolute;
    background: ${props => props.lightContent ? 'white' : 'black'};
    height: 8px;
    bottom: -10px;
    left: 0;
    visibility: hidden;
    transition: all 0.2s ease-in 0s;
    width: 0%;
  }
  &:hover:before {
    width: 100%;
    visibility: visible;
  }

  ${props => props.active && `
    &:before {
      width: 100%;
      visibility: visible;
    }
  `}

  ${props => props.logo &&`
    position: relative;
    z-index: 99;

    svg {
      width: 40px;
      height: 40px;
      transition: all 0.3s ease;
    }
  `}

  ${props => props.logo && media.lessThan('large')`
    svg {
      width: 30px;
      height: 30px;
    }
  `}

  ${media.lessThan('large')`
    font-size: 18px;
    margin-right: 28px;
  `}

  ${props => !props.logo && media.lessThan('medium')`
    display: none;
  `}
`

export default ({ anchor, href, ...otherProps }) => (
  <Link href={href}>
    <NavLink {...otherProps}>{anchor}</NavLink>
  </Link>
)
