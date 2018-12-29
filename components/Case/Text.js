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
  max-width: 900px;

  p {
    font-size: inherit;

    &:first-child {
      margin-top: 0;
    }
  }

  ${breakpoint.m`
    padding: 0;
  `}

  ${props => props.intro && `
    padding: 30px 0;
  `}

  ${props => props.intro && breakpoint.m`
    display: block;
    padding: 220px 0 80px;
  `}
`

export default ({ children, columnStart, ...props }) => (
  <Wrapper columnStart={columnStart} topPadding={props.topPadding} bottomPadding={props.bottomPadding}>
    <LazyShow noAnimation={props.intro}>
      <StyledText {...props}>
        {children}
      </StyledText>
    </LazyShow>
  </Wrapper>
)