import React from 'react';
import styled from 'styled-components';
import Case from 'layout/components/Case';
import FullCaseVideo from 'components/Case/FullCaseVideo';

export default (props) => (
  <Case
    isMobile={props.isMobile}
    title="Universal Robots"
    subtitle="Design. Experiences."
    imageSrc="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/universal-robots/images/universal-robots-still.jpg"
  >
   <FullCaseVideo vimeoId="303070427" />
  </Case>
)