import React from 'react';
import styled from 'styled-components';
import LazyShow from 'components/lazyShow';
import { breakpoint, LAYOUT } from 'utils/variables';
import Text from 'components/Typography/Text';

const Wrapper = styled.div`
  ${breakpoint.up('m')`
    grid-column-start: ${props => props.columnStart};
  `}
`

const StyledText = styled(Text)`
  display: flex;
  align-items: center;

  ${props => props.intro && `
    padding: 30px ${LAYOUT.MOBILE.EDGE_MARGIN};
  `}

  ${breakpoint.up('m')`
    padding: 0;
  `}

  ${props => props.intro && breakpoint.up('m')`
    padding: 315px 40px 40px;
    column-count: 2;
    column-gap: 60px;
  `}
`

export default ({ children, columnStart, ...props }) => (
  <Wrapper columnStart={columnStart}>
    <LazyShow delay={200}>
      <StyledText {...props}>
        {children}
      </StyledText>
    </LazyShow>
  </Wrapper>
)