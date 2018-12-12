import React from 'react';
import Case from 'layout/components/Case';
// import RomeoCasePlaceholder from 'assets/images/placeholders/ROMEO_CASE_02.jpg'

export default (props) => (
  <Case 
    isMobile={props.isMobile}
    title="Romeo"
    slug="romeo"
  >
  {/* <img src={RomeoCasePlaceholder} /> */}
  </Case>
)