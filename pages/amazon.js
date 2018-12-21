import React from 'react';
import Case from 'layout/components/Case';
import FullCaseVideo from 'components/Case/FullCaseVideo';
import Grid from 'components/Grid';
import Text from 'components/Case/Text';
import Image from 'components/Case/Image';

export default (props) => (
  <Case 
    isMobile={props.isMobile}
    title="Amazon"
    slug="amazon"
  >
    <Grid>
      <Text intro>
        <p>Amazon has often been named the world’s most innovative company. They’ve earned this title by designing and engineering such high-profile consumer electronic devices as Fire tablets, Kindle e-readers, Amazon Fire TV, Amazon Echo, and more.</p>
        <p>But creating such revolutionary technology takes a lot of research and development before finally building the first prototypes.</p>
        <p>Amazon reached out to us to assist them in the development of a wide variety of new products. Most notably, an advanced smartphone featuring new revolutionary technologies.</p>
        <p>We were hired to visualise the end result and tell the product’s story through animation and design. To unite both Amazon’s future vision and that of the hundreds of electrical engineers, mathematicians and technologists working towards creating the product.</p>
        <p>We worked tirelessly to find the balance between the multiple departments within their organisation seeing as it was a crucial step in the development process. For us to put a flag in the ground. A goal towards which their innovation lab could be inspired to achieve.</p>
        <p>On top of this visualisation, to make it truly unique and instantly recognisable, we created several distinctive, animated transitional motions and icons which belonged solely to the new product, bringing it to life.</p>
      </Text>
    </Grid>

    <Grid ratio="16x9">
      <FullCaseVideo vimeoId="112287843" />
    </Grid>

  </Case>
)