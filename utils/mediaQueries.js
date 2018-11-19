import styled, { css } from 'styled-components';
import { breakpoints } from 'utils/variables';

// Iterate through the sizes and create a media template
export default Object.keys(breakpoints).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${breakpoints[label] / 16}em) {
      ${css(...args)}
    }
  `

  return acc
}, {})
