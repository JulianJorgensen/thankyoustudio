import React from 'react';
import styled from 'styled-components';
import Case from 'layout/components/Case';
import Text from 'components/Case/Text';

const Scuderia = styled.div`
  padding: 150px;
  display: flex;
  justify-content: center;
  background: url('http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/ferrari/images/scuderia_ferrari_bg.jpg') center center no-repeat;
  background-size: cover;
`

const FerrariWebcast = styled.div`
  padding: 150px;
  display: flex;
  justify-content: center;
`


export default (props) => (
  <Case
    isMobile={props.isMobile}
    title="Ferrari"
    slug="ferrari"
  >
    <Text intro>
      <h2>IDENTIFY</h2>
      <p>Present the 2015 Ferrari F1 car to the world. Feed the overwhelming existing respect and love for the brand. Bring the fans front row together with the press.</p>
      <p>Make it instant, live and global.</p>

      <h2>SIMPLIFY</h2>
      <p>Create a real-time online “live” event that is being built up through a partly exposed film – climaxing with the reveal of the F1 car. A film about the heritage, the team, the car – all for the fans! </p>
      <p>Launch the film in chapters to tease for the online live launch and simultaneously build up the site to a fully fledged experience site.</p>

      <h2>AMPLIFY</h2>
      <p>We created four chapters: THE LEGACY, THE PEOPLE, THE SECRET, THE REVELATION.</p>
      <p>Building tension and gaining emotional value through a potential reach of 35 million fans until the precise moment the full website is launched presenting car, drivers, interviews, tech specs and other PR material.</p>
    </Text>
    <img src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/ferrari/images/thank-you-ferrari-2.jpg" alt="Ferrari" />

    <FerrariWebcast>
      <video autoPlay muted loop>
        <source src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/ferrari/videos/Ferrari%20web-optimized.mp4" type="video/mp4" />
      </video>
    </FerrariWebcast>

    <Scuderia>
      <video autoPlay muted loop>
        <source src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/ferrari/videos/LOGO-SCUDERIA-web.mp4" type="video/mp4" />
      </video>
    </Scuderia>

    <img src="http://cdn.thankyoustudio.com.s3.amazonaws.com/cases/ferrari/images/thank-you-ferrari.jpg" alt="Ferrari" />

  </Case>
)