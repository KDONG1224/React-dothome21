import React from 'react';

import { MainLayout } from 'layouts';
import { Sample } from 'container';

const SamplePage = () => {
  return (
    <MainLayout headerType='sample-page'>
      <Sample />
    </MainLayout>
  );
};

export default SamplePage;
