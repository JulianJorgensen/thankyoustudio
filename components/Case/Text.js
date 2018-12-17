import React from 'react';
import styled from 'styled-components';
import LazyShow from 'components/lazyShow';
import { breakpoint, LAYOUT } from 'utils/variables';
import Text from 'components/Typography/Text';

const Wrapper = styled.div`
  padding-top: ${props => props.topPadding ? '80px' : '0'};
  padding-bottom: ${props => props.bottomPadding ? '80px' : '0'};

  ${breakpoint.up('m')`
    padding-top: ${props => props.topPadding ? '200px' : '0'};
    padding-bottom: ${props => props.bottomPadding ? '200px' : '0'};  
    grid-column-start: ${props => props.columnStart};
  `}
`

const StyledText = styled(Text)`
  display: flex;
  flex-direction: column;
  justify-content: center;

  p {
    font-size: inherit;
    line-height: inherit;
  }

  ${breakpoint.up('m')`
    padding: 0;
  `}

  ${props => props.intro && `
    padding: 180px ${LAYOUT.MOBILE.EDGE_MARGIN} 30px;
  `}

  ${props => props.intro && breakpoint.up('m')`
    display: block;
    padding: 350px 40px 80px;
    column-count: 2;
    column-gap: 60px;
  `}
`

export default ({ children, columnStart, ...props }) => (
  <Wrapper columnStart={columnStart} topPadding={props.topPadding} bottomPadding={props.bottomPadding}>
    <LazyShow delay={200}>
      <StyledText {...props}>
        {children}
      </StyledText>
    </LazyShow>
  </Wrapper>
)