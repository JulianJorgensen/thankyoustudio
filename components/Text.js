import React from 'react';
import styled from 'styled-components';
import LazyShow from 'components/lazyShow';
import { breakpoint } from 'utils/variables';

const Text = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  font-weight: bold;
  padding: 10px 6px;

  ${breakpoint.up('m')`
    padding: 0;
    font-size: 35px;
  `}
`

const IntroText = styled(Text)`
  display: block;
  align-items: flex-end;

  ${breakpoint.up('m')`
    padding: 290px 40px 10px;
    column-count: 2;
    column-gap: 60px;
  `}
`

export default ({ children, ...props }) => {
  if (props.intro) {
    return (
      <LazyShow delay={200}>
        <IntroText {...props}>
          {children}
        </IntroText>
      </LazyShow>
    )  
  }

  return (
    <LazyShow delay={200}>
      <Text {...props}>
        {children}
      </Text>
    </LazyShow>
  )
}
