import { Main } from 'container';
import { MainLayout } from 'layouts';
import React from 'react';
import styled from 'styled-components';

const StyledHomePage = styled.div`
  width: 100%;
`

const HomePage = () => {
  return (
    <StyledHomePage>
      <MainLayout>
        <Main />
      </MainLayout>
    </StyledHomePage>
  );
};

export default HomePage;
