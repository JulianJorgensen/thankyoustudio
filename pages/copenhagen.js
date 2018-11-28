import React from 'react';
import styled from 'styled-components';
import Case from 'layout/components/Case';
import CaseIntro from 'components/Case/Intro';
import CaseHeader from 'components/Case/Header';
import FullCaseVideo from 'components/Case/FullCaseVideo';

const LogoSection = styled.div`
  display: flex;
  justify-content: center;
  background-color: white;
  padding: 200px 0;
`

export default (props) => (
  <Case 
    isMobile={props.isMobile}
    title="Copenhagen Distillery"
    subtitle="Design. Experiences."
    imageSrc="http://cdn.thankyoustudio.com.s3.amazonaws.com/images/copenhagen-cover.jpg"
  >
    <CaseIntro>
      <h2>IDENTIFY</h2>
      <p>Create the foundation for an identity that’s steeped in tradition, yet embraces the modern and the future.</p>
      <p>Copenhagen Distillery revives a 250 year artisan history with a desire to discover new spirits and experiences. Since the distillery is defined by a mission to shake up the world of spirits, the identity needed to seamlessly represent the balance of tradition and innovation.</p>

      <h2>SIMPLIFY</h2>
      <p>Built the brand—literally. Inside the rustic walls, we built a custom distillation lab dubbed ‘The Black Box’— where all the magic happens. We put the heart of innovation inside the walls of historic stones. A monolith of the future housed within the past, The Black Box is a representation of our design language where tradition and innovation merge.</p>

      <h2>AMPLIFY</h2>
      <p>The blend of modern and handmade expresses the core of Copenhagen Distillery. The philosophy reaches beyond the visual identity, driving the brand, the culture and the product. Starting with the world’s first honey-based gin, we enhanced simple geometric elements with a handmade touch. You can sense the philosophy in every bottle: each one is unique, numbered and signed by the master distiller.</p>
    </CaseIntro>

    <FullCaseVideo vimeoId="262509870" />

    <LogoSection>
      <img src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/copenhagen-distillery/images/logo-small.jpg" alt="Copenhagen Distillery" />
    </LogoSection>


    <img src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/copenhagen-distillery/images/copenhagen-distillery-CPHD_FB_Family_shot_02.jpg" alt="Copenhagen Distillery" />
    <img src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/copenhagen-distillery/images/copenhagen-distillery-gin-tasting.jpg" alt="Copenhagen Distillery" />
    <img src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/copenhagen-distillery/images/copenhagen-distillery-philosophy.jpg" alt="Copenhagen Distillery" />
    <img src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/copenhagen-distillery/images/copenhagen-distillery-pic2-1455892321942-1920.jpg" alt="Copenhagen Distillery" />

  </Case>
)