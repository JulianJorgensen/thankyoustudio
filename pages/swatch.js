import React from 'react';
import styled from 'styled-components';
import Case from 'layout/components/Case';
import FullCaseVideo from 'components/Case/FullCaseVideo';
import Grid from 'components/Case/Grid';

const LeadText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 80px;
  width: 100%;
  color: white;
`

export default (props) => (
  <Case
    isMobile={props.isMobile}
    title="Swatch"
    subtitle="Design. Experiences."
    imageSrc="http://cdn.thankyoustudio.com.s3.amazonaws.com/images/swatch-cover.jpg"
  >
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
    <FullCaseVideo vimeoId="89115423" />
  </Case>
)