import styled, { css } from 'styled-components';
import { BREAKPOINTS } from 'utils/variables';

// Iterate through the sizes and create a media template
export default Object.keys(BREAKPOINTS).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${BREAKPOINTS[label] / 16}em) {
      ${css(...args)}
    }
  `

  return acc
}, {})
