import React from 'react';
import { BounceLoader } from 'react-spinners';

export default () => (
  <BounceLoader
    sizeUnit={"px"}
    size={60}
    color={'#fafafa'}
    loading={true}
  />
);