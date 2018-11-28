import React from 'react';
import styled from 'styled-components';
import Case from 'layout/components/Case';
import FullCaseVideo from 'components/Case/FullCaseVideo';

export default (props) => (
  <Case
    isMobile={props.isMobile}
    title="Steelseries"
    subtitle="Design. Experiences."
    imageSrc="http://cdn.thankyoustudio.com.s3.amazonaws.com/images/onea-cover.jpg"
  >
    <FullCaseVideo vimeoId="215641222" />
  </Case>
)