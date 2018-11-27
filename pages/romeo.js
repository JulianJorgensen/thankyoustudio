import React from 'react';
import Case from 'components/Case';
// import RomeoCasePlaceholder from 'assets/images/placeholders/ROMEO_CASE_02.jpg'

export default (props) => (
  <Case 
    isMobile={props.isMobile}
    title="Romeo"
    subtitle="Design. Experiences."
    imageSrc="http://cdn.thankyoustudio.com.s3.amazonaws.com/images/romeo-cover.jpg"
  >
  {/* <img src={RomeoCasePlaceholder} /> */}
  </Case>
)