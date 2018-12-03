import React from 'react';
import styled from 'styled-components';
import Case from 'layout/components/Case';
import FullCaseVideo from 'components/Case/FullCaseVideo';
import Grid from 'components/Grid';
import Text from 'components/Case/Text';
import Image from 'components/Case/Image';
import { breakpoint, EASINGS, TIMINGS } from 'utils/variables';

const LeadText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 35px;
  width: 100%;
  color: white;

  ${breakpoint.up('m')`
    font-size: 80px;
  `}
`

export default (props) => (
  <Case
    isMobile={props.isMobile}
    title="Universal Robots"
    teaserText="Design. Experiences."
    imageSrc="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/universal-robots/images/universal-robots-still.jpg"
  >
   <FullCaseVideo vimeoId="303070427" />

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