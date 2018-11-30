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

       <Grid ratio="16x9">
      <Image lazy delay={200} src="" />
    </Grid>


    <Grid cols="2" ratio="16x9">
      <Image lazy delay={200} src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/copenhagen-distillery/images/copenhagen_distillery_henrik.jpg" />
      <Image lazy delay={300} src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/copenhagen-distillery/images/copenhagen_distillery_brygge.jpg" />
    </Grid>

    <Grid bgColor="#540071" ratio="16x9">
      <LeadText>16x9</LeadText>
    </Grid>

    <Grid cols="2" bgColor="#540071" ratio="16x9">
      <LeadText>16x9</LeadText>
      <LeadText>16x9</LeadText>
    </Grid>
    <Grid bgColor="#9100c2" ratio="3x2">
      <LeadText>3x2</LeadText>      
    </Grid>
    <Grid cols="2" bgColor="#9100c2" ratio="3x2">
      <LeadText>3x2</LeadText>      
      <LeadText>3x2</LeadText>
    </Grid>
    <Grid bgColor="#bd4de3" ratio="4x3">
      <LeadText>4x3</LeadText>      
    </Grid>
    <Grid cols="2" bgColor="#bd4de3" ratio="3x4">
      <LeadText>3x4</LeadText>      
      <LeadText>3x4</LeadText>
    </Grid>
    <Grid bgColor="#e392ff" ratio="1x1">
      <LeadText>1x1</LeadText>      
    </Grid>
    <Grid cols="2" bgColor="#e392ff" ratio="1x1">
      <LeadText>1x1</LeadText>      
      <LeadText>1x1</LeadText>      
    </Grid>
    <Grid bgColor="#f0c5ff" ratio="2x3">
      <LeadText>2x3</LeadText>      
    </Grid>
    <Grid cols="2" bgColor="#f0c5ff" ratio="2x3">
      <LeadText>2x3</LeadText>      
      <LeadText>2x3</LeadText>      
    </Grid>

    <FullCaseVideo vimeoId="89115423" />
  </Case>
)