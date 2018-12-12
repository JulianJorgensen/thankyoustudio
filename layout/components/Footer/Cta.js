import React from 'react';
import Button from 'components/Button';
import styled from 'styled-components';
import { breakpoint, LAYOUT } from 'utils/variables';

const ContactUs = styled.div`
  text-align: center;
  ${breakpoint.up('m')`
    text-align: left;
  `}
`

const Headline = styled.div`
  font-size: 30px;
`

const Subheadline = styled.div`
  font-size: 30px;
  opacity: 0.6;
  margin-bottom: 20px;
`

export default () => (
  <ContactUs>
    <Headline>Got a project?</Headline>
    <Subheadline>Let's talk</Subheadline>
    <Button white href="/contact" label="Contact us" />
  </ContactUs>
);
